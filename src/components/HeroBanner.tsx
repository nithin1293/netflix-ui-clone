import { Play, Plus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section className="relative h-[65vh] min-h-[400px] w-full overflow-hidden sm:h-[70vh] sm:min-h-[500px] lg:h-[75vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1683178861337-ca70ef8c0db3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
          alt="Money Heist promotional banner"
          className="h-full w-full object-cover object-center sm:object-top"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent sm:h-40" />
      </div>

      {/* Mobile Top Navigation */}
      <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-4 py-3 md:hidden">
        <span className="font-display text-3xl text-primary">B</span>
        <div className="flex items-center gap-6">
          <span className="text-sm font-medium text-foreground">TV Shows</span>
          <span className="text-sm font-medium text-foreground">Movies</span>
          <span className="text-sm font-medium text-foreground">My List</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-4 pb-6 sm:justify-center sm:px-6 sm:pb-0 md:pl-8 lg:pl-28">
        <div className="max-w-xl animate-fade-in">
          {/* Series Badge */}
          <div className="mb-2 flex items-center gap-2 sm:mb-4">
            <span className="font-display text-xl text-primary sm:text-2xl">B</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:text-sm">
              Series
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-2 font-display text-4xl uppercase leading-none tracking-wider text-foreground text-shadow-lg sm:text-5xl md:text-6xl lg:text-8xl">
            Book
            <span className="text-primary"> Reads</span>
          </h1>

          {/* Genre Tags - Mobile */}
          <div className="mb-4 hidden text-xs text-muted-foreground sm:hidden">
            Ominous • Chilling • Psychological • Scary
          </div>

          {/* Metadata */}
          <div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
            {/* IMDb Rating */}
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-xs font-medium text-foreground sm:text-sm">8.8/10</span>
            </div>

            {/* Streams */}
            <div className="text-xs text-muted-foreground sm:text-sm">
              <span className="font-semibold text-foreground">2B+ Readers</span> 
            </div>
          </div>

          {/* Actions - Desktop */}
          <div className="hidden items-center gap-4 sm:flex">
            <Button variant="play" size="lg">
              <Play className="h-5 w-5 fill-current" />
              Read
            </Button>
          </div>

          {/* Actions - Mobile (like reference image) */}
          <div className="flex items-center justify-center gap-8 sm:hidden">
            <button className="flex flex-col items-center gap-1">
              <Plus className="h-6 w-6 text-foreground" />
              <span className="text-[10px] text-muted-foreground">My List</span>
            </button>
            
            <Button variant="play" size="default" className="px-8">
              <Play className="h-4 w-4 fill-current" />
              Play
            </Button>
            
            <button className="flex flex-col items-center gap-1">
              <Info className="h-6 w-6 text-foreground" />
              <span className="text-[10px] text-muted-foreground">Info</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
