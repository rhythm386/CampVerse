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
import {
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Users,
  Plus,
  Filter,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const ClockedIn = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const shifts = [
    {
      id: 1,
      title: "Morning Registration",
      time: "9:00 AM - 12:00 PM",
      assignee: "Sarah Chen",
      status: "confirmed",
      requests: 0,
    },
    {
      id: 2,
      title: "Afternoon Info Booth",
      time: "1:00 PM - 4:00 PM",
      assignee: "Marcus Johnson",
      status: "pending",
      requests: 2,
    },
    {
      id: 3,
      title: "Evening Security",
      time: "6:00 PM - 9:00 PM",
      assignee: "Emma Davis",
      status: "confirmed",
      requests: 0,
    },
    {
      id: 4,
      title: "Equipment Setup",
      time: "8:00 AM - 10:00 AM",
      assignee: "",
      status: "vacant",
      requests: 3,
    },
  ];

  const requests = [
    {
      id: 1,
      type: "time-off",
      user: "Alex Rivera",
      date: "Dec 15",
      reason: "Medical appointment",
      status: "pending",
    },
    {
      id: 2,
      type: "swap",
      user: "Sarah Chen",
      date: "Dec 18",
      reason: "Schedule conflict",
      status: "approved",
    },
    {
      id: 3,
      type: "coverage",
      user: "Marcus Johnson",
      date: "Dec 20",
      reason: "Emergency",
      status: "urgent",
    },
  ];

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const currentWeek = [12, 13, 14, 15, 16, 17, 18];

  const stats = [
    { label: "Coverage Rate", value: "94%", status: "good", icon: CheckCircle },
    {
      label: "Pending Requests",
      value: "7",
      status: "warning",
      icon: AlertCircle,
    },
    { label: "Active Shifts", value: "23", status: "good", icon: Clock },
    { label: "Available Staff", value: "18", status: "good", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl mb-6">
              <Calendar className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Clocked
              </span>
              <span className="text-white">In</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto">
              Smart duty scheduling system with automated workflows, conflict
              resolution, and seamless coverage management.
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
                    <div
                      className={`p-3 rounded-lg ${
                        stat.status === "good"
                          ? "bg-gradient-to-br from-green-500 to-emerald-500"
                          : stat.status === "warning"
                            ? "bg-gradient-to-br from-yellow-500 to-orange-500"
                            : "bg-gradient-to-br from-red-500 to-red-600"
                      }`}
                    >
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="schedule" className="space-y-8">
            <TabsList className="bg-white/10 border-white/20">
              <TabsTrigger
                value="schedule"
                className="data-[state=active]:bg-white/20"
              >
                Schedule
              </TabsTrigger>
              <TabsTrigger
                value="requests"
                className="data-[state=active]:bg-white/20"
              >
                Requests
              </TabsTrigger>
              <TabsTrigger
                value="availability"
                className="data-[state=active]:bg-white/20"
              >
                Availability
              </TabsTrigger>
              <TabsTrigger
                value="reports"
                className="data-[state=active]:bg-white/20"
              >
                Reports
              </TabsTrigger>
            </TabsList>

            <TabsContent value="schedule" className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  Weekly Schedule
                </h2>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-500">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Shift
                  </Button>
                </div>
              </div>

              {/* Weekly Calendar */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">December 2024</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-4 mb-6">
                    {weekDays.map((day, index) => (
                      <div key={day} className="text-center">
                        <div className="text-white/60 text-sm mb-2">{day}</div>
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto ${
                            currentWeek[index] === 15
                              ? "bg-gradient-to-br from-green-500 to-emerald-500 text-white"
                              : "text-white/70"
                          }`}
                        >
                          {currentWeek[index]}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Time slots */}
                  <div className="space-y-2">
                    {[
                      {
                        time: "8:00 AM",
                        shifts: [
                          { title: "Equipment Setup", status: "vacant" },
                        ],
                      },
                      {
                        time: "9:00 AM",
                        shifts: [
                          {
                            title: "Morning Registration",
                            status: "confirmed",
                            assignee: "Sarah Chen",
                          },
                        ],
                      },
                      {
                        time: "1:00 PM",
                        shifts: [
                          {
                            title: "Afternoon Info Booth",
                            status: "pending",
                            assignee: "Marcus Johnson",
                          },
                        ],
                      },
                      {
                        time: "6:00 PM",
                        shifts: [
                          {
                            title: "Evening Security",
                            status: "confirmed",
                            assignee: "Emma Davis",
                          },
                        ],
                      },
                    ].map((slot, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg"
                      >
                        <div className="w-20 text-white/60 text-sm">
                          {slot.time}
                        </div>
                        <div className="flex-1 space-y-2">
                          {slot.shifts.map((shift, shiftIndex) => (
                            <div
                              key={shiftIndex}
                              className="flex items-center justify-between"
                            >
                              <div className="flex items-center space-x-3">
                                <span className="text-white font-medium">
                                  {shift.title}
                                </span>
                                <Badge
                                  variant={
                                    shift.status === "confirmed"
                                      ? "default"
                                      : shift.status === "pending"
                                        ? "secondary"
                                        : "destructive"
                                  }
                                >
                                  {shift.status}
                                </Badge>
                              </div>
                              {shift.assignee && (
                                <div className="flex items-center space-x-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarFallback className="bg-gradient-to-br from-green-500 to-emerald-500 text-white text-xs">
                                      {shift.assignee
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className="text-white/70 text-sm">
                                    {shift.assignee}
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Today's Shifts */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Today's Shifts</CardTitle>
                  <CardDescription className="text-white/60">
                    December 15, 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {shifts.map((shift) => (
                      <div
                        key={shift.id}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <div className="text-white font-medium">
                              {shift.time.split(" - ")[0]}
                            </div>
                            <div className="text-white/60 text-sm">
                              {shift.time.split(" - ")[1]}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">
                              {shift.title}
                            </h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge
                                variant={
                                  shift.status === "confirmed"
                                    ? "default"
                                    : shift.status === "pending"
                                      ? "secondary"
                                      : "destructive"
                                }
                              >
                                {shift.status}
                              </Badge>
                              {shift.requests > 0 && (
                                <Badge
                                  variant="outline"
                                  className="border-yellow-500 text-yellow-500"
                                >
                                  {shift.requests} requests
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          {shift.assignee && (
                            <div className="flex items-center space-x-2">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                                  {shift.assignee
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-white">
                                {shift.assignee}
                              </span>
                            </div>
                          )}
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10"
                          >
                            {shift.status === "vacant" ? "Assign" : "Edit"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="requests" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  Pending Requests
                </h2>
                <Button className="bg-gradient-to-r from-green-500 to-emerald-500">
                  View All Requests
                </Button>
              </div>

              <div className="space-y-4">
                {requests.map((request) => (
                  <Card key={request.id} className="bg-white/5 border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                              {request.user
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-white font-semibold">
                              {request.user}
                            </h3>
                            <p className="text-white/60 text-sm capitalize">
                              {request.type.replace("-", " ")} request for{" "}
                              {request.date}
                            </p>
                            <p className="text-white/80 text-sm mt-1">
                              {request.reason}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge
                            variant={
                              request.status === "approved"
                                ? "default"
                                : request.status === "urgent"
                                  ? "destructive"
                                  : "secondary"
                            }
                          >
                            {request.status}
                          </Badge>
                          {request.status === "pending" && (
                            <div className="space-x-2">
                              <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700"
                              >
                                Approve
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-white/20 text-white hover:bg-white/10"
                              >
                                Decline
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="availability" className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                Staff Availability
              </h2>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <div className="grid grid-cols-7 gap-4">
                    {weekDays.map((day) => (
                      <div key={day} className="text-center">
                        <h3 className="text-white font-medium mb-4">{day}</h3>
                        <div className="space-y-2">
                          {["Morning", "Afternoon", "Evening"].map((slot) => (
                            <div
                              key={slot}
                              className="p-2 bg-white/5 rounded text-xs"
                            >
                              <div className="text-white/60 mb-1">{slot}</div>
                              <div className="text-green-400">5 available</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports" className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                Scheduling Reports
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Coverage Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center">
                      <p className="text-white/60">
                        Coverage chart would go here
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Staff Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center">
                      <p className="text-white/60">
                        Performance metrics would go here
                      </p>
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

export default ClockedIn;
