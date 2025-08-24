import os, json, time
def log_event(stage, payload):
    # Simple file-based logging; in production swap for LangSmith API
    os.makedirs('logs', exist_ok=True)
    path = os.path.join('logs', f'{stage}.log')
    with open(path, 'a', encoding='utf-8') as fh:
        fh.write(json.dumps({"ts": time.time(), "stage": stage, "payload": payload}) + "\n")
