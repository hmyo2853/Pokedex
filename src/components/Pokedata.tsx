import { PokeIndexData } from "../Pokedex";

interface Props {
  info?: PokeIndexData;
}

const Pokedata = (params: Props) => {
  const { info } = params;

  if (!info) return <></>;

  return (
    <>
      <ul>
        <li>{info.id}</li>
        <li>{info.name}</li>
        {/* <span>{info.abilities[0]}</span> */}
        {/* <span>{info.abilities[0]}</span> */}
      </ul>
    </>
  );
};

export default Pokedata;
