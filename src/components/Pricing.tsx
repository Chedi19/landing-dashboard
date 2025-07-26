"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export function Pricing() {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      name: "Basic",
      description: "Perfect for beginners and casual traders",
      price: annual ? 29 : 39,
      features: [
        "Access to 3 pre-built trading bots",
        "Real-time market data",
        "Basic technical indicators",
        "Manual trade execution",
        "Email support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      description: "For active traders seeking advanced features",
      price: annual ? 79 : 99,
      features: [
        "Access to all trading bots",
        "Custom bot creation",
        "Advanced technical analysis",
        "Priority trade execution",
        "API access",
        "24/7 priority support",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For institutions and professional trading firms",
      price: "Custom",
      features: [
        "Unlimited custom bots",
        "Dedicated infrastructure",
        "Advanced risk management",
        "Custom integrations",
        "Dedicated account manager",
        "On-demand training sessions",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-primary/5 to-background/0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your trading needs. All plans include a 14-day free trial.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="bg-card/30 backdrop-blur-sm p-1 rounded-full border border-white/5">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  annual ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
                onClick={() => setAnnual(true)}
              >
                Annual (Save 20%)
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  !annual ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border ${
                plan.popular
                  ? "border-primary/50 bg-card/50"
                  : "border-white/5 bg-card/30"
              } backdrop-blur-sm p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5`}
            >
              {plan.popular && (
                <Badge
                  className="absolute -top-3 right-8 bg-primary text-primary-foreground"
                  variant="default"
                >
                  Most Popular
                </Badge>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              
              <div className="mb-6">
                {typeof plan.price === "number" ? (
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground ml-2 mb-1">
                      /{annual ? "mo" : "mo"}
                    </span>
                  </div>
                ) : (
                  <div className="text-4xl font-bold">{plan.price}</div>
                )}
                
                {annual && typeof plan.price === "number" && (
                  <p className="text-sm text-muted-foreground mt-1">
                    Billed annually (${plan.price * 12}/year)
                  </p>
                )}
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-card hover:bg-card/80 border border-white/10"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}