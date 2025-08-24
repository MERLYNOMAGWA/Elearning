import multer from "multer";
const { CloudinaryStorage } = require("multer-storage-cloudinary");
import cloudinary from "../config/cloudinary";
console.log("=== CREATING CLOUDINARY UPLOAD MIDDLEWARE ===");
console.log("Cloudinary config:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY ? "***SET***" : "NOT SET",
  api_secret: process.env.CLOUDINARY_API_SECRET ? "***SET***" : "NOT SET"
});

// Cloudinary storage configuration
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req: any, file: any) => {
    // Dynamic params based on file type
    if (file.mimetype.startsWith('text/')) {
      return {
        folder: "elearning-content",
        resource_type: "raw", // Raw for text files
        format: "txt",
      };
    } else if (file.mimetype.startsWith('image/')) {
      return {
        folder: "elearning-content",
        resource_type: "image",
        allowed_formats: ["jpg", "jpeg", "png", "gif"],
      };
    } else {
      return {
        folder: "elearning-content",
        resource_type: "raw", // Raw for documents, videos, etc.
      };
    }
  },
} as any);

console.log("Storage created successfully");

// File filter for security
const fileFilter = (req: any, file: any, cb: any) => {
  console.log("File filter called with:", {
    originalname: file.originalname,
    mimetype: file.mimetype,
    size: file.size
  });
  
  // Allow only specific file types
  const allowedTypes = [
    'image/jpeg', 'image/jpg', 'image/png', 'image/gif',
    'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain', 'video/mp4', 'video/avi', 'video/mov'
  ];
  
  if (allowedTypes.includes(file.mimetype)) {
    console.log("File type allowed:", file.mimetype);
    cb(null, true);
  } else {
    console.log("File type rejected:", file.mimetype);
    cb(new Error('Invalid file type. Only images, PDFs, documents, and videos are allowed.'), false);
  }
};

export const uploadDocument = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
    files: 1, // Only one file at a time
  },
});

console.log("Multer middleware created successfully");

// Export for testing
export const testUpload = multer({
  storage: multer.memoryStorage(), // For testing only
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
