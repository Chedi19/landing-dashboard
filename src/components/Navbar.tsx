"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">TB</span>
          </div>
          <span className="font-bold text-lg">TradeBots</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {isHomePage ? (
            <>
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
            </>
          ) : (
            <>
              <Link href="/#features" className="text-sm hover:text-primary transition-colors">
                Features
              </Link>
              <Link 
                href="/pricing" 
                className={`text-sm transition-colors ${
                  pathname === "/pricing" ? "text-primary" : "hover:text-primary"
                }`}
              >
                Pricing
              </Link>
              <Link href="/#testimonials" className="text-sm hover:text-primary transition-colors">
                Testimonials
              </Link>
              <Link href="/#faq" className="text-sm hover:text-primary transition-colors">
                FAQ
              </Link>
            </>
          )}
        </nav>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden md:inline-flex"
            asChild
          >
            <Link href="/auth">Sign In</Link>
          </Button>
          <Button 
            size="sm" 
            className="hidden md:inline-flex"
            asChild
          >
            <Link href="/auth">
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}