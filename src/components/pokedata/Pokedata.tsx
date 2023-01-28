import { PokeIndexData } from "../../Pokedex";
import Button from "../common/Button";

interface Props {
  info?: PokeIndexData;
}

const Pokedata = (params: Props) => {
  console.log(params);
  const { info } = params;

  if (!info) return <></>;

  return (
    <>
      <div>no. {info.id}</div>
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
      <Button>오늘의 포켓몬을 잡는다.</Button>
    </>
  );
};

export default Pokedata;
