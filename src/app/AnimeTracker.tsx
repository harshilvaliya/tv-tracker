// import { useState } from "react";
// import { PlusCircle, CheckCircle, XCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// type Show = {
//   id: number;
//   title: string;
//   type: "Anime" | "TV Show";
//   totalEpisodes: number;
//   watchedEpisodes: number;
// };

// export default function Component() {
//   const [shows, setShows] = useState<Show[]>([
//     {
//       id: 1,
//       title: "Attack on Titan",
//       type: "Anime",
//       totalEpisodes: 75,
//       watchedEpisodes: 50,
//     },
//     {
//       id: 2,
//       title: "Stranger Things",
//       type: "TV Show",
//       totalEpisodes: 34,
//       watchedEpisodes: 34,
//     },
//     {
//       id: 3,
//       title: "My Hero Academia",
//       type: "Anime",
//       totalEpisodes: 113,
//       watchedEpisodes: 100,
//     },
//     {
//       id: 4,
//       title: "Breaking Bad",
//       type: "TV Show",
//       totalEpisodes: 62,
//       watchedEpisodes: 62,
//     },
//   ]);

//   const [newShow, setNewShow] = useState({
//     title: "",
//     type: "Anime" as const,
//     totalEpisodes: 0,
//   });

//   const addShow = () => {
//     if (newShow.title && newShow.totalEpisodes > 0) {
//       setShows([
//         ...shows,
//         { ...newShow, id: shows.length + 1, watchedEpisodes: 0 },
//       ]);
//       setNewShow({ title: "", type: "Anime", totalEpisodes: 0 });
//     }
//   };

//   const markEpisodeWatched = (id: number) => {
//     setShows(
//       shows.map((show) =>
//         show.id === id && show.watchedEpisodes < show.totalEpisodes
//           ? { ...show, watchedEpisodes: show.watchedEpisodes + 1 }
//           : show
//       )
//     );
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold text-center mb-8">
//         My Anime & TV Show Tracker
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
//         {shows.map((show) => (
//           <Card key={show.id}>
//             <CardHeader>
//               <CardTitle>{show.title}</CardTitle>
//               <CardDescription>
//                 <Badge
//                   variant={show.type === "Anime" ? "default" : "secondary"}
//                 >
//                   {show.type}
//                 </Badge>
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <p>
//                 Episodes: {show.watchedEpisodes} / {show.totalEpisodes}
//               </p>
//               <progress
//                 value={show.watchedEpisodes}
//                 max={show.totalEpisodes}
//                 className="w-full [&::-moz-progress-bar]:bg-primary [&::-webkit-progress-value]:bg-primary [&::-webkit-progress-bar]:bg-secondary"
//               />
//             </CardContent>
//             <CardFooter>
//               <Button
//                 onClick={() => markEpisodeWatched(show.id)}
//                 disabled={show.watchedEpisodes === show.totalEpisodes}
//               >
//                 {show.watchedEpisodes === show.totalEpisodes ? (
//                   <CheckCircle className="mr-2 h-4 w-4" />
//                 ) : (
//                   <PlusCircle className="mr-2 h-4 w-4" />
//                 )}
//                 {show.watchedEpisodes === show.totalEpisodes
//                   ? "Completed"
//                   : "Mark Episode Watched"}
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Add New Show</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="flex flex-col space-y-4">
//             <Input
//               placeholder="Show title"
//               value={newShow.title}
//               onChange={(e) =>
//                 setNewShow({ ...newShow, title: e.target.value })
//               }
//             />
//             <select
//               className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//               value={newShow.type}
//               onChange={(e) =>
//                 setNewShow({
//                   ...newShow,
//                   type: e.target.value as "Anime" | "TV Show",
//                 })
//               }
//             >
//               <option value="Anime">Anime</option>
//               <option value="TV Show">TV Show</option>
//             </select>
//             <Input
//               type="number"
//               placeholder="Total episodes"
//               value={newShow.totalEpisodes || ""}
//               onChange={(e) =>
//                 setNewShow({
//                   ...newShow,
//                   totalEpisodes: parseInt(e.target.value) || 0,
//                 })
//               }
//             />
//           </div>
//         </CardContent>
//         <CardFooter>
//           <Button onClick={addShow}>
//             <PlusCircle className="mr-2 h-4 w-4" />
//             Add Show
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }
