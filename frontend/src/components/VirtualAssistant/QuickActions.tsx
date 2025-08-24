import React from "react";

interface QuickActionsProps {
  onSelect: (text: string) => void;
}

const actions = [
  "How do I enroll in a course?",
  "Where can I find my certificates?",
  "How do I update my profile?",
  "What platform features are available?",
  "How do quizzes work?",
  "Can you help with course content?",
];

export const QuickActions: React.FC<QuickActionsProps> = ({ onSelect }) => {
  return (
    <div className="p-6 pb-4">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">AI Learning Assistant</h1>
        <span className="px-3 py-1 bg-orange-200 text-orange-700 text-sm rounded-full">
          Powered by AI
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action}
            onClick={() => onSelect(action)}
            className="p-4 bg-white border border-gray-300 rounded-xl text-left text-gray-700 hover:bg-orange-50 hover:border-orange-300 transition-colors"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};