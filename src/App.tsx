import { useState, useEffect } from "react";
import { PokeIndexData } from "./Pokedex";
import "./sass/App.sass";
import Pokedata from "./components/Pokedata";
import { useRecoilState, useRecoilValue } from "recoil";
import { setMainNumberState, setTodaysPukimon } from "./store/store";
import { useQuery } from "react-query";

const App = () => {
  const [randomNumber, setRandomNumber] = useRecoilState(setMainNumberState);
  const isPukimonAppeared = useRecoilValue(setTodaysPukimon);

  // const URL = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";
  /** 일반 데이터 가져오기 */
  const randomPukimonURL = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

  /** 한국어 데이터 가져오기 */
  const randomPukomonFetchData = async (): Promise<PokeIndexData | void> => {
    const fetchKoNameURL = `https://pokeapi.co/api/v2/pokemon-species/${randomNumber}`;
    /** 정상적인 요청 응답 */
    return fetch(fetchKoNameURL).then(async (response) => {
      /** 응답 오류 처리 */
      if (!response.ok) return Promise.reject(`Error : ${response.status}`);

      /** 응답 결과 해석 */
      const randomPukimonJsonData = await response.json();

      return randomPukimonJsonData;
    });
  };

  /** react query fetch data of random pukimon */
  const { data, isLoading } = useQuery(
    "randomPukimon",
    randomPukomonFetchData,
    { enabled: isPukimonAppeared }
  );

  console.log(
    data,
    `https://pokeapi.co/api/v2/pokemon/${randomNumber}`,
    isPukimonAppeared
  );

  if (isLoading) return <strong>Loading...</strong>;

  return (
    <>
      {isPukimonAppeared ? (
        <>
          <h1>오늘은 푸키몬이 있는날</h1>
          <div>{data ? <Pokedata info={data} /> : null}</div>
        </>
      ) : (
        <h1>오늘은 푸키몬 없는날, 다음에 봐!</h1>
      )}
    </>
  );
};

export default App;
