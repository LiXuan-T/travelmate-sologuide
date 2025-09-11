import { Heart, MapPin, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TravelCardProps {
  image: string;
  title: string;
  description: string;
  rating: number;
  category: string;
  location: string;
  likes: number;
}

const TravelCard = ({ image, title, description, rating, category, location, likes }: TravelCardProps) => {
  return (
    <Card className="travel-card overflow-hidden">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-card/90 text-foreground backdrop-blur-sm">
            {category}
          </Badge>
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-4 right-4 bg-card/90 hover:bg-card text-foreground backdrop-blur-sm rounded-full"
        >
          <Heart size={20} />
        </Button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-bold text-lg leading-tight">{title}</h3>
          <div className="flex items-center gap-1 ml-2">
            <Star className="text-yellow-500 fill-current" size={16} />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin size={16} />
            <span className="text-sm">{location}</span>
          </div>
          <div className="text-sm text-muted-foreground">
            {likes.toLocaleString()} likes
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TravelCard;