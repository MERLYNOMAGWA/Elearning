import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { api, setAuthToken } from "../services/quizApi";
import { type SignupRequest, type AuthResponse } from "../shared/types";
import { useAuth } from "../hooks/useAuth";

export const Signup: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState<SignupRequest>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });
  const [error, setError] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setError(null);

  // Check if passwords match
  if (form.password !== form.confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  try {
    const res = await api.post<AuthResponse>("/auth/signup", form);

    // Set Authorization header for future requests
    setAuthToken(res.data.token);

    // Save user + token in context (AuthProvider handles localStorage for us)
    login(res.data.user, res.data.token);

    // Show success modal
    setShowSuccessModal(true);
  } catch (err) {
    const axiosError = err as AxiosError<{ message?: string }>;
    setError(axiosError.response?.data?.message ?? "Signup failed");
  }
};


  const handleContinueToApp = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-white text-2xl font-semibold mb-2">Join DirectEd</h1>
            <p className="text-gray-400">Create Your Account To Begin</p>
          </div>

          {/* Success Card */}
          <div className="w-full max-w-md bg-yellow-50 rounded-lg p-12 shadow-lg text-center">
            {/* Logo */}
            <div className="flex items-center justify-center mb-8">
              <div className="bg-orange-500 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-orange-500 text-xl font-bold">DirectEd</span>
            </div>

            {/* Success Message */}
            <h2 className="text-2xl font-bold text-orange-500 mb-8">
              Signed up successfully!!
            </h2>

            {/* Continue Button */}
            <button
              onClick={handleContinueToApp}
              className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
              Continue to App
            </button>
          </div>
        </div>
      )}

      {/* Regular Signup Form - Hidden when success modal is shown */}
      {!showSuccessModal && (
        <>
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-orange-500 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white text-xl font-bold">DirectEd</span>
            </div>
            <h1 className="text-white text-2xl font-semibold mb-2">Join DirectEd</h1>
            <p className="text-gray-400">Create Your Account To Begin</p>
          </div>

          {/* Form Card */}
          <div className="w-full max-w-md bg-yellow-50 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Account</h2>
            <p className="text-gray-600 mb-6">Fill in the following:</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Selection */}
              <div className="flex gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setForm(prev => ({ ...prev, role: "student" }))}
                  className={`flex-1 py-2 px-4 rounded-lg border-2 transition-all duration-200 ${
                    form.role === "student"
                      ? "border-orange-500 bg-orange-50 text-orange-700"
                      : "border-gray-300 bg-white text-gray-600 hover:border-gray-400"
                  }`}
                >
                  <span className="mr-2">👨‍🎓</span>Student
                </button>
                <button
                  type="button"
                  onClick={() => setForm(prev => ({ ...prev, role: "instructor" }))}
                  className={`flex-1 py-2 px-4 rounded-lg border-2 transition-all duration-200 ${
                    form.role === "instructor"
                      ? "border-orange-500 bg-orange-50 text-orange-700"
                      : "border-gray-300 bg-white text-gray-600 hover:border-gray-400"
                  }`}
                >
                  <span className="mr-2">👨‍🏫</span>Instructor
                </button>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <div className="relative">
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors duration-200 mt-6"
              >
                Create Account
              </button>
            </form>

            {/* Sign In Link */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                Sign in
              </button>
            </p>

            {/* Error Messages */}
            {error && (
              <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-md">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};