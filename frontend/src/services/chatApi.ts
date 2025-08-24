import {
  type MessageRequest,
  type MessageResponse,
  type ChatMessage,
} from "../shared/chatTypes";

// Mock AI responses for local testing
const mockAIResponses = {
  "enroll": "To enroll in a course, navigate to the course page and click the 'Enroll' button. You can browse all available courses from your dashboard.",
  "certificate": "Your certificates are available in your profile section once you complete a course. They're automatically generated and ready for download.",
  "profile": "You can update your profile by clicking on your avatar in the top-right corner and selecting 'Profile Settings'.",
  "quiz": "Quizzes are available for each lesson to help you test your understanding. Your progress is automatically saved.",
  "help": "I'm here to help! You can ask me about courses, certificates, your profile, or general platform navigation.",
  "feature": "Our platform features include: video lessons, interactive quizzes, progress tracking, certificates, and this AI assistant.",
  "default": "That's a great question! I'm here to help you with your learning journey. You can ask about courses, certificates, profiles, or platform features."
};

// Simulate API delay
const simulateAPIDelay = () => new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

// Generate contextual response based on user message
const generateMockResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes("enroll") || lowerMessage.includes("course")) {
    return mockAIResponses.enroll;
  }
  if (lowerMessage.includes("certificate")) {
    return mockAIResponses.certificate;
  }
  if (lowerMessage.includes("profile") || lowerMessage.includes("account")) {
    return mockAIResponses.profile;
  }
  if (lowerMessage.includes("quiz") || lowerMessage.includes("test")) {
    return mockAIResponses.quiz;
  }
  if (lowerMessage.includes("help") || lowerMessage.includes("support")) {
    return mockAIResponses.help;
  }
  if (lowerMessage.includes("feature") || lowerMessage.includes("platform")) {
    return mockAIResponses.feature;
  }
  
  return mockAIResponses.default;
};

// Mock chat history storage
const mockChatHistory = new Map<string, ChatMessage[]>();

export const sendMessage = async (req: MessageRequest): Promise<MessageResponse> => {
  console.log("🔧 MOCK API: Processing message:", req);
  
  // Simulate API delay
  await simulateAPIDelay();
  
  // Generate AI response
  const aiResponse = generateMockResponse(req.message);
  
  // Store in mock history
  if (!mockChatHistory.has(req.sessionId)) {
    mockChatHistory.set(req.sessionId, []);
  }
  
  const session = mockChatHistory.get(req.sessionId)!;
  session.push({
    role: "user",
    content: req.message,
    timestamp: new Date().toISOString()
  });
  session.push({
    role: "assistant", 
    content: aiResponse,
    timestamp: new Date().toISOString()
  });
  
  console.log("🔧 MOCK API: Generated response:", aiResponse);
  
  return {
    sessionId: req.sessionId,
    reply: aiResponse,
    context: session.slice(-10) // Last 10 messages
  };
};

export const getHistory = async (sessionId: string) => {
  console.log("🔧 MOCK API: Fetching history for session:", sessionId);
  
  // Simulate API delay
  await simulateAPIDelay();
  
  const history = mockChatHistory.get(sessionId) || [];
  console.log("🔧 MOCK API: Returning history:", history.length, "messages");
  
  return history;
};
