import poster1 from "@/assets/posters/poster-1.jpg";
import poster2 from "@/assets/posters/poster-2.jpg";
import poster3 from "@/assets/posters/poster-3.jpg";
import poster4 from "@/assets/posters/poster-4.jpg";
import poster5 from "@/assets/posters/poster-5.jpg";
import poster6 from "@/assets/posters/poster-6.jpg";
import poster7 from "@/assets/posters/poster-7.jpg";
import poster8 from "@/assets/posters/poster-8.jpg";
import poster9 from "@/assets/posters/poster-9.jpg";
import poster10 from "@/assets/posters/poster-10.jpg";
import poster11 from "@/assets/posters/poster-11.jpg";
import poster12 from "@/assets/posters/poster-12.jpg";
import poster13 from "@/assets/posters/poster-13.jpg";
import poster14 from "@/assets/posters/poster-14.jpg";

export interface Movie {
  id: number;
  title: string;
  poster: string;
  year: number;
  rating: number;
}

export const newThisWeek: Movie[] = [
  { id: 1, title: "The Mother", poster: poster1, year: 2023, rating: 8.2 },
  { id: 2, title: "Blockbuster", poster: poster2, year: 2023, rating: 7.8 },
  { id: 3, title: "The Perfection", poster: poster3, year: 2022, rating: 8.5 },
  { id: 4, title: "Extraction", poster: poster4, year: 2023, rating: 8.9 },
  { id: 5, title: "Awe Sanne", poster: poster5, year: 2022, rating: 7.6 },
  { id: 6, title: "The Irishman", poster: poster6, year: 2019, rating: 9.1 },
  { id: 7, title: "Spy Thriller", poster: poster7, year: 2023, rating: 8.0 },
];

export const trendingNow: Movie[] = [
  { id: 8, title: "Pathaan", poster: poster8, year: 2023, rating: 8.7 },
  { id: 9, title: "Echoes", poster: poster9, year: 2022, rating: 8.1 },
  { id: 10, title: "Peaky Blinders", poster: poster10, year: 2022, rating: 9.3 },
  { id: 11, title: "Shadow and Bone", poster: poster11, year: 2023, rating: 8.4 },
  { id: 12, title: "Beast", poster: poster12, year: 2022, rating: 7.9 },
  { id: 13, title: "83", poster: poster13, year: 2021, rating: 8.6 },
  { id: 14, title: "The Gray Man", poster: poster14, year: 2022, rating: 8.8 },
];
