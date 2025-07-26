"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export interface PlanDetails {
  name: string;
  price: string | number;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

interface SubscribeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  plan: PlanDetails | null;
}

export function SubscribeDialog({
  open,
  onOpenChange,
  plan,
}: SubscribeDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    setIsLoading(true);
    // Simulate API call
    console.log({ plan: plan?.name, ...values });
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      // Reset form after 3 seconds and close dialog
      setTimeout(() => {
        form.reset();
        setIsSuccess(false);
        onOpenChange(false);
      }, 3000);
    }, 1500);
  }

  if (!plan) return null;

  const isEnterprise = plan.name === "Enterprise";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-card/95 backdrop-blur-sm border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {isSuccess ? "Thank You!" : `Subscribe to ${plan.name} Plan`}
          </DialogTitle>
          <DialogDescription>
            {isSuccess
              ? "We've received your request and will contact you shortly."
              : `Get started with our ${plan.name.toLowerCase()} plan today.`}
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center justify-center py-6"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <p className="text-center text-muted-foreground">
                {isEnterprise
                  ? "Our sales team will reach out to you within 24 hours to discuss your needs."
                  : "Your free trial has been activated. Check your email for login details."}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="grid gap-4 py-4">
                <div className="bg-background/50 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{plan.name} Plan</h3>
                      <p className="text-sm text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>
                    <div className="text-right">
                      {typeof plan.price === "number" ? (
                        <div className="font-bold text-lg">${plan.price}/mo</div>
                      ) : (
                        <div className="font-bold text-lg">{plan.price}</div>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {plan.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                    {plan.features.length > 3 && (
                      <li className="text-sm text-muted-foreground">
                        +{plan.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              {...field}
                              className="bg-background/50 border-white/10 focus-visible:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="you@example.com"
                              {...field}
                              className="bg-background/50 border-white/10 focus-visible:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {isEnterprise && (
                      <>
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your Company"
                                  {...field}
                                  className="bg-background/50 border-white/10 focus-visible:ring-primary"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Tell us about your needs"
                                  {...field}
                                  className="bg-background/50 border-white/10 focus-visible:ring-primary"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 mt-2"
                      disabled={isLoading}
                    >
                      {isLoading
                        ? "Processing..."
                        : isEnterprise
                        ? "Contact Sales"
                        : "Start Free Trial"}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}