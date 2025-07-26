import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, LineChart, Zap, Shield } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Automated Trading",
      description: "Set your strategy and let our AI bots execute trades 24/7 with precision timing.",
      icon: Bot,
    },
    {
      title: "Real-Time Analytics",
      description: "Monitor market trends with advanced visualizations and predictive insights.",
      icon: LineChart,
    },
    {
      title: "Lightning Fast Execution",
      description: "Execute trades in milliseconds with our high-performance infrastructure.",
      icon: Zap,
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade encryption and multi-factor authentication protect your assets.",
      icon: Shield,
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced Trading Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with powerful trading tools to give you the edge in any market condition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glassmorphism group hover:scale-105 transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}