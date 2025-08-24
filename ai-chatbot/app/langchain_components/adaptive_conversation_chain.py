class AdaptiveConversationChain:
    def __init__(self):
        pass
    def run(self, req, docs):
        # Basic synthesized conversational response using retrieved docs.
        summary = ' | '.join([d.get('snippet','')[:120] for d in docs]) if docs else ''
        text = f"(Simulated response) Based on {len(docs)} doc(s): {summary[:500]}"
        return {"text": text, "summary": summary}
