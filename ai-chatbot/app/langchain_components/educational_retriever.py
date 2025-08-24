import os, json
from typing import List, Dict
class EducationalRetriever:
    def __init__(self, knowledge_path='./knowledge'):
        self.knowledge_path = knowledge_path
    def retrieve(self, query: str, subject: str = None, top_k: int = 4) -> List[Dict]:
        # Lightweight retrieval: search markdown files for query terms and return snippets.
        results = []
        q = query.lower()
        for root,_,files in os.walk(self.knowledge_path):
            for f in files:
                if f.lower().endswith('.md'):
                    p = os.path.join(root, f)
                    try:
                        with open(p, 'r', encoding='utf-8') as fh:
                            txt = fh.read()
                            if q in txt.lower():
                                snippet = txt[:500].replace('\n',' ')[:300]
                                results.append({"source_id": os.path.relpath(p), "score": 0.9, "snippet": snippet})
                    except Exception:
                        continue
        # return up to top_k
        return results[:top_k]
