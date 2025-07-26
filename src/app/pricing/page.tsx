import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="py-20 bg-background relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your trading needs. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
        
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}