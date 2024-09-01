import { NextResponse } from 'next/server'
import type { Show } from '@/types/show'

let shows: Show[] = [
  { id: 1, title: "Attack on Titan", type: "Anime", totalEpisodes: 75, watchedEpisodes: 50 },
  { id: 2, title: "Stranger Things", type: "TV Show", totalEpisodes: 34, watchedEpisodes: 34 },
  { id: 3, title: "My Hero Academia", type: "Anime", totalEpisodes: 113, watchedEpisodes: 100 },
  { id: 4, title: "Breaking Bad", type: "TV Show", totalEpisodes: 62, watchedEpisodes: 62 },
]

export async function GET() {
  return NextResponse.json(shows)
}

export async function POST(request: Request) {
  const newShow: Show = await request.json()
  newShow.id = shows.length + 1
  shows.push(newShow)
  return NextResponse.json(newShow, { status: 201 })
}

export async function PUT(request: Request) {
  const updatedShow: Show = await request.json()
  shows = shows.map(show => show.id === updatedShow.id ? updatedShow : show)
  return NextResponse.json(updatedShow)
}