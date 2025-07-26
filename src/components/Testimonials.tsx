"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Retail Investor",
      company: "Self-employed",
      quote: "TradeBots AI has completely transformed my trading strategy. The automated bots have increased my returns by 32% in just three months.",
      avatar: "SJ",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Portfolio Manager",
      company: "Quantum Capital",
      quote: "The real-time analytics and predictive insights have given our firm a significant edge in volatile markets. Worth every penny.",
      avatar: "MC",
    },
    {
      id: 3,
      name: "Alex Rivera",
      position: "Crypto Trader",
      company: "BlockTech Ventures",
      quote: "I've tried many trading platforms, but none match the speed and security of TradeBots. The lightning-fast execution is unmatched.",
      avatar: "AR",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-primary/5 to-background/0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied traders who have transformed their trading experience with our AI-powered platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 z-20">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 border border-border"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 z-20">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 border border-border"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full px-4">
                    <Card className="p-8 md:p-10 bg-card/50 backdrop-blur-sm border border-white/5 relative">
                      <div className="absolute top-6 right-8 text-primary/20">
                        <Quote className="h-16 w-16" />
                      </div>
                      
                      <blockquote className="text-xl md:text-2xl font-medium mb-8 relative z-10">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                          <span className="text-primary font-medium">{testimonial.avatar}</span>
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.position}, {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? "bg-primary" : "bg-primary/20"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}