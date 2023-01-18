import { PokeIndexData } from "../Pokedex";

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
        {info.genera.map((genera) => {
          if (genera.language.name === "ko") {
            return <div>{genera.genus}</div>;
          }
        })}
      </div>
    </>
  );
};

export default Pokedata;
