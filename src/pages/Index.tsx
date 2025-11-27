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
      <main className="main-content">
        {/* Hero Banner */}
        <HeroBanner />

        {/* Movie Rows */}
        <div className="-mt-16 relative z-10 space-y-2 pb-12 md:-mt-20">
          <MovieRow title="New this week" movies={newThisWeek} />
          <MovieRow title="Trending Now" movies={trendingNow} />
        </div>
      </main>
    </div>
  );
};

export default Index;
