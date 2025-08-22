export type Role = "student" | "instructor";

export interface User {
  _id: string;
  name: string; // add name here too
  email: string;
  role: Role;
  token?: string; // JWT
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest extends LoginRequest {
  name: string; // ✅ added name
  role: Role;
  confirmPassword: string;
}

export interface ResetPasswordRequest {
  email: string;
}
// shared/types.ts
export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}
