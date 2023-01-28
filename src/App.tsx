import { PokeIndexData } from "./Pokedex";
import "./sass/App.sass";
import Pokedata from "./components/pokedata/Pokedata";
import { useRecoilState, useRecoilValue } from "recoil";
import { setMainNumberState, setTodaysPukimon } from "./store/store";
import { useQuery } from "react-query";

const App = () => {
  const [randomNumber, setRandomNumber] = useRecoilState(setMainNumberState);
  const isPukimonAppeared = useRecoilValue(setTodaysPukimon);

  /** ko en name, description data fetch*/
  const randomPukimonFetchData = async (): Promise<PokeIndexData | void> => {
    const fetchNameURL = `https://pokeapi.co/api/v2/pokemon-species/${randomNumber}`;
    /** 정상적인 요청 응답 */
    return fetch(fetchNameURL).then(async (response) => {
      /** 응답 오류 처리 */
      if (!response.ok) return Promise.reject(`Error : ${response.status}`);

      /** 응답 결과 해석 */
      const randomPukimonJsonData = await response.json();

      return randomPukimonJsonData;
    });
  };

  let today = new Date();

  console.log(String(today).split(" ")[4] === "00:00:00");

  /** react query fetch data of random pukimon's name, description */
  const { data: _nameData, isLoading: _nameLoading } = useQuery(
    "randomPukimonFetchData",
    randomPukimonFetchData,
    { enabled: isPukimonAppeared }
  );

  const ImgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`;

  if (_nameLoading) return <strong>Loading...</strong>;

  return (
    <>
      {isPukimonAppeared ? (
        <>
          <h1>오늘은 푸키몬이 있는날</h1>
          <div>{_nameData ? <Pokedata info={_nameData} /> : null}</div>
          <img src={ImgURL} />
        </>
      ) : (
        <h1>오늘은 푸키몬 없는날, 다음에 봐!</h1>
      )}
    </>
  );
};

export default App;
