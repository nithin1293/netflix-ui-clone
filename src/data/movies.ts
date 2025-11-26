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
  { id: 1, title: "Heart of sea", poster:"https://images3.penguinrandomhouse.com/cover/9780141001821" , year: 2023, rating: 8.2 },
  { id: 2, title: "The Unwilling", poster: "https://images.squarespace-cdn.com/content/v1/56018d17e4b0f36b5cadab82/1575936733097-NFRYRNC3Z8OB9Z9MR56Y/74370402_3040276259333338_301532478277943296_o.jpg", year: 2023, rating: 7.8 },
  { id: 3, title: "Until August", poster: "https://m.media-amazon.com/images/I/71+rpfDL4ZL._UF1000,1000_QL80_.jpg", year: 2022, rating: 8.5 },
  { id: 4, title: "One True Loves", poster: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476776903/one-true-loves-9781476776903_hr.jpg", year: 2023, rating: 8.9 },
  { id: 5, title: "One of Our Kind", poster: "https://images.penguinrandomhouse.com/cover/9780593470688", year: 2022, rating: 7.6 },
  { id: 6, title: "One Week Author", poster: "https://m.media-amazon.com/images/I/61kzvUgnKWL._AC_UF1000,1000_QL80_.jpg", year: 2019, rating: 9.1 },
  { id: 7, title: "Hundered Years", poster: "https://festivedeal.com/image/cache/data/Product%20Image/Books/Fiction%20Books/one-hundred-years-of-solitude-2007-gabriel-garcia-marquez/one-hundred-years-of-solitude-2007-gabriel-garcia-marquez-1-500x554.jpg", year: 2023, rating: 8.0 },
];

export const trendingNow: Movie[] = [
  { id: 8, title: "Still Life", poster: "https://cdn.kobo.com/book-images/f8d2a935-1985-40f6-bde7-46c97f95feee/353/569/90/False/still-life-94.jpg", year: 2023, rating: 8.7 },
  { id: 9, title: "Beautiful Life", poster: "https://rukminim2.flixcart.com/image/480/640/xif0q/book/q/g/g/great-big-beautiful-life-the-dazzling-new-romance-from-the-1-original-imahbcbf4qad9wzm.jpeg?q=90", year: 2022, rating: 8.1 },
  { id: 10, title: "So late in the day", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5H3EwVYYHVuY69pPnnGtYSb-JEamwZC6q7Q&s", year: 2022, rating: 9.3 },
  { id: 11, title: "A Single Shard", poster: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9780861541874/a-single-shard-9780861541874_lg.jpg", year: 2023, rating: 8.4 },
  { id: 12, title: "The Wren", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwfpJvSD4IHz6bCvY83D8UAgMKHlKtKrQJ4Q&s", year: 2022, rating: 7.9 },
  { id: 13, title: "Good Left Undone", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjUg7wh45jOy0Sp9oxwfm1reorH-9a_x98xA&s", year: 2021, rating: 8.6 },
  { id: 14, title: "Death os The Author", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZjsGVm-YGPmV6F4Zpxh0runamdfDt7S9YA&s", year: 2022, rating: 8.8 },
];
