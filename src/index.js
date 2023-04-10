import {
  renderFrequentList,
  renderTodayList,
} from "./helper/render.js";
import { hideModal, showModal } from "./helper/modal.js";
import { renderPot } from "./pot/pot.js";

const addBtn = document.querySelector(".add_btn");
const modalCloseBtn = document.querySelector(".today_modal_close_bth");
const backdrop = document.querySelector(".backdrop");

renderFrequentList(); // 페이지 오픈시 자주쓰는 작심 리스트 렌더링
renderTodayList(); // 오늘의 작심 리스트 렌더링
renderPot();

// 모달창 띄우기
addBtn.addEventListener("click", () => {
  showModal();
});

modalCloseBtn.addEventListener("click", hideModal); // 모달창 x버튼 눌러서 닫기
backdrop.addEventListener("click", hideModal); // 모달창 외부 백드롭 영역 눌러서 닫기
