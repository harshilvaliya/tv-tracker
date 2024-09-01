"use client";

import { useState } from "react";
import { PlusCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Show } from "@/types/show";

type ShowCardProps = {
  show: Show;
};

export default function ShowCard({ show: initialShow }: ShowCardProps) {
  const [show, setShow] = useState(initialShow);

  const markEpisodeWatched = async () => {
    if (show.watchedEpisodes < show.totalEpisodes) {
      const updatedShow = {
        ...show,
        watchedEpisodes: show.watchedEpisodes + 1,
      };
      const response = await fetch("/api/shows", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedShow),
      });
      if (response.ok) {
        setShow(updatedShow);
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{show.title}</CardTitle>
        <CardDescription>
          <Badge variant={show.type === "Anime" ? "default" : "secondary"}>
            {show.type}
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Episodes: {show.watchedEpisodes} / {show.totalEpisodes}
        </p>
        <progress
          value={show.watchedEpisodes}
          max={show.totalEpisodes}
          className="w-full [&::-moz-progress-bar]:bg-primary [&::-webkit-progress-value]:bg-primary [&::-webkit-progress-bar]:bg-secondary"
        />
      </CardContent>
      <CardFooter>
        <Button
          onClick={markEpisodeWatched}
          disabled={show.watchedEpisodes === show.totalEpisodes}
        >
          {show.watchedEpisodes === show.totalEpisodes ? (
            <CheckCircle className="mr-2 h-4 w-4" />
          ) : (
            <PlusCircle className="mr-2 h-4 w-4" />
          )}
          {show.watchedEpisodes === show.totalEpisodes
            ? "Completed"
            : "Mark Episode Watched"}
        </Button>
      </CardFooter>
    </Card>
  );
}
