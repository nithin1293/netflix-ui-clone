import Sidebar from "@/components/Sidebar";
import HeroBanner from "@/components/HeroBanner";
import MovieRow from "@/components/MovieRow";
import { newThisWeek, trendingNow } from "@/data/movies";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content - Adjusted margins for mobile/desktop */}
      <main className="main-content ">
        {/* Hero Banner */}
        <HeroBanner />

        {/* Movie Rows */}
        <div className="relative z-10 space-y-2 pb-20
  -mt-20 sm:-mt-24 md:-mt-28">
          <MovieRow title="New this week" movies={newThisWeek} />
          <MovieRow title="Trending Now" movies={trendingNow} />
        </div>
      </main>
    </div>
  );
};

export default Index;
