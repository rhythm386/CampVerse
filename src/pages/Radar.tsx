import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  Calendar,
  Users,
  Clock,
  Search,
  Filter,
  Navigation as NavigationIcon,
  Star,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Radar = () => {
  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit",
      location: "Engineering Building, Room 101",
      time: "2:00 PM - 5:00 PM",
      date: "Today",
      category: "Technology",
      attendees: 45,
      maxAttendees: 80,
      distance: "0.2 mi",
      rating: 4.8,
      organizer: "Computer Science Club",
      image: "/api/placeholder/300/200",
    },
    {
      id: 2,
      title: "Art Gallery Opening",
      location: "Student Center, Gallery Wing",
      time: "6:00 PM - 9:00 PM",
      date: "Today",
      category: "Arts",
      attendees: 23,
      maxAttendees: 50,
      distance: "0.5 mi",
      rating: 4.6,
      organizer: "Visual Arts Society",
      image: "/api/placeholder/300/200",
    },
    {
      id: 3,
      title: "Study Group - Calculus II",
      location: "Library, Study Room 3B",
      time: "7:00 PM - 9:00 PM",
      date: "Today",
      category: "Academic",
      attendees: 8,
      maxAttendees: 12,
      distance: "0.3 mi",
      rating: 4.9,
      organizer: "Math Tutoring Center",
      image: "/api/placeholder/300/200",
    },
    {
      id: 4,
      title: "Basketball Tournament",
      location: "Sports Complex, Court A",
      time: "4:00 PM - 8:00 PM",
      date: "Tomorrow",
      category: "Sports",
      attendees: 67,
      maxAttendees: 100,
      distance: "0.7 mi",
      rating: 4.7,
      organizer: "Athletics Department",
      image: "/api/placeholder/300/200",
    },
  ];

  const categories = [
    "All",
    "Technology",
    "Arts",
    "Academic",
    "Sports",
    "Social",
    "Career",
  ];
  const timeFilters = ["Now", "Today", "Tomorrow", "This Week", "This Month"];

  const stats = [
    { label: "Active Events", value: "24", icon: Calendar },
    { label: "People Attending", value: "342", icon: Users },
    { label: "Campus Locations", value: "12", icon: MapPin },
    { label: "Live Updates", value: "8", icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl mb-6">
              <MapPin className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Radar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto">
              Discover events happening around campus with real-time location
              tracking and intelligent recommendations.
            </p>
          </div>

          {/* Stats Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-sm">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">
                        {stat.value}
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-lg">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="map" className="space-y-8">
            <TabsList className="bg-white/10 border-white/20">
              <TabsTrigger
                value="map"
                className="data-[state=active]:bg-white/20"
              >
                Map View
              </TabsTrigger>
              <TabsTrigger
                value="list"
                className="data-[state=active]:bg-white/20"
              >
                Event List
              </TabsTrigger>
              <TabsTrigger
                value="favorites"
                className="data-[state=active]:bg-white/20"
              >
                My Events
              </TabsTrigger>
              <TabsTrigger
                value="trending"
                className="data-[state=active]:bg-white/20"
              >
                Trending
              </TabsTrigger>
            </TabsList>

            <TabsContent value="map" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Map Area */}
                <div className="lg:col-span-2">
                  <Card className="bg-white/5 border-white/10">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white flex items-center">
                          <NavigationIcon className="mr-2 h-5 w-5" />
                          Campus Map
                        </CardTitle>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10"
                        >
                          <NavigationIcon className="mr-2 h-4 w-4" />
                          My Location
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                        {/* Simulated map with event markers */}
                        <div className="absolute inset-0 bg-gray-900/50">
                          {/* Event markers */}
                          {events.slice(0, 4).map((event, index) => (
                            <div
                              key={event.id}
                              className="absolute w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                              style={{
                                left: `${20 + index * 20}%`,
                                top: `${30 + index * 15}%`,
                              }}
                              title={event.title}
                            />
                          ))}
                        </div>
                        <div className="relative z-10 text-center">
                          <MapPin className="h-12 w-12 text-white/60 mx-auto mb-4" />
                          <p className="text-white/60">
                            Interactive campus map with real-time event
                            locations
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Filters & Quick Actions */}
                <div className="space-y-6">
                  <Card className="bg-white/5 border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Filter className="mr-2 h-5 w-5" />
                        Filters
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-white text-sm mb-2 block">
                          Search Events
                        </label>
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
                          <Input
                            placeholder="Search by name, location..."
                            className="pl-10 bg-white/10 border-white/20 text-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-white text-sm mb-2 block">
                          Category
                        </label>
                        <Select>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="All Categories" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem
                                key={category}
                                value={category.toLowerCase()}
                              >
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-white text-sm mb-2 block">
                          Time
                        </label>
                        <Select>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Anytime" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeFilters.map((time) => (
                              <SelectItem key={time} value={time.toLowerCase()}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-white text-sm mb-2 block">
                          Distance
                        </label>
                        <Select>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Within 1 mile" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0.25">
                              Within 0.25 miles
                            </SelectItem>
                            <SelectItem value="0.5">
                              Within 0.5 miles
                            </SelectItem>
                            <SelectItem value="1">Within 1 mile</SelectItem>
                            <SelectItem value="2">Within 2 miles</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/5 border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white">
                        Quick Actions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500">
                        <Calendar className="mr-2 h-4 w-4" />
                        Create Event
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-white/20 text-white hover:bg-white/10"
                      >
                        <Star className="mr-2 h-4 w-4" />
                        My Favorites
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-white/20 text-white hover:bg-white/10"
                      >
                        <NavigationIcon className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="list" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  Upcoming Events
                </h2>
                <div className="flex space-x-3">
                  <Select>
                    <SelectTrigger className="w-40 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="time">Time</SelectItem>
                      <SelectItem value="distance">Distance</SelectItem>
                      <SelectItem value="popularity">Popularity</SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event) => (
                  <Card
                    key={event.id}
                    className="bg-white/5 border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-t-lg flex items-center justify-center">
                      <div className="text-center">
                        <Calendar className="h-12 w-12 text-white/60 mx-auto mb-2" />
                        <p className="text-white/60 text-sm">Event Preview</p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-1">
                            {event.title}
                          </h3>
                          <p className="text-white/60 text-sm">
                            {event.organizer}
                          </p>
                        </div>
                        <Badge variant="secondary">{event.category}</Badge>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-white/70 text-sm">
                          <Clock className="h-4 w-4 mr-2" />
                          {event.date} • {event.time}
                        </div>
                        <div className="flex items-center text-white/70 text-sm">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location} • {event.distance}
                        </div>
                        <div className="flex items-center text-white/70 text-sm">
                          <Users className="h-4 w-4 mr-2" />
                          {event.attendees}/{event.maxAttendees} attending
                        </div>
                        <div className="flex items-center text-white/70 text-sm">
                          <Star className="h-4 w-4 mr-2 text-yellow-400" />
                          {event.rating} rating
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-orange-500 to-red-500"
                        >
                          Join Event
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10"
                        >
                          <NavigationIcon className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10"
                        >
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="favorites" className="space-y-6">
              <h2 className="text-2xl font-bold text-white">My Saved Events</h2>

              <div className="text-center py-12">
                <Star className="h-16 w-16 text-white/40 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  No saved events yet
                </h3>
                <p className="text-white/60 mb-6">
                  Start exploring and save events you're interested in
                </p>
                <Button className="bg-gradient-to-r from-orange-500 to-red-500">
                  Browse Events
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="trending" className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Trending Events</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {events.slice(0, 3).map((event, index) => (
                  <Card key={event.id} className="bg-white/5 border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-gradient-to-br from-orange-500 to-red-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">
                            {event.title}
                          </h3>
                          <p className="text-white/60 text-sm">
                            {event.attendees} attending
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{event.category}</Badge>
                        <div className="flex items-center text-yellow-400 text-sm">
                          <Star className="h-4 w-4 mr-1" />
                          {event.rating}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Radar;
