import { useEffect } from "react";
import "./sass/App.sass";

const App = () => {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
  const fetchPokemon = async () => {
    return fetch(URL).then(async (_res) => {
      if (!_res.ok)
        throw new Error(`HTTP Error : status code is ${_res.status}`);
      const _json = await _res.json();
      const _object = _json.results;
      console.log(_object);
    });
  };
  useEffect(() => {
    fetchPokemon();
  });
  return <></>;
};

export default App;
