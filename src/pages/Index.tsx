import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeatureLogos from "@/components/FeatureLogos";
import Features from "@/components/Features";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Twitter, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <FeatureLogos />
      <Features />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-campverse-pink/20 to-campverse-purple/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your{" "}
            <span className="gradient-text">Campus Experience</span>?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Join thousands of students and clubs already using CampVerse to
            streamline their campus activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-campverse-pink to-campverse-purple hover:from-campverse-pink/90 hover:to-campverse-purple/90 text-lg px-8 py-6"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black/80">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl font-bold gradient-text mb-4">
                CampVerse
              </h3>
              <p className="text-white/70 mb-6 max-w-md">
                Empowering the next generation of students with AI-powered tools
                for campus engagement and collaboration.
              </p>
              <div className="flex space-x-4">
                {[Github, Twitter, Linkedin].map((Icon, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Icon className="h-5 w-5 text-white/70" />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Platform
              </h4>
              <ul className="space-y-2">
                {["Genify", "HustleHub", "ClockedIn", "Radar"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {["About", "Careers", "Contact", "Blog"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 mt-8 text-center">
            <p className="text-white/60">
              © 2024 CampVerse. Built for Gen Z. Powered by innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
