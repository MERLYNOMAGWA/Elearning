import joi from "joi";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import { errorMiddleware } from "./middleware/errorHandler";
import quizRoutes from "./routes/Quiz/quiz.routes"; // <-- import quizzes
import quizAttemptRoutes from "./routes/Quiz/quizAttempts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3500;
const MONGO_URI = process.env.MONGO_URI || "";

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/quizzes", quizRoutes); // <-- register quiz routes
app.use("/api/quiz-attempts", quizAttemptRoutes);

// The global error handler middleware. It MUST be placed after all other routes
// so that it can catch any errors that are passed to the 'next' function.
app.use(errorMiddleware);

// Connect to the database and then start the server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Database connected successfully!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error connecting to the database:", err);
    // Exit the process if the database connection fails
    process.exit(1);
  });
