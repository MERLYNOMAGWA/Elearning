export interface ChatMessage {
  id?: string; // Optional for frontend display
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: string;
}

export interface ChatContext {
  page: string;
  courseId?: string;
  lessonId?: string;
}

// Match backend types exactly
export interface MessageRequest {
  sessionId: string;
  message: string;
}

export interface MessageResponse {
  sessionId: string;
  reply: string;
  context: ChatMessage[];
}

export interface HistoryResponse {
  sessionId: string;
  history: ChatMessage[];
}

// Frontend-specific types for display
export interface DisplayMessage {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
}
