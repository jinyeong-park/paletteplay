import { Check } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface PricingCardProps {
  title: string
  price: string
  period?: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant?: ButtonProps["variant"]
  popular?: boolean
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonVariant = "default",
  popular = false,
}: PricingCardProps) {
  return (
    <Card className={`transition-all duration-300 ${popular ? "theme-border shadow-lg" : ""}`}>
      {popular && (
        <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full theme-accent-bg px-3 py-1 text-xs font-medium text-white transition-all duration-300">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          {period && <span className="text-muted-foreground">{period}</span>}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <Check className="h-4 w-4 theme-accent transition-all duration-300" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant={buttonVariant} className="w-full transition-all duration-300">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}

