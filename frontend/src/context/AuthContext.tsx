import { createContext } from "react";
import type { User } from "../shared/types";

export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

// no need for explicit type annotation, TS infers it
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
