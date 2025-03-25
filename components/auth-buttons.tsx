"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Heart, LogOut } from "lucide-react";
import { AuthModal } from "./auth-modal";
import { SavedPalettesModal } from "@/components/saved-palettes-modal";
import { useAuth } from "./auth-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AuthButtons() {
  const { user, logout, savedPalettes, setSavedPalettes } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showSavedPalettesModal, setShowSavedPalettesModal] = useState(false);
  const [defaultTab, setDefaultTab] = useState<"signin" | "signup">("signin");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchSavedPalettes = async () => {
      if (user) {
        try {
          const response = await fetch("/api/palettes");
          if (response.ok) {
            const data = await response.json();
            setSavedPalettes(data);
          }
        } catch (error) {
          console.error("Failed to fetch palettes:", error);
        }
      }
    };

    fetchSavedPalettes();
  }, [user, setSavedPalettes]);

  const handlePaletteSelect = (colors: string) => {
    // TODO: Implement palette selection logic
    console.log("Selected palette colors:", colors);
  };

  if (!user) {
    return (
      <>
        <Button
          variant="outline"
          onClick={() => {
            setDefaultTab("signin");
            setShowAuthModal(true);
          }}
          className="text-black dark:text-black"
        >
          Sign In
        </Button>
        <Button
          onClick={() => {
            setDefaultTab("signup");
            setShowAuthModal(true);
          }}
          className="bg-black text-white hover:bg-gray-800 dark:bg-black dark:text-white dark:hover:bg-gray-800"
        >
          Sign Up
        </Button>
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          defaultTab={defaultTab}
        />
      </>
    );
  }

  return (
    <>
      <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="text-black dark:text-black">
            <Heart className="w-4 h-4 mr-2" />
            Saved Palettes
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          {savedPalettes.length === 0 ? (
            <DropdownMenuItem disabled>No saved palettes</DropdownMenuItem>
          ) : (
            savedPalettes.map((palette) => (
              <DropdownMenuItem
                key={palette.id}
                onClick={() => handlePaletteSelect(palette.colors)}
              >
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {JSON.parse(palette.colors).map(
                      (color: string, index: number) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      )
                    )}
                  </div>
                  <span className="truncate">{palette.name}</span>
                </div>
              </DropdownMenuItem>
            ))
          )}
          <DropdownMenuItem onClick={() => setShowSavedPalettesModal(true)}>
            Manage Palettes
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        variant="ghost"
        onClick={logout}
        className="text-black dark:text-black"
      >
        <LogOut className="w-4 h-4 mr-2" />
        Sign Out
      </Button>
      <SavedPalettesModal
        isOpen={showSavedPalettesModal}
        onClose={() => setShowSavedPalettesModal(false)}
        currentColors={[]} // TODO: Pass current colors
      />
    </>
  );
}

export function HeroAuthButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();

  if (user) return null;

  return (
    <>
      <Button size="lg" className="gap-2" onClick={() => setIsModalOpen(true)}>
        Sign Up <ArrowRight className="h-4 w-4" />
      </Button>
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultTab="signup"
      />
    </>
  );
}

export function CTAButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();

  if (user) return null;

  return (
    <>
      <Button
        size="lg"
        variant="secondary"
        className="w-full md:w-auto"
        onClick={() => setIsModalOpen(true)}
      >
        Sign Up
      </Button>
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultTab="signup"
      />
    </>
  );
}
