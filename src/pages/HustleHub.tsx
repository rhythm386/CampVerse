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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  UserPlus,
  CheckCircle,
  Clock,
  Star,
  Award,
  Target,
  TrendingUp,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HustleHub = () => {
  const volunteers = [
    {
      id: 1,
      name: "Sarah Chen",
      avatar: "/api/placeholder/40/40",
      role: "Event Coordinator",
      rating: 4.9,
      tasks: 23,
      status: "active",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      avatar: "/api/placeholder/40/40",
      role: "Tech Support",
      rating: 4.8,
      tasks: 18,
      status: "busy",
    },
    {
      id: 3,
      name: "Emma Davis",
      avatar: "/api/placeholder/40/40",
      role: "Marketing",
      rating: 4.7,
      tasks: 31,
      status: "available",
    },
    {
      id: 4,
      name: "Alex Rivera",
      avatar: "/api/placeholder/40/40",
      role: "Designer",
      rating: 4.9,
      tasks: 15,
      status: "active",
    },
  ];

  const tasks = [
    {
      id: 1,
      title: "Setup registration booth",
      priority: "High",
      deadline: "2 hours",
      volunteers: 3,
      maxVolunteers: 5,
    },
    {
      id: 2,
      title: "Social media promotion",
      priority: "Medium",
      deadline: "1 day",
      volunteers: 2,
      maxVolunteers: 3,
    },
    {
      id: 3,
      title: "Equipment preparation",
      priority: "High",
      deadline: "4 hours",
      volunteers: 4,
      maxVolunteers: 4,
    },
    {
      id: 4,
      title: "Guest speaker coordination",
      priority: "Low",
      deadline: "3 days",
      volunteers: 1,
      maxVolunteers: 2,
    },
  ];

  const stats = [
    { label: "Active Volunteers", value: "142", change: "+12%", icon: Users },
    {
      label: "Tasks Completed",
      value: "89",
      change: "+23%",
      icon: CheckCircle,
    },
    { label: "Average Rating", value: "4.8", change: "+0.2", icon: Star },
    { label: "Response Time", value: "2.4h", change: "-15%", icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl mb-6">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Hustle
              </span>
              <span className="text-white">Hub</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto">
              Streamline volunteer recruitment, task management, and team
              coordination with intelligent matching and automation.
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
                      <p className="text-green-400 text-sm">{stat.change}</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="dashboard" className="space-y-8">
            <TabsList className="bg-white/10 border-white/20">
              <TabsTrigger
                value="dashboard"
                className="data-[state=active]:bg-white/20"
              >
                Dashboard
              </TabsTrigger>
              <TabsTrigger
                value="volunteers"
                className="data-[state=active]:bg-white/20"
              >
                Volunteers
              </TabsTrigger>
              <TabsTrigger
                value="tasks"
                className="data-[state=active]:bg-white/20"
              >
                Tasks
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="data-[state=active]:bg-white/20"
              >
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Quick Actions */}
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Target className="mr-2 h-5 w-5" />
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Recruit Volunteers
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-white hover:bg-white/10"
                    >
                      <Target className="mr-2 h-4 w-4" />
                      Create New Task
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-white hover:bg-white/10"
                    >
                      <Award className="mr-2 h-4 w-4" />
                      Send Recognition
                    </Button>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          user: "Sarah Chen",
                          action: "completed task",
                          item: "Setup registration booth",
                          time: "2 min ago",
                        },
                        {
                          user: "Marcus Johnson",
                          action: "joined",
                          item: "Social media promotion",
                          time: "15 min ago",
                        },
                        {
                          user: "Emma Davis",
                          action: "received 5-star rating",
                          item: "Event coordination",
                          time: "1 hour ago",
                        },
                        {
                          user: "Alex Rivera",
                          action: "submitted design",
                          item: "Event poster",
                          time: "2 hours ago",
                        },
                      ].map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xs">
                              {activity.user
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="text-white text-sm">
                              <span className="font-medium">
                                {activity.user}
                              </span>{" "}
                              <span className="text-white/70">
                                {activity.action}
                              </span>{" "}
                              <span className="font-medium">
                                {activity.item}
                              </span>
                            </p>
                            <p className="text-white/50 text-xs">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="volunteers" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  Volunteer Management
                </h2>
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Volunteer
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {volunteers.map((volunteer) => (
                  <Card
                    key={volunteer.id}
                    className="bg-white/5 border-white/10 hover:border-white/20 transition-colors"
                  >
                    <CardContent className="p-6">
                      <div className="text-center">
                        <Avatar className="h-16 w-16 mx-auto mb-4">
                          <AvatarImage src={volunteer.avatar} />
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                            {volunteer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="text-white font-semibold mb-1">
                          {volunteer.name}
                        </h3>
                        <p className="text-white/60 text-sm mb-3">
                          {volunteer.role}
                        </p>
                        <Badge
                          variant={
                            volunteer.status === "active"
                              ? "default"
                              : volunteer.status === "available"
                                ? "secondary"
                                : "outline"
                          }
                          className="mb-3"
                        >
                          {volunteer.status}
                        </Badge>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-white/60">Rating</span>
                            <span className="text-white flex items-center">
                              <Star className="h-3 w-3 text-yellow-400 mr-1" />
                              {volunteer.rating}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-white/60">Tasks</span>
                            <span className="text-white">
                              {volunteer.tasks}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tasks" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  Task Management
                </h2>
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500">
                  <Target className="mr-2 h-4 w-4" />
                  Create Task
                </Button>
              </div>

              <div className="space-y-4">
                {tasks.map((task) => (
                  <Card key={task.id} className="bg-white/5 border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-white font-semibold">
                              {task.title}
                            </h3>
                            <Badge
                              variant={
                                task.priority === "High"
                                  ? "destructive"
                                  : task.priority === "Medium"
                                    ? "default"
                                    : "secondary"
                              }
                            >
                              {task.priority}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-6 text-sm text-white/60">
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              Due in {task.deadline}
                            </span>
                            <span className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {task.volunteers}/{task.maxVolunteers} volunteers
                            </span>
                          </div>
                          <div className="mt-3">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-white/60">Progress</span>
                              <span className="text-white">
                                {Math.round(
                                  (task.volunteers / task.maxVolunteers) * 100,
                                )}
                                %
                              </span>
                            </div>
                            <Progress
                              value={
                                (task.volunteers / task.maxVolunteers) * 100
                              }
                              className="h-2"
                            />
                          </div>
                        </div>
                        <div className="ml-6">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                Performance Analytics
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Volunteer Growth
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center">
                      <p className="text-white/60">
                        Chart visualization would go here
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Award className="mr-2 h-5 w-5" />
                      Top Performers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {volunteers.slice(0, 3).map((volunteer, index) => (
                        <div
                          key={volunteer.id}
                          className="flex items-center space-x-3"
                        >
                          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-white/10 text-white">
                              {volunteer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="text-white font-medium">
                              {volunteer.name}
                            </p>
                            <p className="text-white/60 text-sm">
                              {volunteer.tasks} tasks completed
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-white flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 mr-1" />
                              {volunteer.rating}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HustleHub;
