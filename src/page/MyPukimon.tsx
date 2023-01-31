import { faHome } from "@fortawesome/free-solid-svg-icons";
import style from "./MyPukimon.module.sass";
import Header from "../components/common/Header";
import { useRecoilValue } from "recoil";
import { MyPukimonList } from "../store/store";
import { MyPukiList } from "../Pukidex";

const MyPukimon = () => {
  /** 저장되어있는 Pukimon array data */
  const dummyList = useRecoilValue(MyPukimonList);

  return (
    <>
      <Header path={"/"} faIcon={faHome} isHome={false} />
      <div>마이페이지</div>
      <div>
        <h1>나의 푸키몬 리스트</h1>
        <div className={style.MyPukimon}>
          {dummyList.map((items: MyPukiList, i) => {
            const imgURL = items.img;
            return (
              <div key={i} className={style.MyPukimonBlock}>
                <div>
                  no. {items.id} {items.name} | {items.genera}
                </div>
                <div>
                  <img src={imgURL} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyPukimon;
