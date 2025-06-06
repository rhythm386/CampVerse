import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-campverse-purple/20 rounded-full blur-3xl floating-animation" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-campverse-pink/20 rounded-full blur-3xl floating-delayed" />
        </div>

        <div className="relative z-10">
          <h1 className="text-8xl md:text-9xl font-bold mb-6">
            <span className="gradient-text">404</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lost in the Verse?
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-lg mx-auto">
            The page you're looking for doesn't exist in our campus universe.
            Let's get you back on track!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-campverse-pink to-campverse-purple hover:from-campverse-pink/90 hover:to-campverse-purple/90 text-lg px-8 py-6"
            >
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { name: "Genify", path: "/genify" },
              { name: "HustleHub", path: "/hustlehub" },
              { name: "ClockedIn", path: "/clockedin" },
              { name: "Radar", path: "/radar" },
            ].map((feature) => (
              <Link
                key={feature.name}
                to={feature.path}
                className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
              >
                <span className="text-white/80 hover:text-white">
                  {feature.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
