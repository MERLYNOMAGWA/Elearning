import express from "express";
import { Request, Response, NextFunction } from 'express';

import {
  uploadDocument,
  getContent,
  deleteContent,
  getAllContent, // Add this import
} from "../controllers/contentController";
import { uploadDocument as uploadDocumentMiddleware } from "../middleware/upload";
const router = express.Router();

// Add debug route for quick tests
router.post("/upload/debug", (req, res) => {
  console.log("Debug route hit");
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  res.json({ message: "Debug route working" });
});

// GET /api/content - List all content
router.get("/", getAllContent);

// GET /api/content/:id - Get specific content by ID
router.get("/:id", getContent);

// POST /api/content/upload/document - Upload document
// POST /api/content/upload/document - Upload document
router.post(
  "/upload/document",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("=== BEFORE MULTER ===");
    console.log("Request received for upload");
    next();
  },
  uploadDocumentMiddleware.single("document"),
  (error: Error, req: Request, res: Response, next: NextFunction) => {
    // Multer error handler
    if (error) {
      console.error("=== MULTER ERROR ===");
      console.error("Error type:", error.constructor.name);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
      return res.status(400).json({
        status: "error",
        message: "File upload failed",
        error: error.message
      });
    }
    next();
  },
  (req: Request, res: Response, next: NextFunction) => {
    console.log("=== AFTER MULTER ===");
    console.log("Uploaded file info in middleware route:", req.file);
    next();
  },
  uploadDocument
);


// DELETE /api/content/:id - Delete content
router.delete("/:id", deleteContent);

export default router;
