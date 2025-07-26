"use client";

import { useState } from "react";
import { PricingCard } from "@/components/pricing/PricingCard";
import { SubscribeDialog, PlanDetails } from "@/components/dialogs/SubscribeDialog";

export function Pricing() {
  const [annual, setAnnual] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanDetails | null>(null);
  
  const plans: PlanDetails[] = [
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

  const handleSelectPlan = (plan: PlanDetails) => {
    setSelectedPlan(plan);
    setDialogOpen(true);
  };

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
            <PricingCard
              key={plan.name}
              plan={plan}
              annual={annual}
              onSelectPlan={handleSelectPlan}
            />
          ))}
        </div>
      </div>

      <SubscribeDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        plan={selectedPlan}
      />
    </section>
  );
}