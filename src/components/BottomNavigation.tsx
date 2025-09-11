import { NavLink } from "react-router-dom";
import { 
  Home, 
  Calendar, 
  MapPin, 
  AlertTriangle, 
  Camera, 
  Users 
} from "lucide-react";

const BottomNavigation = () => {
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Calendar, label: "Plans", path: "/planning" },
    { icon: MapPin, label: "Location", path: "/location" },
    { icon: AlertTriangle, label: "Emergency", path: "/emergency" },
    { icon: Camera, label: "Diary", path: "/diary" },
    { icon: Users, label: "Match", path: "/matching" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border/20 px-2 py-2 safe-area-inset-bottom">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `nav-tab ${isActive ? 'active' : 'inactive'}`
            }
          >
            <Icon size={20} />
            <span className="text-xs font-medium">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;