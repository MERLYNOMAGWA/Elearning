from fastapi import APIRouter, HTTPException, Request, Depends
from pydantic import BaseModel, Field
from typing import Optional, Any, Dict
from ..schemas import ChatRequest, ChatResponse
from ..langchain_components.educational_retriever import EducationalRetriever
from ..langchain_components.adaptive_conversation_chain import AdaptiveConversationChain
from ..langchain_components.content_generator import ContentGenerator
from ..langchain_components.learning_analyzer import LearningAnalyzer
from ..langsmith_logger import log_event
import uuid, time

router = APIRouter()

# Initialize components (lightweight instantiation; components are modular)
retriever = EducationalRetriever(knowledge_path="./knowledge")
conversation_chain = AdaptiveConversationChain()
content_generator = ContentGenerator()
analyzer = LearningAnalyzer()

@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(req: ChatRequest):
    request_id = str(uuid.uuid4())
    ts = time.time()
    # Basic validation
    if req.user_type not in ["student","instructor"]:
        raise HTTPException(status_code=400, detail="user_type must be 'student' or 'instructor'")
    # Step 1: retrieval
    docs = retriever.retrieve(req.input, subject=req.subject, top_k=4)
    log_event("retrieval", {"request_id":request_id, "docs_found": len(docs)})

    # Step 2: conversation chain
    conv_output = conversation_chain.run(req, docs)
    log_event("conversation", {"request_id":request_id, "conversation_summary": conv_output.get("summary","")})

    # Step 3: content generation (if requested)
    structured = None
    if req.request_type in ["quiz","content","flashcards"] or req.quick_action in ["quiz","flashcards","explain"]:
        structured = content_generator.generate(req, conv_output, docs)
        log_event("content_generation", {"request_id":request_id, "items": len(structured.get("items",[]))})

    # Step 4: analysis
    analysis = analyzer.analyze(req, conv_output)
    log_event("analysis", {"request_id":request_id, "analysis": analysis})

    response = {
        "status":"success",
        "assistant_response":{
            "text": conv_output.get("text",""),
            "structured": structured or {},
            "evidence": docs,
            "component_logs": {
                "retriever": {"docs_returned": len(docs)},
                "conversation_chain": {"summary": conv_output.get("summary","")},
                "content_generator": {"generated_items": len(structured.get("items",[])) if structured else 0},
                "learning_analyzer": analysis
            }
        },
        "meta": {"request_id": request_id, "timestamp": time.time()}
    }
    return response
