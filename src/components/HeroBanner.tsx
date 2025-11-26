import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden lg:h-[75vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
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
            <span className="font-display text-2xl text-primary">N</span>
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Series
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-2 font-display text-6xl uppercase leading-none tracking-wider text-foreground text-shadow-lg md:text-7xl lg:text-8xl">
            Money
            <span className="text-primary"> Heist</span>
          </h1>
          
          <p className="mb-6 font-display text-2xl uppercase tracking-widest text-muted-foreground md:text-3xl">
            Part 4
          </p>

          {/* Metadata */}
          <div className="mb-6 flex items-center gap-4">
            {/* IMDb Rating */}
            <div className="flex items-center gap-2">
              <span className="rounded bg-imdb px-2 py-0.5 text-xs font-bold text-background">
                IMDb
              </span>
              <span className="text-sm font-medium text-foreground">8.8/10</span>
            </div>

            {/* Streams */}
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">2B+</span> Streams
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="play" size="lg">
              <Play className="h-5 w-5 fill-current" />
              Play
            </Button>
            <Button variant="trailer" size="lg">
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
