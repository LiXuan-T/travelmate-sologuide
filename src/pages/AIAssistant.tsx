import { useState } from "react";
import { Send, Compass, UtensilsCrossed, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      content: "Hi! I'm your AI travel assistant. I can help you discover amazing places, plan your itinerary, find local food, and provide safety tips. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickQuestions = [
    { text: "What should I eat nearby?", icon: UtensilsCrossed },
    { text: "Plan a one-day trip", icon: Compass },
    { text: "Safety tips", icon: Shield },
    { text: "Best attractions", icon: MapPin }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    const aiResponse: Message = {
      id: messages.length + 2,
      type: 'ai',
      content: getAIResponse(inputMessage),
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, aiResponse]);
    setInputMessage("");
  };

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('food') || input.includes('eat')) {
      return "🍜 Based on your location in Bangkok, I recommend trying these local specialties:\n\n1. **Pad Thai** at Thip Samai - Famous for their original recipe\n2. **Som Tam** at Som Tam Nua - Best papaya salad in the city\n3. **Mango Sticky Rice** at Mae Varee - Perfect for dessert\n\nAll within walking distance from your current location!";
    }
    
    if (input.includes('plan') || input.includes('itinerary')) {
      return "🗓️ Here's a perfect one-day Bangkok itinerary:\n\n**Morning (9-12pm):**\n• Visit Grand Palace & Wat Phra Kaew\n• Explore Wat Pho Temple\n\n**Afternoon (1-5pm):**\n• Lunch at Chatuchak Market\n• Shopping at MBK Center\n\n**Evening (6-9pm):**\n• Sunset at Wat Arun\n• Dinner cruise on Chao Phraya River\n\nWould you like me to adjust this based on your interests?";
    }
    
    if (input.includes('safety') || input.includes('safe')) {
      return "🛡️ Here are essential safety tips for Bangkok:\n\n• **Scams**: Avoid tuk-tuk drivers offering 'special tours'\n• **Water**: Drink only bottled water\n• **Transportation**: Use Grab or official taxis with meters\n• **Emergency**: Keep embassy contact: +66 2-205-4000\n• **Money**: Use ATMs inside malls/banks for better security\n\nYour location is being shared with trusted contacts. Stay aware of your surroundings!";
    }
    
    if (input.includes('attraction') || input.includes('place')) {
      return "🏛️ Top attractions near you in Bangkok:\n\n1. **Grand Palace** (2.1 km) - Iconic royal complex\n2. **Wat Pho** (2.3 km) - Famous reclining Buddha\n3. **Chatuchak Market** (3.2 km) - Weekend shopping paradise\n4. **Jim Thompson House** (1.8 km) - Traditional Thai architecture\n5. **Lumpini Park** (1.5 km) - Green oasis in the city\n\nWhich type of attraction interests you most?";
    }
    
    return "I'd be happy to help you with that! I can provide information about local attractions, food recommendations, safety tips, or help you plan your itinerary. Could you be more specific about what you'd like to know?";
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-sm border-b border-border/20 px-4 py-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold travel-gradient-text mb-2">AI Travel Assistant</h1>
          <p className="text-muted-foreground text-sm">Your smart companion for travel discoveries</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <Avatar className="w-8 h-8 mt-1">
                <AvatarFallback className={message.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-travel-sunset/20 text-travel-sunset'}>
                  {message.type === 'user' ? 'U' : 'AI'}
                </AvatarFallback>
              </Avatar>
              
              <Card className={`p-4 ${
                message.type === 'user' 
                  ? 'travel-button-primary text-primary-foreground' 
                  : 'travel-card border-travel-sunset/20'
              }`}>
                <p className="text-sm whitespace-pre-line">{message.content}</p>
                <span className={`text-xs mt-2 block ${
                  message.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </Card>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Questions */}
      <div className="px-4 py-3 border-t border-border/20">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {quickQuestions.map((question, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="whitespace-nowrap flex items-center gap-2 travel-card border-travel-sunset/30 hover:bg-travel-sunset/10"
              onClick={() => handleQuickQuestion(question.text)}
            >
              <question.icon size={14} />
              {question.text}
            </Button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="sticky bottom-0 bg-card/80 backdrop-blur-sm border-t border-border/20 px-4 py-4">
        <div className="flex gap-3 items-end">
          <div className="flex-1">
            <Textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me anything about your trip..."
              className="min-h-[44px] max-h-32 resize-none border-border/30 bg-muted/30"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
          </div>
          <Button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className="travel-button-sunset w-11 h-11 rounded-full p-0"
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;