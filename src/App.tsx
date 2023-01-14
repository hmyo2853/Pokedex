import { useState, useEffect } from "react";
import { PokeIndexData } from "./Pokedex";
import "./sass/App.sass";
import Pokedata from "./components/Pokedata";
import { useRecoilState } from "recoil";
import { setMainNumberState } from "./store/store";
import { useQuery } from "react-query";

const App = () => {
  const [randomNum, setRandomNum] = useRecoilState(setMainNumberState);

  const randomPukimonURL = `https://pokeapi.co/api/v2/pokemon/${randomNum}`;

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";

  const randomPukomonFetchData = async (): Promise<PokeIndexData | void> => {
    /** 요청 응답 */
    return fetch(randomPukimonURL).then(async (response) => {
      /** 응답 오류 처리 */
      if (!response.ok) return Promise.reject(`Error : ${response.status}`);

      /** 응답 결과 해석 */
      const randomPukimonJsonData = await response.json();

      return randomPukimonJsonData;
    });
  };

  /** react query fetch data of random pukimon */
  const { data, isLoading } = useQuery("randomPukimon", randomPukomonFetchData);

  console.log(data);
  if (isLoading) return <strong>Loading...</strong>;

  return <>{/* <Pokedata info={_data} /> */}</>;
};

export default App;
