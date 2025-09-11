import { useState } from "react";
import { Search, MessageCircle, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TravelCard from "@/components/TravelCard";
import travelHero from "@/assets/travel-hero.jpg";
import cityDestination from "@/assets/city-destination.jpg";
import foodMarket from "@/assets/food-market.jpg";
import mountainTrail from "@/assets/mountain-trail.jpg";

const AiFeed = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Food", "Attractions", "Itineraries"];

  const travelCards = [
    {
      id: 1,
      image: travelHero,
      title: "Paradise Beach Getaway",
      description: "Stunning tropical paradise with crystal clear waters and pristine beaches",
      rating: 4.9,
      category: "Attractions",
      location: "Maldives",
      likes: 1247
    },
    {
      id: 2,
      image: cityDestination,
      title: "Urban Explorer's Guide",
      description: "Discover hidden gems in the heart of the modern city",
      rating: 4.7,
      category: "Itineraries",
      location: "Tokyo, Japan",
      likes: 892
    },
    {
      id: 3,
      image: foodMarket,
      title: "Street Food Adventure",
      description: "Authentic local flavors and culinary experiences you can't miss",
      rating: 4.8,
      category: "Food",
      location: "Bangkok, Thailand",
      likes: 2103
    },
    {
      id: 4,
      image: mountainTrail,
      title: "Mountain Hiking Trail",
      description: "Breathtaking views and challenging trails for adventure seekers",
      rating: 4.6,
      category: "Attractions",
      location: "Swiss Alps",
      likes: 756
    }
  ];

  const filteredCards = activeCategory === "All" 
    ? travelCards 
    : travelCards.filter(card => card.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-sm border-b border-border/20 px-4 py-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input 
              placeholder="Search destinations, food, activities..."
              className="pl-10 pr-4 rounded-full border-border/30 bg-muted/30"
            />
          </div>
          <Button size="icon" variant="outline" className="rounded-full">
            <Filter size={20} />
          </Button>
        </div>
        
        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeCategory === category ? "default" : "secondary"}
              className={`cursor-pointer whitespace-nowrap px-4 py-2 rounded-full ${
                activeCategory === category 
                  ? "travel-button-primary text-primary-foreground" 
                  : "bg-muted hover:bg-muted/80"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Feed Content */}
      <div className="px-4 py-6 space-y-6">
        {filteredCards.map((card) => (
          <TravelCard key={card.id} {...card} />
        ))}
      </div>

      {/* AI Assistant FAB */}
      <Button
        className="fixed bottom-24 right-4 w-14 h-14 rounded-full travel-button-sunset shadow-lg"
        size="icon"
      >
        <MessageCircle size={24} />
      </Button>
    </div>
  );
};

export default AiFeed;