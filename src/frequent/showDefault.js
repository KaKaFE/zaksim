// 초기 디폴트 작심 보여주기 기능
import { createFrequent } from "./createFrequentHtmlTag.js";
import { getDataFromLocalStorage } from "./getDataFromLocalStorage.js";

const btns = document.getElementsByClassName("frequent_default")[0];

export const showDefault = () => {
  const frequent = getDataFromLocalStorage();

  frequent.map((item) => {
    const btn = createFrequent(item);

    btns.appendChild(btn);
  });
};
