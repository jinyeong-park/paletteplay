"use client";

import { useState } from "react";
import { Copy, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { BrandTheme } from "./theme-context";

interface ThemeCodeExportProps {
  theme: BrandTheme;
}

export default function ThemeCodeExport({ theme }: ThemeCodeExportProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, framework: string) => {
    navigator.clipboard.writeText(text);
    setCopied(framework);
    setTimeout(() => setCopied(null), 2000);
  };

  // Generate CSS code
  const cssCode = `:root {
  --theme-background: #FFFFFF;
  --theme-text: ${theme.colors.text};
  --theme-accent: ${theme.colors.accent};
  --theme-secondary: ${theme.colors.secondary};
}

/* Apply theme colors */
body {
  background-color: var(--theme-background);
  color: var(--theme-text);
}

.accent {
  color: var(--theme-accent);
}

.accent-bg {
  background-color: var(--theme-accent);
}

.secondary {
  color: var(--theme-secondary);
}

.secondary-bg {
  background-color: var(--theme-secondary);
}`;

  // Generate Tailwind CSS code
  const tailwindCode = `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'theme': {
          background: '#FFFFFF',
          text: '${theme.colors.text}',
          accent: '${theme.colors.accent}',
          secondary: '${theme.colors.secondary}',
        }
      }
    }
  }
}

// In your CSS file
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --theme-background: #FFFFFF;
    --theme-text: ${theme.colors.text};
    --theme-accent: ${theme.colors.accent};
    --theme-secondary: ${theme.colors.secondary};
  }
}`;

  // Generate Bootstrap code
  const bootstrapCode = `// _variables.scss
$theme-colors: (
  "background": #FFFFFF,
  "text": ${theme.colors.text},
  "accent": ${theme.colors.accent},
  "secondary": ${theme.colors.secondary}
);

// In your main.scss file
@import "variables";
@import "bootstrap/scss/bootstrap";

// Or use CSS variables
:root {
  --bs-theme-background: #FFFFFF;
  --bs-theme-text: ${theme.colors.text};
  --bs-theme-accent: ${theme.colors.accent};
  --bs-theme-secondary: ${theme.colors.secondary};
}`;

  // Generate Bulma/Materialize code
  const bulmaCode = `// Bulma customization (variables.sass)
$theme-background: #FFFFFF
$theme-text: ${theme.colors.text}
$theme-accent: ${theme.colors.accent}
$theme-secondary: ${theme.colors.secondary}

// You can map these to Bulma variables
$primary: $theme-accent
$text: $theme-text
$link: $theme-accent
$info: $theme-secondary

// Import Bulma after variables
@import "bulma/bulma"`;

  // Generate Foundation code
  const foundationCode = `// Foundation customization (settings.scss)
$theme-background: #FFFFFF;
$theme-text: ${theme.colors.text};
$theme-accent: ${theme.colors.accent};
$theme-secondary: ${theme.colors.secondary};

// Map to Foundation variables
$primary-color: $theme-accent;
$body-font-color: $theme-text;
$body-background: $theme-background;
$secondary-color: $theme-secondary;

// Import Foundation after settings
@import 'foundation';`;

  // Generate Material UI code
  const materialUICode = `// Material UI theme (createTheme)
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '${theme.colors.accent}',
    },
    secondary: {
      main: '${theme.colors.secondary}',
    },
    text: {
      primary: '${theme.colors.text}',
    },
    background: {
      default: '#FFFFFF',
    },
  },
});

// Use with ThemeProvider
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app components */}
    </ThemeProvider>
  );
}`;

  // Generate CSS-in-JS code
  const cssInJSCode = `// Styled Components
import styled from 'styled-components';

// Define theme
const theme = {
  background: '#FFFFFF',
  text: '${theme.colors.text}',
  accent: '${theme.colors.accent}',
  secondary: '${theme.colors.secondary}',
};

// Create a ThemeProvider
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app components */}
    </ThemeProvider>
  );
}

// Use in components
const Button = styled.button\`
  background-color: \${props => props.theme.accent};
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
\`;

// Emotion works similarly
import { css, Global } from '@emotion/react';

const globalStyles = css\`
  :root {
    --theme-background: #FFFFFF;
    --theme-text: ${theme.colors.text};
    --theme-accent: ${theme.colors.accent};
    --theme-secondary: ${theme.colors.secondary};
  }
  
  body {
    background-color: var(--theme-background);
    color: var(--theme-text);
  }
\`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      {/* Your app components */}
    </>
  );
}`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Code className="h-4 w-4" />
          Export Theme Code
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white dark:bg-white">
        <DialogHeader>
          <DialogTitle className="text-black dark:text-black">
            Export {theme.name} Theme
          </DialogTitle>
          <DialogDescription className="text-slate-600 dark:text-slate-600">
            Choose your preferred framework or styling approach to implement
            this theme in your project.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="css" className="mt-4">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 bg-white dark:bg-white">
            <TabsTrigger value="css" className="text-black dark:text-black">
              CSS
            </TabsTrigger>
            <TabsTrigger
              value="tailwind"
              className="text-black dark:text-black"
            >
              Tailwind
            </TabsTrigger>
            <TabsTrigger
              value="bootstrap"
              className="text-black dark:text-black"
            >
              Bootstrap
            </TabsTrigger>
            <TabsTrigger value="bulma" className="text-black dark:text-black">
              Bulma
            </TabsTrigger>
            <TabsTrigger
              value="foundation"
              className="text-black dark:text-black"
            >
              Foundation
            </TabsTrigger>
            <TabsTrigger
              value="material-ui"
              className="text-black dark:text-black"
            >
              Material UI
            </TabsTrigger>
            <TabsTrigger
              value="css-in-js"
              className="text-black dark:text-black"
            >
              CSS-in-JS
            </TabsTrigger>
          </TabsList>

          <div className="mt-4 rounded-md border">
            <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-2">
              <p className="text-sm font-medium">Code Snippet</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">
                  {copied ? "Copied!" : "Click to copy"}
                </span>
              </div>
            </div>

            <TabsContent value="css" className="relative">
              <pre className="overflow-x-auto p-4 text-sm bg-white dark:bg-white">
                <code className="text-black dark:text-black">{cssCode}</code>
              </pre>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-2 bg-white hover:bg-slate-100"
                onClick={() => copyToClipboard(cssCode, "css")}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy</span>
              </Button>
            </TabsContent>

            <TabsContent value="tailwind" className="relative">
              <pre className="overflow-x-auto p-4 text-sm bg-white dark:bg-white">
                <code className="text-black dark:text-black">
                  {tailwindCode}
                </code>
              </pre>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-2 bg-white hover:bg-slate-100"
                onClick={() => copyToClipboard(tailwindCode, "tailwind")}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy</span>
              </Button>
            </TabsContent>

            <TabsContent value="bootstrap" className="relative">
              <pre className="overflow-x-auto p-4 text-sm bg-white dark:bg-white">
                <code className="text-black dark:text-black">
                  {bootstrapCode}
                </code>
              </pre>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-2 bg-white hover:bg-slate-100"
                onClick={() => copyToClipboard(bootstrapCode, "bootstrap")}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy</span>
              </Button>
            </TabsContent>

            <TabsContent value="bulma" className="relative">
              <pre className="overflow-x-auto p-4 text-sm bg-white dark:bg-white">
                <code className="text-black dark:text-black">{bulmaCode}</code>
              </pre>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-2 bg-white hover:bg-slate-100"
                onClick={() => copyToClipboard(bulmaCode, "bulma")}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy</span>
              </Button>
            </TabsContent>

            <TabsContent value="foundation" className="relative">
              <pre className="overflow-x-auto p-4 text-sm bg-white dark:bg-white">
                <code className="text-black dark:text-black">
                  {foundationCode}
                </code>
              </pre>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-2 bg-white hover:bg-slate-100"
                onClick={() => copyToClipboard(foundationCode, "foundation")}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy</span>
              </Button>
            </TabsContent>

            <TabsContent value="material-ui" className="relative">
              <pre className="overflow-x-auto p-4 text-sm bg-white dark:bg-white">
                <code className="text-black dark:text-black">
                  {materialUICode}
                </code>
              </pre>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-2 bg-white hover:bg-slate-100"
                onClick={() => copyToClipboard(materialUICode, "material-ui")}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy</span>
              </Button>
            </TabsContent>

            <TabsContent value="css-in-js" className="relative">
              <pre className="overflow-x-auto p-4 text-sm bg-white dark:bg-white">
                <code className="text-black dark:text-black">
                  {cssInJSCode}
                </code>
              </pre>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-2 bg-white hover:bg-slate-100"
                onClick={() => copyToClipboard(cssInJSCode, "css-in-js")}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy</span>
              </Button>
            </TabsContent>
          </div>

          <div className="mt-4">
            <h4 className="font-medium mb-2">Implementation Tips</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Copy the code snippet and paste it into your project</li>
              <li>
                Adjust variable names to match your existing naming conventions
              </li>
              <li>
                For frameworks, ensure you have the framework installed in your
                project
              </li>
              <li>Consider using CSS variables for maximum compatibility</li>
              <li>Test your implementation across different browsers</li>
            </ul>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
