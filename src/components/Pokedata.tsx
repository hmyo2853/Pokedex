import { PokeIndexData } from "../Pokedex";

interface Props {
  info?: PokeIndexData;
}

const Pokedata = (params: Props) => {
  const { info } = params;

  if (!info) return <></>;

  return (
    <>
      <span>no. {info.id}</span>
      <span>
        {info.names[2].name} ( {info.name} )
      </span>
    </>
  );
};

export default Pokedata;
