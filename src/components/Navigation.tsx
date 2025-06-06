import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Genify", path: "/genify" },
    { name: "HustleHub", path: "/hustlehub" },
    { name: "ClockedIn", path: "/clockedin" },
    { name: "Radar", path: "/radar" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold gradient-text">
            CampVerse
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-white/70 hover:text-white transition-colors duration-200",
                  location.pathname === item.path && "text-white font-medium",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-campverse-pink to-campverse-purple hover:from-campverse-pink/90 hover:to-campverse-purple/90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
