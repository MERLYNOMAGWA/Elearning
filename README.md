# DirectEd - E-learning Platform 🚀

A comprehensive, full-stack e-learning platform designed to connect students with instructors. DirectEd provides a robust, role-based system for course management, content delivery, and progress tracking. Built with the MERN stack and leveraging TypeScript for full-stack type safety, ensuring a secure, scalable, and maintainable learning environment.

## ✨ Key Features

### 📚 Core Functionality

- **User Authentication & Role Management**: Secure signup and login for both students and instructors, with distinct dashboards and access controls
- **Course Catalog & Management**: A powerful content management system for instructors to create, update, and publish courses. Students can browse, search, and filter a wide range of courses
- **Lesson Player & Progress Tracking**: An interactive video player that tracks student progress, with a dedicated dashboard to monitor course completion
- **Interactive Quiz System**: Engage students with timed quizzes, automatic scoring, and comprehensive feedback
- **Virtual AI Assistant**: A context-aware AI chatbot integrated into the platform to provide instant, personalized learning support

### 🎨 UI/UX & Design

- **Responsive Design**: A modern, mobile-first design that provides a seamless experience on any device
- **Intuitive Navigation**: A dynamic sidebar and header that adapt based on the user's role and authentication status
- **View Toggles**: Flexible course display options with a toggle for grid or list views
- **Dark/Light Mode**: A customizable theme with light and dark mode support

## 💻 Tech Stack

### Frontend
- **React**: For building the user interface
- **TypeScript**: For static typing and code reliability
- **Context API**: For global state management (Authentication, Quiz, Theme)
- **Tailwind CSS**: For rapid UI development and styling
- **Vite**: As the build tool for a fast development experience
- **lucide-react**: For a clean and professional icon set

### Backend
- **Node.js & Express**: For the RESTful API server
- **TypeScript**: To ensure a type-safe and robust backend
- **MongoDB & Mongoose**: As the database and object data modeling (ODM) tool
- **JSON Web Tokens (JWT)**: For secure authentication
- **Cloudinary**: For cloud-based storage of course images and materials
- **OpenAI API**: For the virtual AI assistant integration
- **bcryptjs**: For secure password hashing

## ⚙️ Project Structure

The project is organized into frontend and backend directories. Here is a simplified overview of the file architecture:

### Backend (backend/src)
```
backend/src
├── config/                # Environment variables & DB connection
├── controllers/           # API logic for each resource
├── middleware/            # Auth, role, and validation handlers
├── models/                # Mongoose schemas for data models
├── routes/                # API routes for different resources
├── services/              # Business logic for services (e.g., AI)
├── shared/                # Common types for auth, chat, and quizzes
├── types/                 # Custom type definitions
└── ...
```

### Frontend (frontend/src)
```
frontend/src
├── api/                   # API client configuration and functions
├── assets/                # Images and static assets
├── components/            # Reusable UI components
├── context/               # Global state management contexts
├── hooks/                 # Custom React hooks
├── pages/                 # Route-specific components
├── services/              # API calls and data fetching logic
├── shared/                # Common types and constants
├── styles/                # CSS and theme definitions
└── ...
```

## 🛠️ Getting Started

### Prerequisites
- Node.js (LTS version)
- npm or yarn
- MongoDB (local or cloud instance)
- Cloudinary Account
- OpenAI API Key

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Set up the backend:**
   ```bash
   cd backend
   npm install
   ```

3. **Create a `.env` file in the backend directory and add your environment variables:**
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Set up the frontend:**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Run the application:**
   
   In the backend directory, start the server:
   ```bash
   npm run dev
   ```
   
   In a separate terminal, start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

## 🚀 Usage

After starting both the backend and frontend servers:

1. Open your browser and navigate to the frontend URL (typically `http://localhost:3000`)
2. Sign up as either a student or instructor
3. Explore the platform features based on your role
4. Students can browse courses, take quizzes, and track progress
5. Instructors can create and manage courses, upload content, and monitor student progress

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



Project Link: [https://github.com/your-username/your-repo-name](https://github.com/your-username/your-repo-name)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenAI](https://openai.com/)
- [Cloudinary](https://cloudinary.com/)
