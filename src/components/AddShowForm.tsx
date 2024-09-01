"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Show } from "@/types/show";

export default function AddShowForm() {
  const [newShow, setNewShow] = useState<Omit<Show, "id">>({
    title: "",
    type: "Anime",
    totalEpisodes: 0,
    watchedEpisodes: 0,
  });

  const addShow = async () => {
    if (newShow.title && newShow.totalEpisodes > 0) {
      const response = await fetch("/api/shows", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newShow),
      });
      if (response.ok) {
        setNewShow({
          title: "",
          type: "Anime",
          totalEpisodes: 0,
          watchedEpisodes: 0,
        });
        // You might want to add some state update logic here to refresh the list of shows
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Show</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <Input
            placeholder="Show title"
            value={newShow.title}
            onChange={(e) => setNewShow({ ...newShow, title: e.target.value })}
          />
          <select
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={newShow.type}
            onChange={(e) =>
              setNewShow({
                ...newShow,
                type: e.target.value as "Anime" | "TV Show",
              })
            }
          >
            <option value="Anime">Anime</option>
            <option value="TV Show">TV Show</option>
          </select>
          <Input
            type="number"
            placeholder="Total episodes"
            value={newShow.totalEpisodes || ""}
            onChange={(e) =>
              setNewShow({
                ...newShow,
                totalEpisodes: parseInt(e.target.value) || 0,
              })
            }
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={addShow}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Show
        </Button>
      </CardFooter>
    </Card>
  );
}
