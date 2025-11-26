import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden lg:h-[75vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1683178861337-ca70ef8c0db3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
          alt="Money Heist promotional banner"
          className="h-full w-full object-cover object-top"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 pl-20 lg:pl-28">
        <div className="max-w-xl animate-fade-in">
          {/* Series Badge */}
          <div className="mb-4 flex items-center gap-2">
            <span className="font-display text-2xl text-primary">B</span>
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Series
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-2 font-display text-6xl uppercase leading-none tracking-wider text-foreground text-shadow-lg md:text-7xl lg:text-8xl">
            Book
            <span className="text-primary"> Reads</span>
          </h1>
          
          

          {/* Metadata */}
          <div className="mb-6 flex items-center gap-4">
            {/* IMDb Rating */}
            <div className="flex items-center gap-2">
              
              <span className="text-sm font-medium text-foreground">8.8/10</span>
            </div>

            {/* Streams */}
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">2B+ Readers</span> 
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="play" size="lg">
              <Play className="h-5 w-5 fill-current" />
              Read
            </Button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
