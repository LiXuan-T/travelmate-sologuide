import { useState } from "react";
import { Heart, X, Filter, MapPin, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const SocialMatching = () => {
  const [activeTab, setActiveTab] = useState("discover");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const travelers = [
    {
      id: 1,
      name: "Emma Rodriguez",
      age: 28,
      initials: "ER",
      travelStyle: ["Adventure", "Budget-Friendly", "Food Lover"],
      upcomingDestinations: ["Vietnam", "Cambodia"],
      bio: "Solo traveler exploring Southeast Asia. Love hiking, street food, and meeting locals!",
      distance: "2.3 km away",
      photos: 4
    },
    {
      id: 2,
      name: "David Kim",
      age: 31,
      initials: "DK",
      travelStyle: ["Cultural", "Photography", "Luxury"],
      upcomingDestinations: ["Japan", "South Korea"],
      bio: "Photographer documenting Asian cultures. Always up for temple visits and traditional food experiences.",
      distance: "1.8 km away",
      photos: 6
    },
    {
      id: 3,
      name: "Sofia Andersson",
      age: 25,
      initials: "SA",
      travelStyle: ["Beach", "Relaxation", "Yoga"],
      upcomingDestinations: ["Bali", "Thailand"],
      bio: "Yoga instructor on a spiritual journey. Seeking peaceful beaches and mindful travel companions.",
      distance: "3.1 km away",
      photos: 5
    }
  ];

  const connectionRequests = [
    {
      id: 1,
      name: "Marcus Chen",
      initials: "MC",
      message: "Hey! I saw we're both heading to Vietnam next month. Would love to explore together!",
      travelStyle: ["Adventure", "Food Lover"],
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      name: "Isabella Lopez",
      initials: "IL",
      message: "Love your travel posts! I'm also doing solo backpacking in Southeast Asia. Let's connect!",
      travelStyle: ["Budget-Friendly", "Cultural"],
      timeAgo: "1 day ago"
    }
  ];

  const currentTraveler = travelers[currentCardIndex];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      console.log(`Sent connection request to ${currentTraveler.name}`);
    }
    
    if (currentCardIndex < travelers.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setCurrentCardIndex(0); // Loop back to start
    }
  };

  const getStyleColor = (style: string) => {
    const colors = {
      'Adventure': 'bg-travel-forest/20 text-travel-forest',
      'Budget-Friendly': 'bg-travel-sunset/20 text-orange-700',
      'Food Lover': 'bg-travel-coral/20 text-red-700',
      'Cultural': 'bg-travel-lavender/20 text-purple-700',
      'Photography': 'bg-blue-100 text-blue-700',
      'Luxury': 'bg-yellow-100 text-yellow-700',
      'Beach': 'bg-travel-ocean/20 text-travel-ocean',
      'Relaxation': 'bg-green-100 text-green-700',
      'Yoga': 'bg-purple-100 text-purple-700'
    };
    return colors[style as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-sm border-b border-border/20 px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold travel-gradient-text">Travel Matching</h1>
          <Button size="icon" variant="outline">
            <Filter size={20} />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mt-4">
          <Button
            variant={activeTab === "discover" ? "default" : "ghost"}
            className={activeTab === "discover" ? "travel-button-primary" : ""}
            onClick={() => setActiveTab("discover")}
          >
            Discover
          </Button>
          <Button
            variant={activeTab === "requests" ? "default" : "ghost"}
            className={activeTab === "requests" ? "travel-button-primary" : ""}
            onClick={() => setActiveTab("requests")}
          >
            Requests ({connectionRequests.length})
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {activeTab === "discover" && (
          <div className="max-w-md mx-auto">
            {currentTraveler && (
              <div className="relative h-[600px] mb-6">
                {/* Travel Card */}
                <div className="swipe-card">
                  <Card className="h-full border-0 shadow-lg">
                    {/* Profile Image Area */}
                    <div className="relative h-2/3 bg-gradient-to-br from-travel-ocean/20 to-travel-sunset/20 flex items-center justify-center">
                      <Avatar className="w-32 h-32">
                        <AvatarFallback className="bg-primary text-primary-foreground text-3xl font-bold">
                          {currentTraveler.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1">
                        <span className="text-xs font-medium">{currentTraveler.photos} photos</span>
                      </div>
                    </div>

                    {/* Profile Info */}
                    <div className="p-6 h-1/3 overflow-y-auto">
                      <div className="mb-3">
                        <h2 className="text-xl font-bold">{currentTraveler.name}, {currentTraveler.age}</h2>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin size={12} />
                          {currentTraveler.distance}
                        </p>
                      </div>

                      {/* Travel Styles */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {currentTraveler.travelStyle.map((style, index) => (
                          <Badge key={index} className={`text-xs ${getStyleColor(style)}`} variant="secondary">
                            {style}
                          </Badge>
                        ))}
                      </div>

                      {/* Upcoming Destinations */}
                      <div className="mb-3">
                        <p className="text-sm font-medium mb-1 flex items-center gap-1">
                          <Calendar size={12} />
                          Upcoming destinations:
                        </p>
                        <div className="flex gap-2">
                          {currentTraveler.upcomingDestinations.map((dest, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {dest}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Bio */}
                      <p className="text-sm text-muted-foreground">
                        {currentTraveler.bio}
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-center gap-6">
              <Button
                size="icon"
                variant="outline"
                className="w-14 h-14 rounded-full border-red-200 hover:bg-red-50 hover:border-red-300"
                onClick={() => handleSwipe('left')}
              >
                <X size={24} className="text-red-500" />
              </Button>
              <Button
                size="icon"
                className="w-14 h-14 rounded-full bg-status-online hover:bg-green-600 text-white"
                onClick={() => handleSwipe('right')}
              >
                <Heart size={24} />
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Swipe left to pass, right to connect
            </p>
          </div>
        )}

        {activeTab === "requests" && (
          <div className="space-y-4">
            {connectionRequests.length > 0 ? (
              connectionRequests.map((request) => (
                <Card key={request.id} className="travel-card p-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {request.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{request.name}</h3>
                        <span className="text-xs text-muted-foreground">{request.timeAgo}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {request.travelStyle.map((style, index) => (
                          <Badge key={index} className={`text-xs ${getStyleColor(style)}`} variant="secondary">
                            {style}
                          </Badge>
                        ))}
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {request.message}
                      </p>
                      
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="flex-1">
                          Decline
                        </Button>
                        <Button className="travel-button-primary flex-1" size="sm">
                          Accept
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No connection requests</h3>
                <p className="text-muted-foreground">Start swiping to meet fellow travelers!</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Filter Bar (only in discover mode) */}
      {activeTab === "discover" && (
        <div className="fixed bottom-24 left-0 right-0 px-4">
          <Card className="travel-card p-3">
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-1">
                <DollarSign size={16} className="text-travel-sunset" />
                <span>Budget</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} className="text-travel-ocean" />
                <span>5km radius</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} className="text-travel-forest" />
                <span>Next month</span>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SocialMatching;