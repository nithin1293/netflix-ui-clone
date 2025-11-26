import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";
import type { Movie } from "@/data/movies";
import { cn } from "@/lib/utils";

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow = ({ title, movies }: MovieRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-4">
      {/* Title */}
      <h2 className="mb-4 px-6 font-display text-2xl tracking-wide text-foreground lg:px-8 lg:text-3xl">
        {title}
      </h2>

      {/* Carousel Container */}
      <div className="group relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className={cn(
            "absolute left-0 top-1/2 z-20 -translate-y-1/2 flex h-full w-12 items-center justify-center",
            "bg-gradient-to-r from-background to-transparent opacity-0 transition-opacity duration-300",
            "group-hover:opacity-100 hover:from-background/90"
          )}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-8 w-8 text-foreground" />
        </button>

        {/* Movies Scroll Container */}
        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-3 overflow-x-auto px-6 pb-4 lg:gap-4 lg:px-8"
        >
          {movies.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} index={index} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className={cn(
            "absolute right-0 top-1/2 z-20 -translate-y-1/2 flex h-full w-12 items-center justify-center",
            "bg-gradient-to-l from-background to-transparent opacity-0 transition-opacity duration-300",
            "group-hover:opacity-100 hover:from-background/90"
          )}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-8 w-8 text-foreground" />
        </button>
      </div>
    </section>
  );
};

export default MovieRow;
