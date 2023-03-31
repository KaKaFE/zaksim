// 자주 쓰는 작심 index.js

import { showDefault } from "./showDefault.js";
import { setDefaultToLocalStorage } from "./setDefaultToLocalStorage.js";
import { fetchDataForDelete } from "./deleteFrequent.js";
import { addEventToEachFrequent } from "./getDetailFromHover.js";

export const startFrequent = () => {
  // 디폴트 작심 설정
  setDefaultToLocalStorage();

  // 디폴트 작심 보여주기
  showDefault();

  // 마우스 hover 시 자주 쓰는 작심 확대 기능
  addEventToEachFrequent();

  fetchDataForDelete();
};
