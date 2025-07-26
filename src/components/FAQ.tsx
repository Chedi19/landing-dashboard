"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const faqs = [
    {
      question: "How does the AI trading assistant work?",
      answer:
        "Our AI trading assistant uses advanced machine learning algorithms to analyze market trends, historical data, and real-time indicators. It identifies potential trading opportunities based on your predefined strategies and risk tolerance, then executes trades automatically or provides recommendations for manual execution.",
    },
    {
      question: "Is my data secure on the platform?",
      answer:
        "Absolutely. We employ bank-grade encryption, multi-factor authentication, and regular security audits to ensure your data and assets remain protected. Our platform is built with security as a top priority, and we never share your personal information with third parties without your explicit consent.",
    },
    {
      question: "What markets and assets can I trade?",
      answer:
        "Our platform supports trading across multiple markets including stocks, forex, cryptocurrencies, commodities, and futures. You can access thousands of assets across these markets, all from a single integrated platform with unified analytics and portfolio management.",
    },
    {
      question: "How much does it cost to use TradeBots AI?",
      answer:
        "We offer flexible pricing plans starting from $29/month for our Basic plan. Our Professional plan at $79/month includes advanced features like custom bot creation and priority execution. Enterprise plans with dedicated support and custom integrations are also available. All plans come with a 14-day free trial.",
    },
    {
      question: "Can I connect my existing brokerage account?",
      answer:
        "Yes, TradeBots AI integrates with most major brokerages through secure API connections. We currently support direct integration with over 30 brokers worldwide, including Interactive Brokers, TD Ameritrade, Robinhood, Binance, and more. Our team can assist with setting up these connections.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our AI trading platform. Can't find the answer you're looking for? Contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}