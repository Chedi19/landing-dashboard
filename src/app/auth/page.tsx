import { AuthWrapper } from "@/components/auth/AuthWrapper";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AuthPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center py-12 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
        
        <div className="z-10 w-full max-w-md mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">TradeBots AI</h1>
          <p className="text-muted-foreground">
            Access your AI-powered trading dashboard
          </p>
        </div>
        
        <AuthWrapper />
      </main>
      <Footer />
    </>
  );
}