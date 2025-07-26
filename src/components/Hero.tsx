import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden pt-20">
      {/* Background graph animation */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="trading-line"
            d="M0,500 Q250,300 500,500 T1000,500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="5,5"
          />
          <path
            className="trading-line"
            d="M0,600 Q250,800 500,600 T1000,600"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="inline-block mb-6 animate-float">
          <Badge variant="outline" className="px-4 py-1 border-primary/20 bg-card/30 backdrop-blur-sm">
            <span className="text-primary mr-1">•</span> Trading Bots
          </Badge>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
          The Fastest and Secure 
          <span className="text-gradient block"> AI Trading Assistant.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Automate your investments with precision. Our AI analyzes market trends in real-time, 
          optimizing your trades for maximum returns with minimal risk.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="glow-effect">
            Try Free Trial <ChevronRight className="ml-1 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg">
            Watch Demo
          </Button>
        </div>
        
        <div className="mt-16 text-sm text-muted-foreground">
          <p>No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}