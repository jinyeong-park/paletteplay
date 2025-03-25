"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

interface User {
  id: string;
  email: string;
  name: string;
}

interface Palette {
  id: string;
  name: string;
  colors: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  savedPalettes: Palette[];
  setSavedPalettes: (palettes: Palette[]) => void;
  addSavedPalette: (palette: Palette) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [savedPalettes, setSavedPalettes] = useState<Palette[]>([]);

  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
      fetchSavedPalettes();
    } else {
      setUser(null);
      setSavedPalettes([]);
    }
  }, [session]);

  const fetchSavedPalettes = async () => {
    try {
      const response = await fetch("/api/palettes");
      if (response.ok) {
        const data = await response.json();
        setSavedPalettes(data);
      }
    } catch (error) {
      console.error("Failed to fetch palettes:", error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut();
      setUser(null);
      setSavedPalettes([]);
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  const addSavedPalette = (palette: Palette) => {
    setSavedPalettes((prev) => [...prev, palette]);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        savedPalettes,
        setSavedPalettes,
        addSavedPalette,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
