"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Crown } from "lucide-react";

interface Palette {
  id: string;
  name: string;
  colors: string;
  createdAt: string;
}

interface SavedPalettesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentColors: string[];
}

export function SavedPalettesModal({
  isOpen,
  onClose,
  currentColors,
}: SavedPalettesModalProps) {
  const [palettes, setPalettes] = useState<Palette[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newPaletteName, setNewPaletteName] = useState("");
  const [showPremiumPrompt, setShowPremiumPrompt] = useState(false);

  const fetchPalettes = async () => {
    try {
      const response = await fetch("/api/palettes");
      if (response.ok) {
        const data = await response.json();
        setPalettes(data);
      }
    } catch (error) {
      console.error("Failed to fetch palettes:", error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchPalettes();
    }
  }, [isOpen]);

  const handleSavePalette = async () => {
    if (!newPaletteName.trim()) {
      toast.error("Please enter a name for your palette");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/palettes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newPaletteName,
          colors: currentColors,
        }),
      });

      const data = await response.json();

      if (response.status === 402) {
        setShowPremiumPrompt(true);
        return;
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to save palette");
      }

      toast.success("Palette saved successfully!");
      setNewPaletteName("");
      await fetchPalettes();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to save palette"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpgradeToPremium = () => {
    // TODO: Implement premium upgrade logic
    toast.info("Premium upgrade coming soon!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-white">
        <DialogHeader>
          <DialogTitle className="text-black dark:text-black">
            Saved Palettes
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="palette-name">Save Current Palette</Label>
            <div className="flex gap-2">
              <Input
                id="palette-name"
                placeholder="Enter palette name"
                value={newPaletteName}
                onChange={(e) => setNewPaletteName(e.target.value)}
              />
              <Button onClick={handleSavePalette} disabled={isLoading}>
                {isLoading ? "Saving..." : "Save"}
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-black dark:text-black">
              Your Saved Palettes
            </h3>
            {palettes.length === 0 ? (
              <p className="text-sm text-gray-500">No saved palettes yet</p>
            ) : (
              <div className="space-y-4">
                {palettes.map((palette) => (
                  <div key={palette.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-black dark:text-black">
                        {palette.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(palette.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      {JSON.parse(palette.colors).map(
                        (color: string, index: number) => (
                          <div
                            key={index}
                            className="w-8 h-8 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {showPremiumPrompt && (
            <div className="mt-4 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="h-5 w-5 text-yellow-500" />
                <h4 className="font-medium text-black dark:text-black">
                  Upgrade to Premium
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                You've reached the free limit of 2 palettes. Upgrade to Premium
                to save unlimited palettes and unlock more features!
              </p>
              <Button
                onClick={handleUpgradeToPremium}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white"
              >
                Upgrade to Premium
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
