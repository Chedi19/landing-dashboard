"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlanDetails } from "@/components/dialogs/SubscribeDialog";

interface PricingCardProps {
  plan: PlanDetails;
  annual: boolean;
  onSelectPlan: (plan: PlanDetails) => void;
}

export function PricingCard({ plan, annual, onSelectPlan }: PricingCardProps) {
  return (
    <div
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
        onClick={() => onSelectPlan(plan)}
      >
        {plan.cta}
      </Button>
    </div>
  );
}