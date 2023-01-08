import { useState, useEffect } from "react";
import { PokeName } from "./Pokedex";
import "./sass/App.sass";
import Pokedata from "./components/Pokedata";
import { useRecoilState } from "recoil";
import { setMainNumberState } from "./store/store";

const App = () => {
  const [_data, setData] = useState<PokeName[]>([]);
  const [loading, setLoading] = useState(false);
  const [randomNum, setRandomNum] = useRecoilState(setMainNumberState);
  console.log(randomNum);

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";

  const fetchPokemon = async (): Promise<PokeName[] | void> => {
    return fetch(URL).then(async (_res) => {
      setLoading(true);
      if (!_res.ok)
        throw new Error(`HTTP Error : status code is ${_res.status}`);
      const _json = await _res.json();
      const _object = _json.results as PokeName[];
      setData(_object);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) return <strong>Loading...</strong>;
  return (
    <>
      <Pokedata info={_data} />
    </>
  );
};

export default App;
