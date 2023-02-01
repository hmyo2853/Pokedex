import { PukiIndexData, PukimonType } from "../../Pukidex";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

interface Props {
  info?: PukiIndexData;
  types?: PukimonType[];
}

const PukimonData = (params: Props) => {
  console.log(params.info);
  console.log(params.types);

  const { info, types } = params;

  const navigate = useNavigate();

  const goLogin = () => {
    /** exist user data */
    /**
     * if (user data === null) {
     * navigate("/signin")}
     * else {
     * navigate("/mypukimon")}
     */
    navigate("/SignIn");
  };
  if (!info || !types) return <></>;

  return (
    <div>
      <div>no. {info.id}</div>
      <div>
        타입 :
        {types.map((t, i) => {
          return <div key={i}>{t.type.name}</div>;
        })}
      </div>
      <div>
        {info.names.map((names, i) => {
          if (names.language.name === "ko") {
            return (
              <div key={i}>
                이름 : {names.name} ( {info.name} )
              </div>
            );
          }
        })}
        {info.genera.map((genera, i) => {
          if (genera.language.name === "ko") {
            return <div key={i}>{genera.genus}</div>;
          }
        })}
      </div>
      <div onClick={goLogin}>
        <Button>오늘의 포켓몬을 잡는다.</Button>
      </div>
    </div>
  );
};

export default PukimonData;
