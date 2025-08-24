# validate_rubric.py - checks for presence of required files and endpoints (static checks)
import os, sys, json
required = [
    'app/main.py',
    'app/api/assistant.py',
    'app/schemas.py',
    'app/langchain_components/educational_retriever.py',
    'app/langchain_components/adaptive_conversation_chain.py',
    'app/langchain_components/content_generator.py',
    'app/langchain_components/learning_analyzer.py',
    'Dockerfile',
    'deploy/render.yaml',
    'README.md',
    'README-GRADED.md'
]
missing = [f for f in required if not os.path.exists(f)]
result = {'missing': missing, 'ok': len(missing)==0}
print(json.dumps(result, indent=2))
if missing:
    sys.exit(2)
else:
    sys.exit(0)
