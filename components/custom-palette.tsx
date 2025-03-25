"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useBrandTheme } from "./theme-context";

interface CustomPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CustomPalette({
  open,
  onOpenChange,
}: CustomPaletteProps) {
  const { setSelectedTheme } = useBrandTheme();
  const [name, setName] = useState("");
  const [colors, setColors] = useState({
    accent: "#FF385C",
    secondary: "#00A699",
    text: "#484848",
    background: "#FFFFFF",
  });

  const handleColorChange = (colorKey: string, value: string) => {
    setColors((prev) => ({
      ...prev,
      [colorKey]: value,
    }));
  };

  const handleSave = () => {
    if (!name) return;

    setSelectedTheme({
      name,
      colors,
    });

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-white">
        <DialogHeader>
          <DialogTitle className="text-black dark:text-black">
            Create Custom Palette
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-black dark:text-black">
              Palette Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter palette name"
              className="text-black dark:text-black"
            />
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="accent" className="text-black dark:text-black">
                Accent Color
              </Label>
              <div className="flex gap-2">
                <Input
                  id="accent"
                  type="color"
                  value={colors.accent}
                  onChange={(e) => handleColorChange("accent", e.target.value)}
                  className="w-12 h-12 p-1"
                />
                <Input
                  value={colors.accent}
                  onChange={(e) => handleColorChange("accent", e.target.value)}
                  className="text-black dark:text-black"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="secondary" className="text-black dark:text-black">
                Secondary Color
              </Label>
              <div className="flex gap-2">
                <Input
                  id="secondary"
                  type="color"
                  value={colors.secondary}
                  onChange={(e) =>
                    handleColorChange("secondary", e.target.value)
                  }
                  className="w-12 h-12 p-1"
                />
                <Input
                  value={colors.secondary}
                  onChange={(e) =>
                    handleColorChange("secondary", e.target.value)
                  }
                  className="text-black dark:text-black"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="text" className="text-black dark:text-black">
                Text Color
              </Label>
              <div className="flex gap-2">
                <Input
                  id="text"
                  type="color"
                  value={colors.text}
                  onChange={(e) => handleColorChange("text", e.target.value)}
                  className="w-12 h-12 p-1"
                />
                <Input
                  value={colors.text}
                  onChange={(e) => handleColorChange("text", e.target.value)}
                  className="text-black dark:text-black"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label
                htmlFor="background"
                className="text-black dark:text-black"
              >
                Background Color
              </Label>
              <div className="flex gap-2">
                <Input
                  id="background"
                  type="color"
                  value={colors.background}
                  onChange={(e) =>
                    handleColorChange("background", e.target.value)
                  }
                  className="w-12 h-12 p-1"
                />
                <Input
                  value={colors.background}
                  onChange={(e) =>
                    handleColorChange("background", e.target.value)
                  }
                  className="text-black dark:text-black"
                />
              </div>
            </div>
          </div>
          <Button onClick={handleSave} className="mt-4">
            Save Palette
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
