from fastapi import APIRouter, Request
from pydantic import BaseModel
from chains.pipeline import run_educational_workflow

router = APIRouter()

class ChatRequest(BaseModel):
    user_type: str  # "student" or "instructor"
    subject: str = None
    auto_detect_topic: bool = False
    request_type: str  # "tutoring", "quiz_generation", "content_creation"
    difficulty_level: str  # "beginner", "intermediate", "advanced"
    query: str

@router.post("/api/assistant/chat")
async def assistant_chat(request: ChatRequest):
    # Build student/instructor profile
    profile = {
        "role": request.user_type,
        "subject": request.subject,
        "auto_detect": request.auto_detect_topic,
        "request_type": request.request_type,
        "difficulty": request.difficulty_level
    }

    # Run orchestrated educational workflow
    result = run_educational_workflow(request.query, profile)

    # Tailor response based on request_type
    if request.request_type == "tutoring":
        return {"response": result["explanation"]}
    elif request.request_type == "quiz_generation":
        return {"response": result["practice_materials"]}
    elif request.request_type == "content_creation":
        return {
            "retrieved": result["retrieved_content"],
            "generated": result["practice_materials"]
        }
    else:
        return {"error": "Invalid request_type"}