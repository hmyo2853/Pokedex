import { PokeIndexData } from "../Pokedex";

interface Props {
  info: PokeIndexData;
}

const Pokedata = ({ info }: Props) => {
  console.log(info);
  return (
    <>
      <ul>
        <li>{info.id}</li>
        <li>{info.name}</li>
        {info.state.map((items) => {
          <li>
            {items.state.name} : {items.base_stat}, {items.effort}
          </li>;
        })}
        {/* <span>{info.abilities[0]}</span> */}
        {/* <span>{info.abilities[0]}</span> */}
      </ul>
    </>
  );
};

export default Pokedata;
