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
  const [totalPage, setTotalPage] = useState<number>(0);

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

  /** 총 페이지수 : Math.ceil(모든 전체 갯수 / 보여줄 갯수)
  화면에 보여질 페이지 한 줄 :  Math.ceil(현재 페이지 / 한 줄에 보여지는 페이지 수)
  화면에 그릴 첫 페이지 : 화면에 그릴 막 페이지 - ( 화면에 보여질 페이지 한 줄 - 1)
  화면에 그릴 막 페이지 : 현재 페이지 그룹 * 화면에 보여질 페이지 한 줄
  */

  // data 갯수
  const _totalCount = Math.ceil(_data.length / 20); // 20개를 한 화면에 보여줌

  if (_totalCount <= 20) return;

  setTotalPage(Math.ceil(_totalCount / 20)); //총 페이지수

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) return <strong>Loading...</strong>;
  return (
    <>
      <Pokedata info={_data} />
      <Pagination start={1} end={5} />
    </>
  );
};

export default App;
