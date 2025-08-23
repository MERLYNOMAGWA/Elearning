from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings
from langchain.chains import RetrievalQA
from dotenv import load_dotenv
import os

load_dotenv()

def get_educational_retriever():
    embeddings = OpenAIEmbeddings(openai_api_key=os.getenv("OPENAI_API_KEY"))
    db = Chroma(persist_directory=os.getenv("CHROMA_DB_PATH"), embedding_function=embeddings)
    retriever = db.as_retriever(search_kwargs={"k": 5})
    chain = RetrievalQA.from_chain_type(llm=embeddings.client, retriever=retriever)
    return chain