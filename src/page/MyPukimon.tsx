import { faHome } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/common/Header";

const MyPukimon = () => {
  return (
    <>
      <Header path={"/"} faIcon={faHome} isHome={false} />
      <div>마이페이지</div>
    </>
  );
};

export default MyPukimon;
