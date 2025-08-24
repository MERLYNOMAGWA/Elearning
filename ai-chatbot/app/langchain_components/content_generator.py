class ContentGenerator:
    def __init__(self):
        pass
    def generate(self, req, conv_output, docs):
        # Return a simple generated structure depending on request_type or quick_action
        items = []
        if req.quick_action == 'quiz' or req.request_type == 'quiz':
            # generate 3 sample questions
            for i in range(1,4):
                items.append({"id": i, "question": f"Sample question {i} on '{req.input}'", "difficulty": req.difficulty_level})
            return {"type":"quiz", "items": items}
        if req.quick_action == 'flashcards' or req.request_type == 'flashcards':
            for i in range(1,4):
                items.append({"id": i, "front": f"Term {i}", "back": f"Definition {i}"})
            return {"type":"flashcards", "items": items}
        # default return - content snippet
        return {"type":"explain", "items": [{"id":1, "text": conv_output.get('text','')} ]}
