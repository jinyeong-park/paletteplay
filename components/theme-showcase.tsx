"use client";

import { Check, ChevronDown, Palette } from "lucide-react";

import { Button } from "@/components/ui/button";
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

export default function ThemeShowcase() {
  const { selectedTheme, setSelectedTheme } = useBrandTheme();

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
            <Button size="sm">Try Now</Button>
          </div>

          {/* Color Swatches - Adjusted positioning */}
          <div className="grid grid-cols-4 gap-4 pr-16 md:pr-24">
            <div className="flex flex-col items-center gap-2">
              <div
                className="h-16 w-16 rounded-full border shadow-sm"
                style={{ backgroundColor: "#FFFFFF" }}
              ></div>
              <span className="text-xs font-medium">Background</span>
              <span className="text-xs text-muted-foreground">#FFFFFF</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="h-16 w-16 rounded-full shadow-sm"
                style={{ backgroundColor: selectedTheme.colors.text }}
              ></div>
              <span className="text-xs font-medium">Text</span>
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
              <span className="text-xs text-muted-foreground">
                {selectedTheme.colors.secondary}
              </span>
            </div>
          </div>

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
    </div>
  );
}
