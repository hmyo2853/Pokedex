import { atom, selector } from "recoil";

export const mainNumberState = atom({
  key: "mainNumber",
  default: 0,
});

// 랜덤 푸키먼 number get, set
export const setMainNumberState = selector({
  key: "setMainNumber",
  get: ({ get }) => {
    const number = get(mainNumberState) + Math.floor(Math.random() * 1154 + 1);
    if (1010 < number && number < 10001) {
      return 132;
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
