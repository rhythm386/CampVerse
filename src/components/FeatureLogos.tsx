import { Link } from "react-router-dom";
import { Palette, Users, Calendar, MapPin } from "lucide-react";

const FeatureLogos = () => {
  const features = [
    {
      name: "Genify",
      icon: Palette,
      path: "/genify",
      description: "AI-powered design",
    },
    {
      name: "Hustle Hub",
      icon: Users,
      path: "/hustlehub",
      description: "Volunteer management",
    },
    {
      name: "ClockedIn",
      icon: Calendar,
      path: "/clockedin",
      description: "Duty scheduling",
    },
    {
      name: "Radar",
      icon: MapPin,
      path: "/radar",
      description: "Event discovery",
    },
  ];

  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powered by Innovation
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Four powerful tools integrated into one seamless platform for the
            ultimate campus experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Link
              key={feature.name}
              to={feature.path}
              className="group relative p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-campverse-pink to-campverse-purple rounded-2xl">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                  {feature.name}
                </h3>
                <p className="text-white/60 group-hover:text-white/80 transition-colors">
                  {feature.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-campverse-pink/20 to-campverse-purple/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureLogos;
