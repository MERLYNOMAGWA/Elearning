import React, { useState, useEffect, useRef } from "react";
import { type ChatContext, type DisplayMessage } from "../../shared/chatTypes";
import { sendMessage, getHistory } from "../../services/chatApi";
import { MessageBubble } from "./MessageBubble";
import { QuickActions } from "./QuickActions";
import { TypingIndicator } from "./TypingIndicator";

export const VirtualAssistant: React.FC<{ context: ChatContext }> = () => {
  const [messages, setMessages] = useState<DisplayMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Initialize session ID and load chat history
  useEffect(() => {
    const newSessionId = crypto.randomUUID();
    setSessionId(newSessionId);

    // Load chat history if session exists
    loadChatHistory(newSessionId);

    // Initialize with welcome message
    const welcomeMessage: DisplayMessage = {
      id: crypto.randomUUID(),
      sender: "assistant",
      text: "Welcome to your AI Learning Assistant! I'm here to help you with your learning journey. Choose a mode above to get started, or ask me anything.",
      timestamp: new Date().toISOString(),
    };
    setMessages([welcomeMessage]);
  }, []);

  const loadChatHistory = async (sessionId: string) => {
    try {
      const history = await getHistory(sessionId);
      if (history && history.length > 0) {
        const displayMessages: DisplayMessage[] = history.map((msg) => ({
          id: crypto.randomUUID(),
          sender: msg.role === "user" ? "user" : "assistant",
          text: msg.content,
          timestamp: msg.timestamp,
        }));
        setMessages(displayMessages);
      }
    } catch (error) {
      console.error("Failed to load chat history:", error);
    }
  };

  // Auto-scroll to bottom when new messages come in
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim() || !sessionId) return;

    const newMessage: DisplayMessage = {
      id: crypto.randomUUID(),
      sender: "user",
      text,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsTyping(true);

    try {
      console.log("Sending message to API:", { sessionId, message: text });
      console.log("🔧 Using MOCK API for local testing");

      // Send message to backend API
      const response = await sendMessage({
        sessionId,
        message: text,
      });

      console.log("API response received:", response);

      // Create assistant response
      const assistantResponse: DisplayMessage = {
        id: crypto.randomUUID(),
        sender: "assistant",
        text: response.reply,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, assistantResponse]);
    } catch (error: unknown) {
      console.error("Failed to send message:", error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';

      // Check if it's an axios error
      if (error && typeof error === 'object' && 'response' in error) {
        const axiosError = error as { response?: { status?: number; data?: unknown } };
        console.error("Error details:", {
          message: errorMessage,
          status: axiosError.response?.status,
          data: axiosError.response?.data
        });
      }

      // Fallback response on error
      const errorResponse: DisplayMessage = {
        id: crypto.randomUUID(),
        sender: "assistant",
        text: `I'm sorry, I'm having trouble connecting right now. Error: ${errorMessage}. Please try again in a moment.`,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-amber-50 relative rounded-2xl overflow-hidden shadow-lg border border-amber-100">
      {/* Quick Actions Header */}
      <QuickActions onSelect={handleSend} />

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-6 pb-4 space-y-4">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} msg={msg} />
        ))}

        {/* Typing indicator */}
        {isTyping && <TypingIndicator />}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="sticky bottom-0 p-6 pt-4">
        <div className="flex gap-3 items-end">
          <div className="flex-1 bg-white rounded-2xl border border-gray-300 px-4 py-3 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100">
            <input
              className="w-full outline-none text-gray-700 placeholder-gray-400"
              placeholder="Ask General Help..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend(input)}
              disabled={isTyping}
            />
          </div>
          <button
            onClick={() => handleSend(input)}
            disabled={!input.trim() || isTyping}
            className="w-12 h-12 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};