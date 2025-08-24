# Directed Educational Assistant (Gen AI Phase)
This repository was auto-generated to satisfy the Gen AI Phase rubric for the Directed Educational Assistant project.
It includes a LangServe FastAPI scaffold, LangChain component stubs, Chroma-ready corpus preparation script, LoRA guidance, Docker + Render deployment configs, and a rubric validator.

## Quick start (local)
1. Create and activate a Python venv (python 3.11+ recommended)
   ```bash
   python -m venv venv
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   pip install -r requirements.txt
   ```
2. Prepare embeddings from the knowledge folder:
   ```bash
   python scripts/prepare_embeddings.py
   ```
3. Run the app locally:
   ```bash
   uvicorn app.main:app --host 0.0.0.0 --port 10000 --reload
   ```
4. Test the chat endpoint using curl or Postman against http://localhost:10000/api/assistant/chat

## Deployment (Render)
- See deploy/render.yaml and README-GRADED.md for exact deploy steps and which environment variables to set.

## Important notes
- No API keys or credentials are included. Add keys to environment variables or to your Render secrets.
- LoRA training is not run here; instructions and scripts are included.
