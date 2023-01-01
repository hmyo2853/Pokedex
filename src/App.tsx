import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Pokedata from "./components/Pokedata";
import { PokeName } from "./Pokedex";
import "./sass/App.sass";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
  const fetchPokemon = async (): Promise<PokeName[] | void> => {
    return fetch(URL).then(async (_res) => {
      if (!_res.ok)
        throw new Error(`HTTP Error : status code is ${_res.status}`);
      const _json = await _res.json();
      const _object = _json.results as PokeName[];
      return _object;
    });
  };
  const { data, isLoading } = useQuery("PokeName", fetchPokemon);

  console.log(data);
  if (isLoading) return <strong>Loading...</strong>;
  return (
    <ul>
      {data?.map((items, i) => (
        <Pokedata key={i} value={items.name} />
      ))}
    </ul>
  );
};

export default App;
