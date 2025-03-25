import { ArrowRight, Palette, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ThemeShowcase from "@/components/theme-showcase";
import FeatureCard from "@/components/feature-card";
import PricingCard from "@/components/pricing-card";
import { ThemeProvider } from "@/components/theme-provider";
import { BrandThemeProvider } from "@/components/theme-context";
import ThemeWrapper from "@/components/theme-wrapper";

export default function Home() {
  return (
    <ThemeProvider>
      <BrandThemeProvider>
        <ThemeWrapper>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2 font-bold">
                  <Palette className="h-6 w-6 theme-accent" />
                  <span>PalettePlay</span>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                  <Link
                    href="#features"
                    className="text-sm font-medium hover:text-primary"
                  >
                    Features
                  </Link>
                  <Link
                    href="#themes"
                    className="text-sm font-medium hover:text-primary"
                  >
                    Themes
                  </Link>
                  <Link
                    href="#pricing"
                    className="text-sm font-medium hover:text-primary"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="#faq"
                    className="text-sm font-medium hover:text-primary"
                  >
                    FAQ
                  </Link>
                </nav>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hidden md:flex"
                  >
                    Log in
                  </Button>
                  <Button size="sm">Get Started</Button>
                </div>
              </div>
            </header>
            <main className="flex-1">
              {/* Hero Section */}
              <section className="container py-24 md:py-32 space-y-8">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    <div>Smart Color,</div>
                    <div>Simple Choice.</div>
                  </h1>
                  <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    Create stunning web designs with AI-powered color palettes
                    inspired by the world's most iconic tech brands.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Button size="lg" className="gap-2">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline">
                      View Demos
                    </Button>
                  </div>
                </div>
                <div className="mx-auto mt-16 max-w-5xl rounded-lg border p-4 shadow-lg">
                  <ThemeShowcase />
                </div>
              </section>

              {/* Features Section */}
              <section id="features" className="container py-20 space-y-16">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Powerful AI Design Features
                  </h2>
                  <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    Leverage the power of artificial intelligence to create
                    unique, harmonious color palettes for your projects.
                  </p>
                </div>
                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                  <FeatureCard
                    icon={<Palette className="h-10 w-10" />}
                    title="AI Color Palette Generator"
                    description="Generate harmonious color schemes based on machine learning algorithms and color theory."
                  />
                  <FeatureCard
                    icon={<Sparkles className="h-10 w-10" />}
                    title="Brand Identity Extraction"
                    description="Upload your logo and let our AI extract and suggest complementary color palettes."
                  />
                  <FeatureCard
                    icon={<Zap className="h-10 w-10" />}
                    title="Accessibility Optimization"
                    description="Ensure your color choices meet WCAG standards with our AI contrast analyzer."
                  />
                </div>
              </section>

              {/* Themes Section */}
              <section id="themes" className="container py-20 space-y-16">
                <div className="container space-y-16">
                  <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                      Iconic Web Design Themes
                    </h2>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                      Choose from 7 premium themes inspired by the world's most
                      recognizable tech brands.
                    </p>
                  </div>
                  <Tabs defaultValue="airbnb" className="mx-auto max-w-4xl">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
                      <TabsTrigger value="airbnb">Airbnb</TabsTrigger>
                      <TabsTrigger value="amazon">Amazon</TabsTrigger>
                      <TabsTrigger value="docker">Docker</TabsTrigger>
                      <TabsTrigger value="stripe">Stripe</TabsTrigger>
                      <TabsTrigger value="notion">Notion</TabsTrigger>
                      <TabsTrigger value="github">GitHub</TabsTrigger>
                      <TabsTrigger value="apple">Apple</TabsTrigger>
                    </TabsList>
                    <TabsContent value="airbnb" className="mt-6">
                      <Card>
                        <CardHeader className="bg-[#FF385C]/10 border-b">
                          <CardTitle className="text-[#FF385C]">
                            Airbnb Theme
                          </CardTitle>
                          <CardDescription>
                            Clean, minimalist layout with warm, inviting colors
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid gap-4 md:grid-cols-4">
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#FFFFFF] border"></div>
                              <span className="text-xs">#FFFFFF</span>
                              <span className="text-xs text-muted-foreground">
                                Background
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#222222]"></div>
                              <span className="text-xs">#222222</span>
                              <span className="text-xs text-muted-foreground">
                                Text
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#FF385C]"></div>
                              <span className="text-xs">#FF385C</span>
                              <span className="text-xs text-muted-foreground">
                                Accent
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#008489]"></div>
                              <span className="text-xs">#008489</span>
                              <span className="text-xs text-muted-foreground">
                                Secondary
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="amazon" className="mt-6">
                      <Card>
                        <CardHeader className="bg-[#FF9900]/10 border-b">
                          <CardTitle className="text-[#FF9900]">
                            Amazon Theme
                          </CardTitle>
                          <CardDescription>
                            Utilitarian design with high contrast readability
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid gap-4 md:grid-cols-4">
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#FFFFFF] border"></div>
                              <span className="text-xs">#FFFFFF</span>
                              <span className="text-xs text-muted-foreground">
                                Background
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#0F1111]"></div>
                              <span className="text-xs">#0F1111</span>
                              <span className="text-xs text-muted-foreground">
                                Text
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#FF9900]"></div>
                              <span className="text-xs">#FF9900</span>
                              <span className="text-xs text-muted-foreground">
                                Accent
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#232F3E]"></div>
                              <span className="text-xs">#232F3E</span>
                              <span className="text-xs text-muted-foreground">
                                Secondary
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="docker" className="mt-6">
                      <Card>
                        <CardHeader className="bg-[#2496ED]/10 border-b">
                          <CardTitle className="text-[#2496ED]">
                            Docker Theme
                          </CardTitle>
                          <CardDescription>
                            Technical, precise aesthetic with strong blue
                            dominance
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid gap-4 md:grid-cols-4">
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#2496ED]"></div>
                              <span className="text-xs">#2496ED</span>
                              <span className="text-xs text-muted-foreground">
                                Background
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#FFFFFF] border"></div>
                              <span className="text-xs">#FFFFFF</span>
                              <span className="text-xs text-muted-foreground">
                                Text
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#1D94C9]"></div>
                              <span className="text-xs">#1D94C9</span>
                              <span className="text-xs text-muted-foreground">
                                Secondary
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#394D54]"></div>
                              <span className="text-xs">#394D54</span>
                              <span className="text-xs text-muted-foreground">
                                Accent
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="stripe" className="mt-6">
                      <Card>
                        <CardHeader className="bg-[#635BFF]/10 border-b">
                          <CardTitle className="text-[#635BFF]">
                            Stripe Theme
                          </CardTitle>
                          <CardDescription>
                            Elegant, professional design with soft color
                            transitions
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid gap-4 md:grid-cols-4">
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#FFFFFF] border"></div>
                              <span className="text-xs">#FFFFFF</span>
                              <span className="text-xs text-muted-foreground">
                                Background
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#425466]"></div>
                              <span className="text-xs">#425466</span>
                              <span className="text-xs text-muted-foreground">
                                Text
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#635BFF]"></div>
                              <span className="text-xs">#635BFF</span>
                              <span className="text-xs text-muted-foreground">
                                Accent
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#E5E7EB]"></div>
                              <span className="text-xs">#E5E7EB</span>
                              <span className="text-xs text-muted-foreground">
                                Secondary
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="notion" className="mt-6">
                      <Card>
                        <CardHeader className="bg-[#0070F3]/10 border-b">
                          <CardTitle className="text-[#0070F3]">
                            Notion Theme
                          </CardTitle>
                          <CardDescription>
                            Minimalist workspace aesthetic with high readability
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid gap-4 md:grid-cols-4">
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#FFFFFF] border"></div>
                              <span className="text-xs">#FFFFFF</span>
                              <span className="text-xs text-muted-foreground">
                                Background
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#37352F]"></div>
                              <span className="text-xs">#37352F</span>
                              <span className="text-xs text-muted-foreground">
                                Text
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#0070F3]"></div>
                              <span className="text-xs">#0070F3</span>
                              <span className="text-xs text-muted-foreground">
                                Accent
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#F5F5F5]"></div>
                              <span className="text-xs">#F5F5F5</span>
                              <span className="text-xs text-muted-foreground">
                                Secondary
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="github" className="mt-6">
                      <Card>
                        <CardHeader className="bg-[#0366D6]/10 border-b">
                          <CardTitle className="text-[#0366D6]">
                            GitHub Theme
                          </CardTitle>
                          <CardDescription>
                            Developer-focused design with high-contrast
                            readability
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid gap-4 md:grid-cols-4">
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#FFFFFF] border"></div>
                              <span className="text-xs">#FFFFFF</span>
                              <span className="text-xs text-muted-foreground">
                                Background
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#24292E]"></div>
                              <span className="text-xs">#24292E</span>
                              <span className="text-xs text-muted-foreground">
                                Text
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#0366D6]"></div>
                              <span className="text-xs">#0366D6</span>
                              <span className="text-xs text-muted-foreground">
                                Accent
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#6A737D]"></div>
                              <span className="text-xs">#6A737D</span>
                              <span className="text-xs text-muted-foreground">
                                Secondary
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="apple" className="mt-6">
                      <Card>
                        <CardHeader className="bg-[#0071E3]/10 border-b">
                          <CardTitle className="text-[#0071E3]">
                            Apple Theme
                          </CardTitle>
                          <CardDescription>
                            Minimalist, premium design with extensive white
                            space
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid gap-4 md:grid-cols-4">
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#FFFFFF] border"></div>
                              <span className="text-xs">#FFFFFF</span>
                              <span className="text-xs text-muted-foreground">
                                Background
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#1D1D1F]"></div>
                              <span className="text-xs">#1D1D1F</span>
                              <span className="text-xs text-muted-foreground">
                                Text
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#0071E3]"></div>
                              <span className="text-xs">#0071E3</span>
                              <span className="text-xs text-muted-foreground">
                                Accent
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-12 w-12 rounded-full bg-[#86868B]"></div>
                              <span className="text-xs">#86868B</span>
                              <span className="text-xs text-muted-foreground">
                                Secondary
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              </section>

              {/* Mood-Based Themes Section */}
              <section id="mood-themes" className="container py-20 space-y-16">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Thematic Color Palettes: Mood and Atmosphere Collection
                  </h2>
                  <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    Explore color palettes designed to evoke specific moods and
                    atmospheres for your projects.
                  </p>
                </div>
                <Tabs defaultValue="dreamy" className="mx-auto max-w-4xl">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
                    <TabsTrigger value="dreamy">Dreamy</TabsTrigger>
                    <TabsTrigger value="tech">Tech Minimalist</TabsTrigger>
                    <TabsTrigger value="finance">Finance</TabsTrigger>
                    <TabsTrigger value="interior">Interior</TabsTrigger>
                    <TabsTrigger value="creative">Creative Arts</TabsTrigger>
                    <TabsTrigger value="wellness">Wellness</TabsTrigger>
                    <TabsTrigger value="luxury">Luxury</TabsTrigger>
                    <TabsTrigger value="startup">Startup</TabsTrigger>
                  </TabsList>
                  <TabsContent value="dreamy" className="mt-6">
                    <Card>
                      <CardHeader className="bg-[#B57EDC]/10 border-b">
                        <CardTitle className="text-[#B57EDC]">
                          Dreamy Palette
                        </CardTitle>
                        <CardDescription>
                          Ethereal, soft aesthetic with gentle, floating
                          sensation
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="grid gap-4 md:grid-cols-4">
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#F0E6FF] border"></div>
                            <span className="text-xs">#F0E6FF</span>
                            <span className="text-xs text-muted-foreground">
                              Background
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#4A4A6A]"></div>
                            <span className="text-xs">#4A4A6A</span>
                            <span className="text-xs text-muted-foreground">
                              Primary Text
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#B57EDC]"></div>
                            <span className="text-xs">#B57EDC</span>
                            <span className="text-xs text-muted-foreground">
                              Accent
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#D8BFD8]"></div>
                            <span className="text-xs">#D8BFD8</span>
                            <span className="text-xs text-muted-foreground">
                              Secondary
                            </span>
                          </div>
                        </div>
                        <div className="mt-6 grid gap-2">
                          <h4 className="font-medium">Characteristics:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Ethereal, soft aesthetic</li>
                            <li>Gentle, floating sensation</li>
                            <li>Romantic and whimsical</li>
                            <li>Reminiscent of dawn and twilight</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="tech" className="mt-6">
                    <Card>
                      <CardHeader className="bg-[#16213E]/10 border-b">
                        <CardTitle className="text-[#16213E]">
                          Tech Minimalist Palette
                        </CardTitle>
                        <CardDescription>
                          Clean, precise design with modern technological feel
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="grid gap-4 md:grid-cols-4">
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#F4F7F9] border"></div>
                            <span className="text-xs">#F4F7F9</span>
                            <span className="text-xs text-muted-foreground">
                              Background
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#1A1A2E]"></div>
                            <span className="text-xs">#1A1A2E</span>
                            <span className="text-xs text-muted-foreground">
                              Primary Text
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#16213E]"></div>
                            <span className="text-xs">#16213E</span>
                            <span className="text-xs text-muted-foreground">
                              Accent
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#0F3460]"></div>
                            <span className="text-xs">#0F3460</span>
                            <span className="text-xs text-muted-foreground">
                              Secondary
                            </span>
                          </div>
                        </div>
                        <div className="mt-6 grid gap-2">
                          <h4 className="font-medium">Characteristics:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Clean, precise design</li>
                            <li>Modern technological feel</li>
                            <li>Crisp and intelligent</li>
                            <li>Futuristic undertones</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="finance" className="mt-6">
                    <Card>
                      <CardHeader className="bg-[#2980B9]/10 border-b">
                        <CardTitle className="text-[#2980B9]">
                          Finance Professional Palette
                        </CardTitle>
                        <CardDescription>
                          Trustworthy and stable with corporate reliability
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="grid gap-4 md:grid-cols-4">
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#FFFFFF] border"></div>
                            <span className="text-xs">#FFFFFF</span>
                            <span className="text-xs text-muted-foreground">
                              Background
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#2C3E50]"></div>
                            <span className="text-xs">#2C3E50</span>
                            <span className="text-xs text-muted-foreground">
                              Primary Text
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#34495E]"></div>
                            <span className="text-xs">#34495E</span>
                            <span className="text-xs text-muted-foreground">
                              Accent
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#2980B9]"></div>
                            <span className="text-xs">#2980B9</span>
                            <span className="text-xs text-muted-foreground">
                              Secondary
                            </span>
                          </div>
                        </div>
                        <div className="mt-6 grid gap-2">
                          <h4 className="font-medium">Characteristics:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Trustworthy and stable</li>
                            <li>Corporate and reliable</li>
                            <li>Sophisticated elegance</li>
                            <li>Confidence-inspiring</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="interior" className="mt-6">
                    <Card>
                      <CardHeader className="bg-[#8C7B75]/10 border-b">
                        <CardTitle className="text-[#8C7B75]">
                          Interior Design Palette
                        </CardTitle>
                        <CardDescription>
                          Organic and natural with sophisticated neutrals
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="grid gap-4 md:grid-cols-4">
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#F5F5F5] border"></div>
                            <span className="text-xs">#F5F5F5</span>
                            <span className="text-xs text-muted-foreground">
                              Background
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#3E4444]"></div>
                            <span className="text-xs">#3E4444</span>
                            <span className="text-xs text-muted-foreground">
                              Primary Text
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#8C7B75]"></div>
                            <span className="text-xs">#8C7B75</span>
                            <span className="text-xs text-muted-foreground">
                              Accent
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#B8B8B8]"></div>
                            <span className="text-xs">#B8B8B8</span>
                            <span className="text-xs text-muted-foreground">
                              Secondary
                            </span>
                          </div>
                        </div>
                        <div className="mt-6 grid gap-2">
                          <h4 className="font-medium">Characteristics:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Organic and natural</li>
                            <li>Sophisticated neutrals</li>
                            <li>Calming and harmonious</li>
                            <li>Texture-inspired colors</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="creative" className="mt-6">
                    <Card>
                      <CardHeader className="bg-[#E74C3C]/10 border-b">
                        <CardTitle className="text-[#E74C3C]">
                          Creative Arts Palette
                        </CardTitle>
                        <CardDescription>
                          Bold and expressive with energetic contrasts
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="grid gap-4 md:grid-cols-4">
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#FAFAFA] border"></div>
                            <span className="text-xs">#FAFAFA</span>
                            <span className="text-xs text-muted-foreground">
                              Background
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#2C3E50]"></div>
                            <span className="text-xs">#2C3E50</span>
                            <span className="text-xs text-muted-foreground">
                              Primary Text
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#E74C3C]"></div>
                            <span className="text-xs">#E74C3C</span>
                            <span className="text-xs text-muted-foreground">
                              Accent
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#3498DB]"></div>
                            <span className="text-xs">#3498DB</span>
                            <span className="text-xs text-muted-foreground">
                              Secondary
                            </span>
                          </div>
                        </div>
                        <div className="mt-6 grid gap-2">
                          <h4 className="font-medium">Characteristics:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Bold and expressive</li>
                            <li>Energetic contrasts</li>
                            <li>Inspiring and dynamic</li>
                            <li>Artistic freedom</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="wellness" className="mt-6">
                    <Card>
                      <CardHeader className="bg-[#4CAF50]/10 border-b">
                        <CardTitle className="text-[#4CAF50]">
                          Wellness & Mindfulness Palette
                        </CardTitle>
                        <CardDescription>
                          Calming and restorative with natural organic feel
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="grid gap-4 md:grid-cols-4">
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#E8F5E9] border"></div>
                            <span className="text-xs">#E8F5E9</span>
                            <span className="text-xs text-muted-foreground">
                              Background
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#2E7D32]"></div>
                            <span className="text-xs">#2E7D32</span>
                            <span className="text-xs text-muted-foreground">
                              Primary Text
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#4CAF50]"></div>
                            <span className="text-xs">#4CAF50</span>
                            <span className="text-xs text-muted-foreground">
                              Accent
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#81C784]"></div>
                            <span className="text-xs">#81C784</span>
                            <span className="text-xs text-muted-foreground">
                              Secondary
                            </span>
                          </div>
                        </div>
                        <div className="mt-6 grid gap-2">
                          <h4 className="font-medium">Characteristics:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Calming and restorative</li>
                            <li>Natural and organic</li>
                            <li>Peaceful and balanced</li>
                            <li>Healing atmosphere</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="luxury" className="mt-6">
                    <Card>
                      <CardHeader className="bg-[#D4AF37]/10 border-b">
                        <CardTitle className="text-[#D4AF37]">
                          Luxury & Elegance Palette
                        </CardTitle>
                        <CardDescription>
                          Opulent and refined with timeless sophistication
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="grid gap-4 md:grid-cols-4">
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#F5F5F5] border"></div>
                            <span className="text-xs">#F5F5F5</span>
                            <span className="text-xs text-muted-foreground">
                              Background
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#333333]"></div>
                            <span className="text-xs">#333333</span>
                            <span className="text-xs text-muted-foreground">
                              Primary Text
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#D4AF37]"></div>
                            <span className="text-xs">#D4AF37</span>
                            <span className="text-xs text-muted-foreground">
                              Accent
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#8B7355]"></div>
                            <span className="text-xs">#8B7355</span>
                            <span className="text-xs text-muted-foreground">
                              Secondary
                            </span>
                          </div>
                        </div>
                        <div className="mt-6 grid gap-2">
                          <h4 className="font-medium">Characteristics:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Opulent and refined</li>
                            <li>Timeless sophistication</li>
                            <li>Premium feel</li>
                            <li>Understated luxury</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="startup" className="mt-6">
                    <Card>
                      <CardHeader className="bg-[#E74C3C]/10 border-b">
                        <CardTitle className="text-[#E74C3C]">
                          Startup Energetic Palette
                        </CardTitle>
                        <CardDescription>
                          Dynamic and innovative with youthful energy
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="grid gap-4 md:grid-cols-4">
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#FFFFFF] border"></div>
                            <span className="text-xs">#FFFFFF</span>
                            <span className="text-xs text-muted-foreground">
                              Background
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#2C3E50]"></div>
                            <span className="text-xs">#2C3E50</span>
                            <span className="text-xs text-muted-foreground">
                              Primary Text
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#E74C3C]"></div>
                            <span className="text-xs">#E74C3C</span>
                            <span className="text-xs text-muted-foreground">
                              Accent
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 rounded-full bg-[#3498DB]"></div>
                            <span className="text-xs">#3498DB</span>
                            <span className="text-xs text-muted-foreground">
                              Secondary
                            </span>
                          </div>
                        </div>
                        <div className="mt-6 grid gap-2">
                          <h4 className="font-medium">Characteristics:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Dynamic and innovative</li>
                            <li>Youthful energy</li>
                            <li>Bold and progressive</li>
                            <li>Entrepreneurial spirit</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
                <div className="mx-auto max-w-4xl mt-8 grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Theme Customization Strategy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Flexible Color Mapping</li>
                        <li>Adaptive Typography</li>
                        <li>Responsive Design Principles</li>
                        <li>Mood-Based Transitions</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>User Experience Goals</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Emotional color connection</li>
                        <li>Intuitive theme selection</li>
                        <li>Personalized design experience</li>
                        <li>Professional and creative versatility</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Pricing Section */}
              <section id="pricing" className="container py-20 space-y-16">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Simple, Transparent Pricing
                  </h2>
                  <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    Choose the plan that's right for you and start creating
                    beautiful designs today.
                  </p>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
                  <PricingCard
                    title="Free"
                    price="$0"
                    description="Perfect for getting started with basic themes."
                    features={[
                      "7 pre-defined themes",
                      "Basic theme switching",
                      "Limited CSS export",
                      "Community support",
                    ]}
                    buttonText="Get Started"
                    buttonVariant="outline"
                  />
                  <PricingCard
                    title="Premium"
                    price="$9.99"
                    period="/month"
                    description="Unlock the full power of AI-driven design."
                    features={[
                      "Unlimited theme customization",
                      "AI-powered color generation",
                      "Advanced export options",
                      "Priority support",
                      "Brand identity extraction",
                      "Accessibility optimization",
                    ]}
                    buttonText="Upgrade to Premium"
                    buttonVariant="default"
                    popular
                  />
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="container py-20 space-y-16">
                <div className="container space-y-16">
                  <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                      Frequently Asked Questions
                    </h2>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                      Find answers to common questions about PalettePlay.
                    </p>
                  </div>
                  <div className="mx-auto grid max-w-4xl gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>
                          How does the AI color palette generator work?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Our AI color palette generator uses machine learning
                          algorithms trained on thousands of professional
                          designs to analyze color harmony, contrast, and
                          accessibility. It can extract colors from your brand
                          assets and suggest complementary palettes that align
                          with your brand identity.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Can I export my custom themes?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Yes! Free users can export basic CSS variables, while
                          Premium users get access to advanced export options
                          including Tailwind config, CSS variables, SCSS, and
                          design tokens for various platforms.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>
                          Is my data secure when using the AI features?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Absolutely. We take data privacy seriously. Any brand
                          assets or logos you upload for AI analysis are
                          processed securely and not stored permanently. Our AI
                          processing is transparent and complies with design
                          ethics and privacy standards.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Can I switch between plans?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Yes, you can upgrade from Free to Premium at any time.
                          If you need to downgrade, you can do so at the end of
                          your billing cycle. Your custom themes and settings
                          will be saved for 30 days if you decide to upgrade
                          again.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="container py-20">
                <div className="mx-auto max-w-4xl rounded-lg theme-accent-bg p-8 text-white md:p-12">
                  <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold tracking-tight">
                        Ready to transform your design?
                      </h2>
                      <p className="text-white/80">
                        Get started with PalettePlay today and unlock the power
                        of AI-driven design.
                      </p>
                    </div>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="w-full md:w-auto"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </section>
            </main>
            <footer className="border-t border-slate-200 dark:border-slate-800 w-full">
              <div className="container py-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 font-bold">
                      <Palette className="h-6 w-6 theme-accent" />
                      <span>PalettePlay</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      AI-powered design themes and color palettes for modern web
                      applications.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-4 text-sm font-semibold">Product</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="#features"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          Features
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#themes"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          Themes
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#pricing"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          Pricing
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 text-sm font-semibold">Resources</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="#"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          Documentation
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          Guides
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#faq"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 text-sm font-semibold">Company</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="#"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-12 pt-8 text-center text-sm text-muted-foreground">
                  © {new Date().getFullYear()} PalettePlay. All rights reserved.
                </div>
              </div>
            </footer>
          </div>
        </ThemeWrapper>
      </BrandThemeProvider>
    </ThemeProvider>
  );
}
