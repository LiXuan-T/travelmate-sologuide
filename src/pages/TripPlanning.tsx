import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Calendar, MapPin, Plane, Hotel, Camera, Share2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TripPlanning = () => {
  const navigate = useNavigate();
  const [activeTrip, setActiveTrip] = useState("current");

  const trips = [
    {
      id: "current",
      title: "Southeast Asia Adventure", 
      dates: "Dec 15 - Dec 28, 2024",
      status: "active",
      days: [
        {
          date: "Dec 15",
          day: "Day 1",
          activities: [
            { type: "flight", time: "10:30 AM", title: "Flight to Bangkok", icon: Plane, status: "confirmed" },
            { type: "hotel", time: "8:00 PM", title: "Check-in: Mandarin Oriental", icon: Hotel, status: "confirmed" }
          ]
        },
        {
          date: "Dec 16", 
          day: "Day 2",
          activities: [
            { type: "activity", time: "9:00 AM", title: "Temple Tour & Street Food", icon: Camera, status: "planned" },
            { type: "activity", time: "2:00 PM", title: "Floating Market Visit", icon: MapPin, status: "planned" }
          ]
        }
      ]
    }
  ];

  const currentTrip = trips.find(trip => trip.id === activeTrip);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-status-online/10 text-status-online border-status-online/20";
      case "planned": return "bg-primary/10 text-primary border-primary/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-sm border-b border-border/20 px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold travel-gradient-text">Trip Planning</h1>
            <p className="text-muted-foreground text-sm">Organize your perfect journey</p>
          </div>
          <Button className="travel-button-primary">
            <Plus size={20} className="mr-2" />
            New Trip
          </Button>
        </div>
      </div>

      {/* Trip Overview */}
      {currentTrip && (
        <div className="px-4 py-6">
          <Card className="travel-card p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold mb-1">{currentTrip.title}</h2>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Calendar size={16} />
                  {currentTrip.dates}
                </p>
              </div>
              <Badge className={getStatusColor(currentTrip.status)}>
                {currentTrip.status}
              </Badge>
            </div>
            
            <Button variant="outline" className="w-full">
              <Share2 size={16} className="mr-2" />
              Share Trip with Trusted Contacts
            </Button>
          </Card>

          {/* Timeline */}
          <div className="space-y-6">
            {currentTrip.days.map((day, dayIndex) => (
              <div key={dayIndex} className="relative">
                {/* Day Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {dayIndex + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{day.day}</h3>
                    <p className="text-sm text-muted-foreground">{day.date}</p>
                  </div>
                </div>

                {/* Activities */}
                <div className="ml-4 pl-8 border-l-2 border-border/30 space-y-4">
                  {day.activities.map((activity, activityIndex) => (
                    <Card key={activityIndex} className="travel-card p-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 rounded-full p-2">
                          <activity.icon size={20} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium">{activity.title}</h4>
                            <Badge className={getStatusColor(activity.status)} variant="outline">
                              {activity.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                  
                  {/* Add Activity Button */}
                  <Button variant="outline" className="w-full border-dashed">
                    <Plus size={16} className="mr-2" />
                    Add Activity
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-3 mt-8">
            <Button variant="outline" className="flex flex-col gap-2 h-20">
              <Hotel size={20} />
              <span className="text-xs">Hotels</span>
            </Button>
            <Button variant="outline" className="flex flex-col gap-2 h-20">
              <Plane size={20} />
              <span className="text-xs">Flights</span>
            </Button>
            <Button variant="outline" className="flex flex-col gap-2 h-20">
              <Camera size={20} />
              <span className="text-xs">Activities</span>
            </Button>
          </div>
        </div>
      )}

      {/* AI Assistant FAB */}
      <Button
        onClick={() => navigate('/ai-assistant')}
        className="fixed bottom-24 right-4 w-14 h-14 rounded-full travel-button-sunset shadow-lg"
        size="icon"
      >
        <MessageCircle size={24} />
      </Button>
    </div>
  );
};

export default TripPlanning;