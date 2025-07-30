import axios from "axios";
import type { Movie } from "../types/movie";

interface MovieSearchResponse {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}
const link:string = 'https://vercel-api-proxy-six-fawn.vercel.app/api/proxy';

export default async function getMovies(searchText: string) {
   
  const response = await axios.get<MovieSearchResponse>(link, {
    params: {
      source: 'tmdb',
      query: searchText,
      include_adult: false,
      language: 'en-US',
      page: 1
    },
  });

  return response.data;
}