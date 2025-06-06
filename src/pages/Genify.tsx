import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Palette,
  Sparkles,
  Download,
  Share2,
  Wand2,
  Image,
  Type,
  Layout,
} from "lucide-react";
import { useState } from "react";

const Genify = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 3000);
  };

  const templates = [
    { id: "event", name: "Event Poster", preview: "🎉" },
    { id: "recruitment", name: "Recruitment", preview: "👥" },
    { id: "workshop", name: "Workshop", preview: "📚" },
    { id: "social", name: "Social Media", preview: "📱" },
  ];

  const colorSchemes = [
    { name: "Campus Purple", colors: ["#9333EA", "#E838CC"] },
    { name: "Ocean Blue", colors: ["#3B82F6", "#06B6D4"] },
    { name: "Sunset Orange", colors: ["#F97316", "#EF4444"] },
    { name: "Forest Green", colors: ["#10B981", "#22D3EE"] },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-campverse-pink to-campverse-purple rounded-3xl mb-6">
              <Palette className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Genify</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto">
              AI-powered design studio that creates stunning posters, banners,
              and graphics in seconds. No design skills required.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Creation Panel */}
            <div className="lg:col-span-1">
              <Card className="bg-white/5 border-white/10 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Wand2 className="mr-2 h-5 w-5" />
                    Create Your Design
                  </CardTitle>
                  <CardDescription className="text-white/60">
                    Describe what you want and let AI do the magic
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="title" className="text-white">
                      Event Title
                    </Label>
                    <Input
                      id="title"
                      placeholder="e.g., Spring Festival 2024"
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-white">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your event, include key details like date, time, location..."
                      className="bg-white/10 border-white/20 text-white"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label className="text-white">Template Type</Label>
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select template" />
                      </SelectTrigger>
                      <SelectContent>
                        {templates.map((template) => (
                          <SelectItem key={template.id} value={template.id}>
                            <span className="mr-2">{template.preview}</span>
                            {template.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-white">Color Scheme</Label>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      {colorSchemes.map((scheme, index) => (
                        <button
                          key={index}
                          className="p-3 rounded-lg border border-white/20 hover:border-white/40 transition-colors text-left"
                        >
                          <div className="flex space-x-2 mb-2">
                            {scheme.colors.map((color, i) => (
                              <div
                                key={i}
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                          <div className="text-white/80 text-sm">
                            {scheme.name}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="w-full bg-gradient-to-r from-campverse-pink to-campverse-purple hover:from-campverse-pink/90 hover:to-campverse-purple/90"
                  >
                    {isGenerating ? (
                      <>
                        <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate Design
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Preview & Results */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Preview Area */}
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Image className="mr-2 h-5 w-5" />
                      Preview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isGenerating ? (
                      <div className="aspect-[3/4] bg-gradient-to-br from-campverse-purple/20 to-campverse-pink/20 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Sparkles className="h-12 w-12 text-white/60 mx-auto mb-4 animate-pulse" />
                          <p className="text-white/60">
                            Creating your masterpiece...
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[3/4] bg-white/10 rounded-lg flex items-center justify-center border-2 border-dashed border-white/20">
                        <div className="text-center">
                          <Layout className="h-12 w-12 text-white/40 mx-auto mb-4" />
                          <p className="text-white/60">
                            Your generated design will appear here
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-center space-x-4 mt-6">
                      <Button
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                      <Button
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                      <Button
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        <Type className="mr-2 h-4 w-4" />
                        Edit Text
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Sparkles,
                      title: "AI-Powered",
                      description:
                        "Advanced AI understands your content and creates professional designs",
                    },
                    {
                      icon: Download,
                      title: "Export Ready",
                      description:
                        "Download in multiple formats: PNG, JPG, PDF, SVG",
                    },
                    {
                      icon: Type,
                      title: "Fully Editable",
                      description:
                        "Fine-tune text, colors, and layouts to match your vision",
                    },
                    {
                      icon: Share2,
                      title: "Easy Sharing",
                      description:
                        "Share directly to social media or with your team",
                    },
                  ].map((feature, index) => (
                    <Card key={index} className="bg-white/5 border-white/10">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-to-br from-campverse-pink to-campverse-purple p-2 rounded-lg">
                            <feature.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-white/70 text-sm">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genify;
