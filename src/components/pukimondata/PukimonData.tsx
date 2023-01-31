import { PukiIndexData, PukimonType } from "../../Pukidex";

interface Props {
  info?: PukiIndexData;
  types?: PukimonType[];
}

const PukimonData = (params: Props) => {
  console.log(params.info);
  console.log(params.types);

  const { info, types } = params;

  if (!info || !types) return <>Loading....</>;

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
    </div>
  );
};

export default PukimonData;
