import { PropsWithChildren } from "react";

interface Pops {
  value: string;
  key: number;
}

const Pokedata = (props: PropsWithChildren<Pops>) => {
  return <li key={props.key}>{props.value}</li>;
};

export default Pokedata;
