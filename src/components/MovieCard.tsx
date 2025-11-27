import { cn } from "@/lib/utils";
import type { Movie } from "@/data/movies";

interface MovieCardProps {
  movie: Movie;
  index: number;
}

const MovieCard = ({ movie, index }: MovieCardProps) => {
  return (
    <article
      className={cn(
        "group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-md transition-all duration-300 sm:rounded-lg",
        "w-24 xs:w-28 sm:w-36 md:w-40 lg:w-44",
        "hover:z-10 sm:hover:scale-110 sm:hover:shadow-2xl sm:hover:shadow-background/50"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Poster Image */}
      <div className="aspect-[2/3] overflow-hidden rounded-lg bg-card">
        <img
          src={movie.poster}
          alt={`${movie.title} poster`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end rounded-lg bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="p-3">
          <h3 className="truncate text-sm font-semibold text-foreground">
            {movie.title}
          </h3>
          <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
            <span>{movie.year}</span>
            <span className="flex items-center gap-1">
              <span className="text-imdb">★</span>
              {movie.rating}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
