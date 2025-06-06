import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-campverse-purple/20 rounded-full blur-3xl floating-animation" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-campverse-pink/20 rounded-full blur-3xl floating-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-campverse-cyan/20 rounded-full blur-2xl floating-slow" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full floating-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl font-bold mb-6">
            <span className="gradient-text">Camp</span>
            <span className="text-white">Verse</span>
          </h1>
          <div className="text-2xl md:text-4xl font-light text-white mb-4">
            One Platform. Infinite Campus
          </div>
          <div className="text-2xl md:text-4xl font-light text-white">
            Possibilities.
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-white/80 mb-4">
            For students. For clubs. For the culture.
          </p>
          <p className="text-xl md:text-2xl text-white/80">
            Built for Gen Z. Powered by innovation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" />
      </div>

      {/* 3D-style decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-gradient-to-br from-campverse-purple to-campverse-blue-light rounded-full opacity-30 floating-animation transform rotate-12" />
        <div className="absolute bottom-16 right-1/3 w-24 h-24 bg-gradient-to-br from-campverse-pink to-campverse-purple rounded-full opacity-40 floating-delayed transform -rotate-12" />
        <div className="absolute bottom-8 left-1/2 w-16 h-16 bg-gradient-to-br from-campverse-cyan to-campverse-blue-light rounded-full opacity-50 floating-slow" />
      </div>
    </section>
  );
};

export default Hero;
