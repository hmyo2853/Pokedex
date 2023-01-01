import { useState, useEffect } from "react";
import { PokeName } from "./Pokedex";
import Pagination from "react-js-pagination";
import "./sass/Pagination.sass";
import "./sass/App.sass";

const App = () => {
  const [_data, setData] = useState<PokeName[]>([]);
  const [loading, setLoading] = useState(false);
  // 페이지 세팅
  const [page, setPage] = useState<number>(1);
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
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
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </>
  );
};

export default App;
