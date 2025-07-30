import SearchBar from "../SearchBar/SearchBar";
import "../../services/movieService";
import "./App.module.css";
import getMovies from "../../services/movieService";

export default function App() {
  const handleSearch = async (userSearch: string) => {
    const response = await getMovies(userSearch);

    console.log(userSearch);
    console.log(response);
  };
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
    </>
  );
}
