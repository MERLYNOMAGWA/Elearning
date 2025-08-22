import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../middleware/errorHandler";
import {
  UserRole,
  ISignupRequest,
  ILoginRequest,
  IAuthResponse,
  IChangePasswordRequest,
} from "../shared/Authtypes";
import UserModel from "../models/user.model";
import { getJwtSecret } from "../config/env"; // Import the function

const generateToken = (id: string, role: UserRole): string => {
  return jwt.sign({ id, role }, getJwtSecret(), { expiresIn: "1h" });
};
export const signup = async (
  req: Request,
  res: Response<IAuthResponse>,
  next: NextFunction
) => {
  const { email, password, confirmPassword, name, role } =
    req.body as ISignupRequest;

  // Optional extra check (Zod already handles this)
  if (password !== confirmPassword) {
    return next(new AppError("Passwords do not match", 400));
  }

  const userExists = await UserModel.findOne({ email });
  if (userExists) {
    return next(new AppError("User with this email already exists.", 400));
  }

  try {
    const newUser = await UserModel.create({
      name,
      email,
      password,
      role,
    });

    const token = generateToken(
      newUser._id.toString(),
      newUser.role as UserRole
    );

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        _id: newUser._id.toString(),
        name: newUser.name,
        email: newUser.email,
        role: newUser.role as UserRole,
        createdAt: newUser.createdAt.toISOString(),
        updatedAt: newUser.updatedAt.toISOString(),
      },
    });
  } catch (error) {
    next(new AppError("Failed to create user.", 500));
  }
};

export const login = async (
  req: Request,
  res: Response<IAuthResponse>,
  next: NextFunction
) => {
  const { email, password } = req.body as ILoginRequest;

  const user = await UserModel.findOne({ email });
  if (!user) {
    return next(new AppError("Invalid credentials.", 401));
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new AppError("Invalid credentials.", 401));
  }

  const token = generateToken(user._id.toString(), user.role as UserRole);

  res.status(200).json({
    message: "Logged in successfully",
    token,
    user: {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role as UserRole,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    },
  });
};

export const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { oldPassword, newPassword } = req.body as IChangePasswordRequest;

  if (!req.user || !req.user.id) {
    return next(new AppError("Not authenticated.", 401));
  }
  try {
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      return next(new AppError("User not found.", 404));
    }

    const isMatch = await user.matchPassword(oldPassword);
    if (!isMatch) {
      return next(new AppError("Invalid old password.", 400));
    }

    // Hash the new password before saving
    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: "Password updated successfully." });
  } catch (error) {
    next(new AppError("Failed to update password.", 500));
  }
};

export const getProtectedRoute = (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.status(200).json({
    message: `You have access because you are an ${req.user.role} with ID: ${req.user.id}!`,
  });
};
