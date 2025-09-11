import { useState } from "react";
import { MapPin, Users, Shield, StopCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const LocationSharing = () => {
  const [isSharing, setIsSharing] = useState(false);
  
  const trustedContacts = [
    { id: 1, name: "Mom", initials: "M", status: isSharing ? "receiving" : "not-shared", phone: "+1 (555) 123-4567" },
    { id: 2, name: "Sarah (Sister)", initials: "S", status: isSharing ? "receiving" : "not-shared", phone: "+1 (555) 987-6543" },
    { id: 3, name: "Best Friend Emma", initials: "E", status: isSharing ? "receiving" : "not-shared", phone: "+1 (555) 456-7890" },
    { id: 4, name: "Travel Buddy Mike", initials: "M", status: isSharing ? "receiving" : "not-shared", phone: "+1 (555) 321-0987" }
  ];

  const handleToggleSharing = () => {
    setIsSharing(!isSharing);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-sm border-b border-border/20 px-4 py-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold travel-gradient-text mb-2">Live Location</h1>
          <p className="text-muted-foreground text-sm">Share your location with trusted contacts</p>
        </div>
      </div>

      {/* Map Area */}
      <div className="px-4 py-6">
        <Card className="travel-card overflow-hidden mb-6">
          <div className="relative h-64 bg-gradient-to-br from-travel-ocean/20 to-travel-sunset/20 flex items-center justify-center">
            {/* Simulated Map */}
            <div className="absolute inset-4 bg-muted/30 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-4 h-4 bg-status-sharing rounded-full mx-auto mb-2 animate-pulse"></div>
                <p className="text-sm text-muted-foreground">Your Current Location</p>
                <p className="text-xs text-muted-foreground">Bangkok, Thailand</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Start Sharing Button */}
        {!isSharing && (
          <div className="mb-6">
            <Button 
              onClick={handleToggleSharing}
              className="w-full travel-button-primary"
              size="lg"
            >
              <MapPin size={20} className="mr-2" />
              Start Sharing Location
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Your location will be shared with your trusted contacts until you stop sharing
            </p>
          </div>
        )}

        {/* Trusted Contacts */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Users size={20} className="text-primary" />
            <h2 className="font-semibold">Trusted Contacts</h2>
          </div>
          
          <div className="space-y-3">
            {trustedContacts.map((contact) => (
              <Card key={contact.id} className="travel-card p-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {contact.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-medium">{contact.name}</h3>
                    <p className="text-sm text-muted-foreground">{contact.phone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`status-indicator ${contact.status === "receiving" ? "online" : "offline"}`}></div>
                    <span className="text-xs text-muted-foreground">
                      {contact.status === "receiving" ? "Receiving" : "Not shared"}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stop Sharing Button */}
        {isSharing && (
          <div className="mt-6">
            <Button 
              onClick={handleToggleSharing}
              variant="destructive"
              className="w-full"
              size="lg"
            >
              <StopCircle size={20} className="mr-2" />
              Stop Sharing Location
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationSharing;