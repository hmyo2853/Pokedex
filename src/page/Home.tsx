import { PukiIndexData } from "../Pukidex";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  setMainNumberState,
  getTodaysPukimon,
  getTodaysPukimonImg,
} from "../store/store";
import { useQuery } from "react-query";
import Header from "../components/common/Header";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import PukimonData from "../components/pukimondata/PukimonData";

const Home = () => {
  const [randomNumber, setRandomNumber] = useRecoilState(setMainNumberState);
  const ImgURL = useRecoilValue(getTodaysPukimonImg);
  const isPukimonAppeared = useRecoilValue(getTodaysPukimon);

  /** ko en name, description data fetch*/
  const randomPukimonFetchData = async (): Promise<PukiIndexData | void> => {
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

  /** 00시라면 true, 아니라면 false */
  console.log(String(today).split(" ")[4] === "00:00:00");

  /**
   * 1. 현재 날짜를 가져온다
   * 2. 현재 날짜가 기존에 저장되어있는 날짜와 다르다면 randomnumber를 새로 가져온다
   * 3. 현재 날짜가 기존에 저장되어있는 날짜와 같다면 기존 rsndomnumber를 사용한다
   */

  /** react query fetch data of random pukimon's name, description */
  const { data: _nameData, isLoading: _nameLoading } = useQuery(
    "randomPukimonFetchData",
    randomPukimonFetchData,
    { enabled: isPukimonAppeared }
  );

  if (_nameLoading) return <strong>Loading...</strong>;

  return (
    <>
      <Header path={"/mypukimon"} faIcon={faBars} isHome={true} />
      {isPukimonAppeared ? (
        <>
          <div>{_nameData ? <PukimonData info={_nameData} /> : null}</div>
          <img src={ImgURL} style={{ width: "400px" }} />
        </>
      ) : (
        <h1>오늘은 푸키몬 없는날, 다음에 봐!</h1>
      )}
    </>
  );
};

export default Home;
