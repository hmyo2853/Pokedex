import { useState, useEffect } from "react";
import { PokeName } from "./Pokedex";
import "./sass/Pagination.sass";
import "./sass/App.sass";
import Pokedata from "./components/Pokedata";
import Pagination from "./components/Pagination";

const App = () => {
  const [_data, setData] = useState<PokeName[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState<number>(0); // start, end = 20 고정
  // data 크기
  const [_dataLength, setDataLength] = useState<number>(0);

  const [page, setPage] = useState<number>(1);

  // 한 페이지당 보여줄 data 갯수
  const listPerPage = 20;
  const totalPage = Math.ceil(_dataLength / listPerPage);

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";

  const fetchPokemon = async (): Promise<PokeName[] | void> => {
    return fetch(URL).then(async (_res) => {
      setLoading(true);
      if (!_res.ok)
        throw new Error(`HTTP Error : status code is ${_res.status}`);
      const _json = await _res.json();
      const _object = _json.results as PokeName[];
      setDataLength(_object.length);
      setData(_object);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchPokemon();
    console.log(_dataLength)
  }, []);

  if (loading) return <strong>Loading...</strong>;
  return (
    <>
      <Pokedata info={_data} />
    </>
  );
};

export default App;
