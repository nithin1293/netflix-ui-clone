import { useState } from "react";
import { Search, Home, Library, Grid3X3, Plus, Settings, Download, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

// Desktop sidebar items
const desktopItems: SidebarItem[] = [
  { icon: Search, label: "Search" },
  { icon: Home, label: "Home", active: true },
  { icon: Library, label: "Library" },
  { icon: Grid3X3, label: "Categories" },
  { icon: Plus, label: "My List" },
];

// Mobile bottom nav items (matching the reference image)
const mobileItems: SidebarItem[] = [
  { icon: Home, label: "Home", active: true },
  { icon: Search, label: "Search" },
  { icon: Grid3X3, label: "Coming Soon" },
  { icon: Download, label: "Downloads" },
  { icon: MoreHorizontal, label: "More" },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  return (
    <>
      {/* Desktop Sidebar - Hidden on mobile */}
      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-16 flex-col items-center bg-sidebar py-6 sm:flex lg:w-20">
        {/* Logo */}
        <div className="mb-8">
          <span className="font-display text-3xl text-primary lg:text-4xl">b</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col items-center gap-2">
          {desktopItems.map((item, index) => {
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

      {/* Mobile Bottom Navigation - Visible only on mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-border/20 bg-sidebar/95 backdrop-blur-lg sm:hidden">
        {mobileItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = mobileActiveIndex === index;
          
          return (
            <button
              key={item.label}
              onClick={() => setMobileActiveIndex(index)}
              className={cn(
                "flex flex-1 flex-col items-center justify-center gap-1 py-2 transition-colors duration-200",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}
              aria-label={item.label}
            >
              <Icon 
                className={cn(
                  "h-5 w-5 transition-all duration-200",
                  isActive && "text-foreground"
                )} 
              />
              <span className={cn(
                "text-[10px] font-medium",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};

export default Sidebar;
