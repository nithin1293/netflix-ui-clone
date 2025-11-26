import { useState } from "react";
import { Search, Home, Library, Grid3X3, Plus, Settings, Shuffle, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

const sidebarItems: SidebarItem[] = [
  { icon: Search, label: "Search" },
  { icon: Home, label: "Home", active: true },
  { icon: Library, label: "Library" },
  { icon: Grid3X3, label: "Categories" },
  { icon: TrendingUp, label: "Trending" },
  { icon: Plus, label: "My List" },
  { icon: Shuffle, label: "Random" },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-16 flex-col items-center bg-sidebar py-6 lg:w-20">
      {/* Logo */}
      <div className="mb-8">
        <span className="font-display text-3xl text-primary lg:text-4xl">b</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col items-center gap-2">
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeIndex === index;
          
          return (
            <button
              key={item.label}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "group relative flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-200",
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground"
              )}
              aria-label={item.label}
            >
              {/* Active indicator */}
              {isActive && (
                <span className="absolute left-0 h-6 w-1 rounded-r-full bg-primary" />
              )}
              
              <Icon 
                className={cn(
                  "h-5 w-5 transition-transform duration-200 group-hover:scale-110",
                  isActive && "text-primary"
                )} 
              />
              
              {/* Tooltip */}
              <span className="pointer-events-none absolute left-full ml-4 whitespace-nowrap rounded-md bg-card px-3 py-1.5 text-sm font-medium text-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Settings */}
      <button
        className="group flex h-12 w-12 items-center justify-center rounded-xl text-sidebar-foreground transition-all duration-200 hover:bg-sidebar-accent hover:text-foreground"
        aria-label="Settings"
      >
        <Settings className="h-5 w-5 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-45" />
      </button>
    </aside>
  );
};

export default Sidebar;
