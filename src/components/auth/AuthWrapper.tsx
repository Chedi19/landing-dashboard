"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

export function AuthWrapper() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleForm = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIsSignIn(!isSignIn);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className={`relative overflow-hidden rounded-2xl bg-card/30 backdrop-blur-sm p-8 border transition-all duration-500 ${
          isAnimating ? "border-primary/50 shadow-[0_0_15px_rgba(74,222,128,0.2)]" : "border-white/5"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-30 pointer-events-none" />
        
        <AnimatePresence mode="wait">
          {isSignIn ? (
            <SignInForm key="signin" onToggleForm={toggleForm} />
          ) : (
            <SignUpForm key="signup" onToggleForm={toggleForm} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}