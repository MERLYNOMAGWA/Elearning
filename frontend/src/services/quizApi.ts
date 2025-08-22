import axios from "axios";
import { type Quiz, type QuizAttempt } from "../shared/quiztypes";

const API_BASE = "http://localhost:3500/api";

// Create axios instance
export const api = axios.create({
  baseURL: API_BASE,
});

// Function to set Authorization header
export const setAuthToken = (token: string | null) => {
  if (token) api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete api.defaults.headers.common["Authorization"];
};

// Fetch quiz by lesson
export const getQuizByLesson = async (lessonId: string): Promise<Quiz> => {
  const res = await api.get(`/quizzes/${lessonId}`);
  return res.data;
};

// Submit quiz attempt
export const submitQuizAttempt = async (
  attempt: Omit<QuizAttempt, "_id" | "score">
) => {
  const res = await api.post(`/quiz-attempts`, attempt);
  return res.data;
};

// Get quiz attempts
export const getQuizAttempts = async (
  quizId: string
): Promise<QuizAttempt[]> => {
  const res = await api.get(`/quiz-attempts/${quizId}`);
  return res.data;
};
