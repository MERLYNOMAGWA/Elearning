from pydantic import BaseModel, Field
from typing import Optional, List, Any, Dict

class ChatRequest(BaseModel):
    user_id: Optional[str] = None
    user_type: str = Field(..., description="student|instructor")
    subject: Optional[str] = None
    request_type: str = Field(..., description="tutoring|quiz|content|flashcards|analysis")
    difficulty_level: Optional[str] = Field('beginner', description='beginner|intermediate|advanced')
    quick_action: Optional[str] = Field(None, description='null|quiz|flashcards|explain')
    input: str
    conversation_id: Optional[str] = None

class EvidenceItem(BaseModel):
    source_id: str
    score: float
    snippet: str

class AssistantResponse(BaseModel):
    text: str
    structured: Optional[Dict[str, Any]] = {}
    evidence: Optional[List[EvidenceItem]] = []
    component_logs: Optional[Dict[str, Any]] = {}

class ChatResponse(BaseModel):
    status: str
    assistant_response: AssistantResponse
    meta: Dict[str, Any]
