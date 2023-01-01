import { PokeName } from "../Pokedex";

interface Props {
  info: PokeName[];
}

const Pokedata = ({ info }: Props) => {
  return (
    <>
      {info.map((items, i) => (
        <li key={i}>
          <span>{items.name}</span>
        </li>
      ))}
    </>
  );
};

export default Pokedata;
