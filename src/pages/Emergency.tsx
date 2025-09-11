import { useState } from "react";
import { AlertTriangle, Phone, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Emergency = () => {
  const [isTriggered, setIsTriggered] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const emergencyContacts = [
    { name: "Local Emergency", number: "911", type: "emergency" },
    { name: "Tourist Police", number: "+66 1155", type: "local" },
    { name: "Embassy", number: "+66 2-205-4000", type: "embassy" }
  ];

  const trustedContacts = [
    { name: "Mom", initials: "M" },
    { name: "Sarah", initials: "S" },
    { name: "Emma", initials: "E" }
  ];

  const handleSOSPress = () => {
    let count = 3;
    setCountdown(count);
    
    const timer = setInterval(() => {
      count--;
      setCountdown(count);
      
      if (count === 0) {
        clearInterval(timer);
        setIsTriggered(true);
        setCountdown(0);
      }
    }, 1000);
  };

  if (isTriggered) {
    return (
      <div className="min-h-screen bg-emergency-light flex flex-col items-center justify-center px-4">
        <Card className="w-full max-w-md p-8 text-center bg-card border-emergency-red/20">
          <div className="mb-6">
            <div className="w-16 h-16 bg-status-online rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-emergency-red mb-2">Alert Sent!</h1>
            <p className="text-muted-foreground">
              Your trusted contacts have been notified with your current location and emergency status.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">Location shared:</p>
              <p className="font-medium">Bangkok, Thailand</p>
              <p className="text-xs text-muted-foreground">13.7563° N, 100.5018° E</p>
            </div>
            
            <Button 
              onClick={() => setIsTriggered(false)}
              variant="outline" 
              className="w-full"
            >
              I'm Safe Now
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-emergency-light">
      {/* Header */}
      <div className="bg-emergency-red text-white px-4 py-6 text-center">
        <AlertTriangle className="w-8 h-8 mx-auto mb-2" />
        <h1 className="text-2xl font-bold mb-1">Emergency SOS</h1>
        <p className="text-emergency-red-light text-sm">Tap the button below if you need immediate help</p>
      </div>

      <div className="px-4 py-8">
        {/* SOS Button */}
        <div className="text-center mb-8">
          <Button
            onClick={handleSOSPress}
            className="emergency-button w-32 h-32 text-white text-xl font-bold"
            disabled={countdown > 0}
          >
            {countdown > 0 ? countdown : "SOS"}
          </Button>
          
          {countdown > 0 && (
            <div className="mt-4">
              <p className="text-emergency-red font-semibold">Alert will be sent in {countdown}...</p>
              <p className="text-xs text-muted-foreground">Tap anywhere to cancel</p>
            </div>
          )}
          
          {countdown === 0 && (
            <p className="mt-4 text-sm text-muted-foreground">
              Press and hold to send emergency alert
            </p>
          )}
        </div>

        {/* Quick Actions */}
        <div className="space-y-4 mb-8">
          <Card className="p-4">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Alert Trusted Contacts
            </h2>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {trustedContacts.map((contact, index) => (
                <div key={index} className="text-center">
                  <Avatar className="mx-auto mb-2">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {contact.initials}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-xs text-muted-foreground">{contact.name}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Will send your location and emergency status
            </p>
          </Card>

          <Card className="p-4">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-emergency-red" />
              Emergency Numbers
            </h2>
            <div className="space-y-3">
              {emergencyContacts.map((contact, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-between border-emergency-red/20 hover:bg-emergency-red/5"
                >
                  <div className="text-left">
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-xs text-muted-foreground">{contact.type}</p>
                  </div>
                  <span className="font-mono text-sm">{contact.number}</span>
                </Button>
              ))}
            </div>
          </Card>
        </div>

        {/* Safety Tips */}
        <Card className="p-4 bg-muted/30">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Safety Tips
          </h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Keep your phone charged when traveling</li>
            <li>• Share your itinerary with trusted contacts</li>
            <li>• Know local emergency numbers</li>
            <li>• Trust your instincts in unfamiliar situations</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Emergency;