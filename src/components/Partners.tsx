"use client";

export function Partners() {
  const partners = [
    { name: "Coinbase", logo: "CB" },
    { name: "Binance", logo: "BN" },
    { name: "Kraken", logo: "KR" },
    { name: "FTX", logo: "FTX" },
    { name: "Robinhood", logo: "RH" },
    { name: "Gemini", logo: "GM" },
    { name: "Bitstamp", logo: "BS" },
    { name: "eToro", logo: "ET" },
  ];

  return (
    <section className="py-16 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-medium mb-12">
          Trusted by industry leaders
        </h2>
        
        <div className="overflow-hidden">
          <div className="flex animate-marquee items-center gap-8">
            {partners.concat(partners).map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`}
                className="flex items-center justify-center min-w-[160px] h-16 px-6 rounded-lg bg-card/50 backdrop-blur-sm border border-white/5 hover:border-primary/20 transition-all duration-300 group"
              >
                <span className="text-xl font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-160px * 8 - 2rem * 8));
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}