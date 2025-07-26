import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">TB</span>
          </div>
          <span className="font-bold text-lg">TradeBots</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="#testimonials" className="text-sm hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link href="#faq" className="text-sm hover:text-primary transition-colors">
            FAQ
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button size="sm" className="hidden md:inline-flex">
            Get Started <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}