# prepare_embeddings.py
# Scans ./knowledge for markdown files, chunks them and writes a simple JSON corpus for embedding.
import os, json, textwrap
out = []
for root,_,files in os.walk('./knowledge'):
    for f in files:
        if f.lower().endswith('.md'):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as fh:
                txt = fh.read()
                out.append({'source': os.path.relpath(p), 'text': txt[:2000]})
with open('corpus_for_embedding.json','w',encoding='utf-8') as fh:
    json.dump(out, fh, indent=2, ensure_ascii=False)
print('Wrote corpus_for_embedding.json with', len(out), 'items')
