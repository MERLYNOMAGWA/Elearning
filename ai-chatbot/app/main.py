"""LangServe FastAPI scaffold for Directed Educational Assistant.
This is a scaffold wired for Gemini via gemini_adapter.py (no keys included).
"""
from fastapi import FastAPI, HTTPException, Request, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from .api import assistant
import uvicorn

app = FastAPI(title="Directed Educational Assistant", version="0.1.0")

# CORS - adjust origins in env for production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(assistant.router, prefix="/api/assistant", tags=["assistant"])

@app.get("/healthz")
def health():
    return {"status":"ok","time":"2025-08-24T09:46:37.697430"}

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=10000, reload=True)
