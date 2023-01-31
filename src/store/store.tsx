import { atom, selector } from "recoil";
import { MyPukiList, PukimonType } from "../Pukidex";

/** randompukimon random number state */
const mainNumberState = atom({
  key: "mainNumber",
  default: 0,
});

/** 랜덤으로 1~ 1154 까지의 숫자 가져오기*/
export const setMainNumberState = selector({
  key: "setMainNumber",
  get: ({ get }) => {
    const number = get(mainNumberState) + Math.floor(Math.random() * 1154 + 1);
    if (1010 < number && number < 10001) {
      return 0;
    }
    return number;
  },
  set: ({ set }, newValue) => {
    if (typeof newValue === "number") {
      set(mainNumberState, newValue);
    } else {
      return;
    }
  },
});

/** randompukimon not appeared 기본값 True(잡을 푸키몬이 있다)*/
const TodaysPukimon = atom({
  key: "TodaysPukimon",
  default: true,
});

export const getTodaysPukimon = selector({
  key: "getTodaysPukimon",
  get: ({ get }) => {
    const randomNumber = get(setMainNumberState);
    if (randomNumber === 0) {
      return false;
    }
    return true;
  },
});

/** pukimon img */
const TodaysPukimonImg = atom({
  key: "TodaysPukimonImg",
  default: "",
});

export const getTodaysPukimonImg = selector({
  key: "getTodaysPukimonImg",
  get: ({ get }) => {
    const randomNumber = get(setMainNumberState);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`;
  },
});

/** pukimon dummy list object */
export const MyPukimonList = atom<MyPukiList[]>({
  key: "MyPukimonList",
  default: [
    {
      name: "삐삐",
      id: 35,
      genera: "요정포켓몬",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    },
    {
      name: "썬더",
      id: 145,
      genera: "전기포켓몬",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    },
    {
      name: "도롱충이",
      id: 412,
      genera: "도롱이벌레포켓몬",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",
    },
    {
      name: "크레세리아",
      id: 488,
      genera: "초승달포켓몬",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
    },
    {
      name: "지그제구리",
      id: 263,
      genera: "앙증너구리포켓몬",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",
    },
  ],
});

/** pukimon type data fetch */
const pukimonType = atom({
  key: "pukimonType",
  default: {},
});

export const getPukimonFetchType = selector({
  key: "getPukimonFetchType",
  get: async ({ get }) => {
    const randomNumber = get(setMainNumberState);
    let typeData = get(pukimonType);
    await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then(
      async (response) => {
        /** error */
        if (!response.ok) return Promise.reject(`Error : ${response.status}`);
        const json = await response.json();
        typeData = json.types;
      }
    );
    return typeData as PukimonType[];
  },
});
