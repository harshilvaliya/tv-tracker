import ShowCard from "@/components/ShowCard";
import AddShowForm from "@/components/AddShowForm";
import { Show } from "@/types/show";

const initialShows: Show[] = [
  {
    id: 1,
    title: "Attack on Titan",
    type: "Anime",
    totalEpisodes: 75,
    watchedEpisodes: 50,
  },
  {
    id: 2,
    title: "Stranger Things",
    type: "TV Show",
    totalEpisodes: 34,
    watchedEpisodes: 34,
  },
  {
    id: 3,
    title: "My Hero Academia",
    type: "Anime",
    totalEpisodes: 113,
    watchedEpisodes: 100,
  },
  {
    id: 4,
    title: "Breaking Bad",
    type: "TV Show",
    totalEpisodes: 62,
    watchedEpisodes: 62,
  },
];

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        My Anime & TV Show Tracker
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {initialShows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>

      <AddShowForm />
    </div>
  );
}
