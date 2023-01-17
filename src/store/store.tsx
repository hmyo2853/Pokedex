import { atom, selector } from "recoil";

/** randompukimon random number state */
export const mainNumberState = atom({
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
export const TodaysPukimon = atom({
  key: "TodaysPukimon",
  default: true,
});

export const setTodaysPukimon = selector({
  key: "setTodaysPukimon",
  get: ({ get }) => {
    const randomNumber = get(setMainNumberState);
    if (randomNumber === 0) {
      return false;
    }
    return true;
  },
});
