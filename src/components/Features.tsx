import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Palette,
  Users,
  Calendar,
  MapPin,
  ArrowRight,
  Zap,
  Brain,
  Clock,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      id: "genify",
      title: "Genify",
      subtitle: "AI-Powered Design Studio",
      description:
        "Create stunning posters, banners, and graphics in seconds. No design experience required.",
      icon: Palette,
      color: "from-pink-500 to-purple-600",
      features: [
        "AI-powered templates",
        "Instant generation",
        "Brand customization",
        "Export ready files",
      ],
      path: "/genify",
    },
    {
      id: "hustlehub",
      title: "HustleHub",
      subtitle: "Volunteer Recruitment & Management",
      description:
        "Streamline volunteer onboarding, task assignment, and team coordination.",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Smart matching",
        "Task automation",
        "Performance tracking",
        "Team communication",
      ],
      path: "/hustlehub",
    },
    {
      id: "clockedin",
      title: "ClockedIn",
      subtitle: "Duty Scheduling System",
      description:
        "Manage schedules, handle requests, and ensure seamless duty coverage.",
      icon: Calendar,
      color: "from-green-500 to-emerald-500",
      features: [
        "Smart scheduling",
        "Request workflows",
        "Conflict resolution",
        "Availability tracking",
      ],
      path: "/clockedin",
    },
    {
      id: "radar",
      title: "Radar",
      subtitle: "Campus Event Discovery",
      description:
        "Discover events happening around campus with real-time location tracking.",
      icon: MapPin,
      color: "from-orange-500 to-red-500",
      features: [
        "Interactive maps",
        "Real-time updates",
        "Event filtering",
        "Social integration",
      ],
      path: "/radar",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Everything You Need in{" "}
            <span className="gradient-text">One Platform</span>
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto">
            CampVerse brings together the most essential tools for modern campus
            life, powered by cutting-edge AI and designed for seamless
            collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card
              key={feature.id}
              className="bg-white/5 border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div
                    className={`p-3 rounded-2xl bg-gradient-to-br ${feature.color} mb-4`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/60 hover:text-white group-hover:text-campverse-pink transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="text-3xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-lg text-campverse-purple font-medium">
                  {feature.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 mb-6 text-lg leading-relaxed">
                  {feature.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-campverse-pink to-campverse-purple rounded-full" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Zap,
              label: "Faster Creation",
              value: "10x",
              description: "than traditional methods",
            },
            {
              icon: Brain,
              label: "AI-Powered",
              value: "100%",
              description: "intelligent automation",
            },
            {
              icon: Clock,
              label: "Time Saved",
              value: "80%",
              description: "on routine tasks",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/5 rounded-2xl border border-white/10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-campverse-pink to-campverse-purple rounded-2xl mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-white/60">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
