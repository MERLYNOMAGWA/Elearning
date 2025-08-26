import os
import yaml
import glob
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter

# Paths
BASE_DIR = os.path.dirname(os.path.dirname(__file__))  # knowledge/
CONTENT_PATH = os.path.join(BASE_DIR, "content")
CHROMA_PATH = os.path.join(BASE_DIR, "chroma_db")


def extract_metadata_and_content(filepath):
    """
    Extract YAML-style metadata and markdown content from a .md file.
    """
    metadata = {}
    content_lines = []
    with open(filepath, "r", encoding="utf-8") as f:
        lines = f.readlines()

    if lines and lines[0].strip() == "---":
        # has YAML frontmatter
        end_index = None
        for i, line in enumerate(lines[1:], 1):
            if line.strip() == "---":
                end_index = i
                break
        if end_index:
            metadata_str = "".join(lines[1:end_index])
            try:
                metadata = yaml.safe_load(metadata_str) or {}
            except yaml.YAMLError as e:
                print(f"[WARN] YAML parse error in {filepath}: {e}")
                metadata = {}
            content_lines = lines[end_index + 1 :]
        else:
            content_lines = lines
    else:
        content_lines = lines

    return metadata, "".join(content_lines)


def clean_metadata(metadata):
    """
    Ensure metadata values are JSON-serializable and Chroma-compatible.
    Lists/dicts are converted to strings.
    """
    clean = {}
    for key, value in metadata.items():
        if isinstance(value, (list, dict)):
            clean[key] = str(value)  # flatten lists/dicts into a string
        else:
            clean[key] = value
    return clean


def main():
    print(f"[DEBUG] Looking for .md files recursively in: {CONTENT_PATH}")
    files = glob.glob(os.path.join(CONTENT_PATH, "**", "*.md"), recursive=True)
    print(f"[DEBUG] Found {len(files)} files")

    if not files:
        print("[ERROR] No markdown files found. Check CONTENT_PATH.")
        return

    docs, metadatas = [], []
    splitter = RecursiveCharacterTextSplitter(chunk_size=800, chunk_overlap=100)

    for filepath in files:
        metadata, content = extract_metadata_and_content(filepath)
        if not content.strip():
            print(f"[WARN] Skipping empty file: {filepath}")
            continue

        chunks = splitter.split_text(content)

        for chunk in chunks:
            docs.append(chunk)
            metadatas.append(clean_metadata(metadata))  # ✅ cleaned metadata

    print(f"[DEBUG] Prepared {len(docs)} text chunks for embedding.")

    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

    vectorstore = Chroma.from_texts(
        texts=docs,
        embedding=embeddings,
        metadatas=metadatas,
        persist_directory=CHROMA_PATH,
    )

    vectorstore.persist()
    print(f"[SUCCESS] Vectorstore saved at: {CHROMA_PATH}")


if __name__ == "__main__":
    main()
