// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import {Login} from "./pages/LoginPage";
import {Signup} from "./pages/SignupPage";
import {ChangePassword} from "./pages/ResetPasswordPage";
import QuizPage from "./components/QuizPage";
import Dashboard from './components/Dashboard'
import { ProtectedRoute } from "./components/ProtectedRoute";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
         
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ChangePassword />} />
           <Route path="/quiz/:lessonId" element={<QuizPage />} />
           <Route path="/dashboard" element={<Dashboard/>} />
           
         <Route
  path="/quiz/:lessonId"
  element={
    <ProtectedRoute role="student">
      <QuizPage />
    </ProtectedRoute>
  }
/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
