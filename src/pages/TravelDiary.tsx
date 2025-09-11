import { useState } from "react";
import { Heart, MessageCircle, Bookmark, MapPin, Plus, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import travelHero from "@/assets/travel-hero.jpg";
import cityDestination from "@/assets/city-destination.jpg";
import foodMarket from "@/assets/food-market.jpg";
import mountainTrail from "@/assets/mountain-trail.jpg";

const TravelDiary = () => {
  const [activeTab, setActiveTab] = useState("feed");

  const posts = [
    {
      id: 1,
      user: { name: "Alex Chen", initials: "AC", verified: true },
      image: travelHero,
      caption: "Found paradise in the Maldives! 🏝️ The water is so clear you can see your feet 20 feet down. Perfect end to my solo backpacking adventure.",
      location: "Maldives",
      hashtags: ["#SoloTravel", "#Paradise", "#Maldives", "#BackpackingLife"],
      likes: 342,
      comments: 28,
      timeAgo: "2 hours ago",
      liked: false,
      saved: false
    },
    {
      id: 2,
      user: { name: "Maya Patel", initials: "MP", verified: false },
      image: foodMarket,
      caption: "Street food heaven in Bangkok! 🍜 This pad thai from a tiny street cart was better than any restaurant. The local vendors are so friendly!",
      location: "Bangkok, Thailand",
      hashtags: ["#StreetFood", "#Bangkok", "#FoodieTravel", "#AuthenticFlavors"],
      likes: 189,
      comments: 15,
      timeAgo: "5 hours ago",
      liked: true,
      saved: false
    },
    {
      id: 3,
      user: { name: "Jake Wilson", initials: "JW", verified: false },
      image: mountainTrail,
      caption: "Sunrise hike in the Swiss Alps 🏔️ Started at 4 AM and every step was worth it for this view. Solo adventures push you beyond your comfort zone!",
      location: "Swiss Alps, Switzerland",
      hashtags: ["#Hiking", "#SwissAlps", "#SunriseHike", "#AdventureTravel"],
      likes: 567,
      comments: 42,
      timeAgo: "1 day ago",
      liked: false,
      saved: true
    }
  ];

  const toggleLike = (postId: number) => {
    // In a real app, this would update the backend
    console.log(`Toggled like for post ${postId}`);
  };

  const toggleSave = (postId: number) => {
    // In a real app, this would update the backend
    console.log(`Toggled save for post ${postId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-sm border-b border-border/20 px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold travel-gradient-text">Travel Diary</h1>
          <Button size="icon" className="travel-button-primary">
            <Camera size={20} />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mt-4">
          <Button
            variant={activeTab === "feed" ? "default" : "ghost"}
            className={activeTab === "feed" ? "travel-button-primary" : ""}
            onClick={() => setActiveTab("feed")}
          >
            Community Feed
          </Button>
          <Button
            variant={activeTab === "my-posts" ? "default" : "ghost"}
            className={activeTab === "my-posts" ? "travel-button-primary" : ""}
            onClick={() => setActiveTab("my-posts")}
          >
            My Posts
          </Button>
        </div>
      </div>

      {/* Feed Content */}
      <div className="px-4 py-6">
        {activeTab === "feed" && (
          <div className="space-y-8">
            {posts.map((post) => (
              <Card key={post.id} className="travel-card overflow-hidden">
                {/* Post Header */}
                <div className="p-4 pb-0">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {post.user.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{post.user.name}</h3>
                        {post.user.verified && (
                          <Badge variant="secondary" className="text-xs">✓</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin size={12} />
                        <span>{post.location}</span>
                        <span>•</span>
                        <span>{post.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Post Image */}
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt="Travel post"
                    className="w-full h-80 object-cover"
                  />
                </div>

                {/* Post Actions */}
                <div className="p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`social-button like ${post.liked ? 'bg-red-50 text-red-500' : ''}`}
                      onClick={() => toggleLike(post.id)}
                    >
                      <Heart className={post.liked ? 'fill-current' : ''} size={20} />
                    </Button>
                    <Button variant="ghost" size="sm" className="social-button comment">
                      <MessageCircle size={20} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`social-button save ml-auto ${post.saved ? 'bg-yellow-50 text-yellow-600' : ''}`}
                      onClick={() => toggleSave(post.id)}
                    >
                      <Bookmark className={post.saved ? 'fill-current' : ''} size={20} />
                    </Button>
                  </div>

                  {/* Likes and Comments */}
                  <div className="mb-3">
                    <p className="font-semibold text-sm">{post.likes} likes</p>
                    <p className="text-sm text-muted-foreground">{post.comments} comments</p>
                  </div>

                  {/* Caption */}
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-semibold mr-2">{post.user.name}</span>
                      {post.caption}
                    </p>
                    
                    {/* Hashtags */}
                    <div className="flex flex-wrap gap-1">
                      {post.hashtags.map((tag, index) => (
                        <span key={index} className="text-xs text-primary hover:underline cursor-pointer">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "my-posts" && (
          <div className="text-center py-12">
            <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No posts yet</h3>
            <p className="text-muted-foreground mb-6">Share your travel experiences with the community</p>
            <Button className="travel-button-primary">
              <Plus size={20} className="mr-2" />
              Create Your First Post
            </Button>
          </div>
        )}
      </div>

      {/* Create Post FAB */}
      <Button
        className="fixed bottom-24 right-4 w-14 h-14 rounded-full travel-button-sunset shadow-lg"
        size="icon"
      >
        <Plus size={24} />
      </Button>
    </div>
  );
};

export default TravelDiary;