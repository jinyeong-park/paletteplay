"use client";

import { Check, ChevronDown, Palette, Plus, Heart } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { useBrandTheme, themes } from "./theme-context";
import ThemeCodeExport from "./theme-code-export";
import CustomPalette from "./custom-palette";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/components/auth-context";
import { AuthModal } from "@/components/auth-modal";

export default function ThemeShowcase() {
  const { selectedTheme, setSelectedTheme } = useBrandTheme();
  const { user, savedPalettes, addSavedPalette } = useAuth();
  const [showCustomPalette, setShowCustomPalette] = useState(false);
  const [customPaletteName, setCustomPaletteName] = useState("");
  const [customPaletteColors, setCustomPaletteColors] = useState({
    accent: "#000000",
    secondary: "#000000",
    text: "#000000",
    background: "#FFFFFF",
  });
  const [isEditingCustomPalette, setIsEditingCustomPalette] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleCustomColorChange = (color: string, value: string) => {
    setCustomPaletteColors((prevColors) => ({
      ...prevColors,
      [color]: value,
    }));
    setSelectedTheme((prevTheme) => ({
      ...prevTheme,
      colors: {
        ...prevTheme.colors,
        [color]: value,
      },
    }));
  };

  const handleSaveCustomPalette = () => {
    if (!customPaletteName) return;

    const newPalette = {
      name: customPaletteName,
      colors: customPaletteColors,
    };

    setCustomPaletteName("");
    setCustomPaletteColors({
      accent: "#000000",
      secondary: "#000000",
      text: "#000000",
      background: "#FFFFFF",
    });

    setSelectedTheme(newPalette);
  };

  const handleSavePalette = async () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    // Check if we already have 3 palettes
    if (savedPalettes.length >= 3) {
      alert("You can only save up to 3 palettes.");
      return;
    }

    // Check for duplicate color combinations
    const isDuplicate = savedPalettes.some((palette) => {
      const paletteColors = JSON.parse(palette.colors);
      return (
        paletteColors.accent === selectedTheme.colors.accent &&
        paletteColors.secondary === selectedTheme.colors.secondary &&
        paletteColors.text === selectedTheme.colors.text &&
        paletteColors.background === selectedTheme.colors.background
      );
    });

    if (isDuplicate) {
      alert("This color combination already exists in your saved palettes.");
      return;
    }

    try {
      const response = await fetch("/api/palettes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: selectedTheme.name,
          colors: JSON.stringify(selectedTheme.colors),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save palette");
      }

      const newPalette = await response.json();
      addSavedPalette(newPalette);
    } catch (error) {
      console.error("Failed to save palette:", error);
      alert("Failed to save palette. Please try again.");
    }
  };

  const handleAuth = () => {
    // Here you would typically make an API call to authenticate
    setShowAuthModal(false);
  };

  const handleCustomPaletteSelect = () => {
    setIsEditingCustomPalette(true);
    setCustomPaletteName("Custom Palette");
    setCustomPaletteColors(selectedTheme.colors);
    setSelectedTheme({
      name: "Custom Palette",
      colors: selectedTheme.colors,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">
          Current Theme:{" "}
          <span className="theme-accent font-semibold">
            {selectedTheme.name}
          </span>
        </h3>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSavePalette}
            className={user ? "" : "text-red-500"}
          >
            <Heart className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Palette className="h-4 w-4" />
                Change Theme
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              side="bottom"
              sideOffset={4}
              className="w-[200px] max-h-[400px] overflow-y-auto bg-white dark:bg-white"
            >
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={handleCustomPaletteSelect}
                  className="gap-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Custom Palette</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {themes.map((theme) => (
                  <DropdownMenuItem
                    key={theme.name}
                    onClick={() => setSelectedTheme(theme)}
                    className="gap-2"
                  >
                    {theme.name === selectedTheme.name && (
                      <Check className="h-4 w-4" />
                    )}
                    <div className="flex items-center gap-2">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: theme.colors.accent }}
                      ></div>
                      <span
                        className={
                          theme.name === selectedTheme.name ? "font-medium" : ""
                        }
                      >
                        {theme.name}
                      </span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <ThemeCodeExport theme={selectedTheme} />
        </div>
      </div>

      <div className="rounded-lg border p-6 bg-white text-card-foreground">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-xl font-bold">{selectedTheme.name} Theme</h3>
              <p className="text-sm text-muted-foreground">
                Experience the {selectedTheme.name} design aesthetic
              </p>
            </div>
          </div>

          {/* Saved Palettes Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Saved Palettes</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedPalettes.map((palette) => (
                <div
                  key={palette.name}
                  className="p-4 rounded-lg border cursor-pointer hover:border-accent transition-colors"
                  onClick={() => setSelectedTheme(palette)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium">{palette.name}</span>
                    <Heart className="h-4 w-4 text-red-500" />
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div
                      className="h-8 rounded-full shadow-sm"
                      style={{ backgroundColor: palette.colors.background }}
                    ></div>
                    <div
                      className="h-8 rounded-full shadow-sm"
                      style={{ backgroundColor: palette.colors.text }}
                    ></div>
                    <div
                      className="h-8 rounded-full shadow-sm"
                      style={{ backgroundColor: palette.colors.accent }}
                    ></div>
                    <div
                      className="h-8 rounded-full shadow-sm"
                      style={{ backgroundColor: palette.colors.secondary }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Color Swatches - Adjusted positioning */}
          <div className="grid grid-cols-4 gap-4 pr-16 md:pr-24">
            <div className="flex flex-col items-center gap-2">
              <div
                className="h-16 w-16 rounded-full border shadow-sm"
                style={{ backgroundColor: "#FFFFFF" }}
              ></div>
              <span className="text-xs font-medium">Background</span>
              {isEditingCustomPalette ? (
                <div className="w-16 h-8 border rounded-md overflow-hidden bg-white">
                  <Input
                    type="color"
                    value="#FFFFFF"
                    onChange={(e) =>
                      handleCustomColorChange("background", e.target.value)
                    }
                    className="w-full h-full p-0 border-0 cursor-pointer"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              ) : null}
              <span className="text-xs text-muted-foreground">#FFFFFF</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="h-16 w-16 rounded-full shadow-sm"
                style={{ backgroundColor: selectedTheme.colors.text }}
              ></div>
              <span className="text-xs font-medium">Text</span>
              {isEditingCustomPalette ? (
                <div className="w-16 h-8 border rounded-md overflow-hidden bg-white">
                  <Input
                    type="color"
                    value={selectedTheme.colors.text}
                    onChange={(e) =>
                      handleCustomColorChange("text", e.target.value)
                    }
                    className="w-full h-full p-0 border-0 cursor-pointer"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              ) : null}
              <span className="text-xs text-muted-foreground">
                {selectedTheme.colors.text}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="h-16 w-16 rounded-full shadow-sm"
                style={{ backgroundColor: selectedTheme.colors.accent }}
              ></div>
              <span className="text-xs font-medium">Accent</span>
              {isEditingCustomPalette ? (
                <div className="w-16 h-8 border rounded-md overflow-hidden bg-white">
                  <Input
                    type="color"
                    value={selectedTheme.colors.accent}
                    onChange={(e) =>
                      handleCustomColorChange("accent", e.target.value)
                    }
                    className="w-full h-full p-0 border-0 cursor-pointer"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              ) : null}
              <span className="text-xs text-muted-foreground">
                {selectedTheme.colors.accent}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="h-16 w-16 rounded-full shadow-sm"
                style={{ backgroundColor: selectedTheme.colors.secondary }}
              ></div>
              <span className="text-xs font-medium">Secondary</span>
              {isEditingCustomPalette ? (
                <div className="w-16 h-8 border rounded-md overflow-hidden bg-white">
                  <Input
                    type="color"
                    value={selectedTheme.colors.secondary}
                    onChange={(e) =>
                      handleCustomColorChange("secondary", e.target.value)
                    }
                    className="w-full h-full p-0 border-0 cursor-pointer"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              ) : null}
              <span className="text-xs text-muted-foreground">
                {selectedTheme.colors.secondary}
              </span>
            </div>
          </div>
          {isEditingCustomPalette && (
            <div className="flex justify-end">
              <Heart
                className="h-6 w-6 text-red-500 cursor-pointer"
                onClick={handleSavePalette}
              />
            </div>
          )}

          {/* Mini Landing Page Preview */}
          <div className="mt-6 border rounded-lg overflow-hidden">
            <div className="p-4 bg-white">
              <div
                className="flex items-center justify-between mb-4 pb-2"
                style={{
                  borderBottom: `1px solid ${selectedTheme.colors.secondary}`,
                }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="h-4 w-4 rounded-full"
                    style={{ backgroundColor: selectedTheme.colors.accent }}
                  ></div>
                  <span
                    style={{
                      color: selectedTheme.colors.text,
                      fontWeight: 600,
                    }}
                  >
                    Brand
                  </span>
                </div>
                <div className="flex gap-2">
                  <span
                    style={{
                      color: selectedTheme.colors.text,
                      fontSize: "0.75rem",
                    }}
                  >
                    Home
                  </span>
                  <span
                    style={{
                      color: selectedTheme.colors.text,
                      fontSize: "0.75rem",
                    }}
                  >
                    About
                  </span>
                  <span
                    style={{
                      color: selectedTheme.colors.text,
                      fontSize: "0.75rem",
                    }}
                  >
                    Contact
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h4
                  style={{
                    color: selectedTheme.colors.text,
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                  }}
                >
                  Welcome to our website
                </h4>
                <p
                  style={{
                    color: selectedTheme.colors.text,
                    fontSize: "0.75rem",
                    opacity: 0.8,
                  }}
                >
                  This is a preview of how the {selectedTheme.name} theme would
                  look on a real website.
                </p>
              </div>

              <div className="flex gap-2 mb-4">
                <button
                  className="px-2 py-1 rounded text-xs"
                  style={{
                    backgroundColor: selectedTheme.colors.accent,
                    color: "#FFFFFF",
                    border: "none",
                  }}
                >
                  Primary Button
                </button>
                <button
                  className="px-2 py-1 rounded text-xs"
                  style={{
                    backgroundColor: "transparent",
                    color: selectedTheme.colors.text,
                    border: `1px solid ${selectedTheme.colors.secondary}`,
                  }}
                >
                  Secondary
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div
                  className="p-2 rounded"
                  style={{
                    backgroundColor: selectedTheme.colors.secondary,
                    opacity: 0.2,
                  }}
                >
                  <div
                    style={{
                      color: selectedTheme.colors.text,
                      fontSize: "0.7rem",
                      fontWeight: 600,
                    }}
                  >
                    Card Title
                  </div>
                  <div
                    style={{
                      color: selectedTheme.colors.text,
                      fontSize: "0.6rem",
                      opacity: 0.8,
                    }}
                  >
                    Card content goes here
                  </div>
                </div>
                <div
                  className="p-2 rounded"
                  style={{
                    backgroundColor: selectedTheme.colors.secondary,
                    opacity: 0.2,
                  }}
                >
                  <div
                    style={{
                      color: selectedTheme.colors.text,
                      fontSize: "0.7rem",
                      fontWeight: 600,
                    }}
                  >
                    Card Title
                  </div>
                  <div
                    style={{
                      color: selectedTheme.colors.text,
                      fontSize: "0.6rem",
                      opacity: 0.8,
                    }}
                  >
                    Card content goes here
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomPalette
        open={showCustomPalette}
        onOpenChange={setShowCustomPalette}
      />
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        defaultTab="signin"
      />
    </div>
  );
}
