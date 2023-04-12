import {
  renderFrequentJaksimList,
  renderJaksimTodayList,
} from "./helper/JaksimRender.js";
import { hideModal, showModal } from "./helper/ModalControl.js";
import { renderPot } from "./Pot/pot.js";
import { scoreCalc } from "./EvaluationToday/ScoreCalc.js";

const addjaksimTodayBtn = document.querySelector(".add_today_btn");
const modalCloseBtn = document.querySelector(".today_modal_close_bth");
const backdrop = document.querySelector(".backdrop");

renderFrequentJaksimList(); // 페이지 오픈시 자주쓰는 작심 리스트 렌더링
renderJaksimTodayList(); // 오늘의 작심 리스트 렌더링
renderPot();
scoreCalc();

/** 모달 컨트롤 **/
addjaksimTodayBtn.addEventListener("click", () => {
  showModal();
});
modalCloseBtn.addEventListener("click", hideModal); // 모달창 x버튼 눌러서 닫기
backdrop.addEventListener("click", hideModal); // 모달창 외부 백드롭 영역 눌러서 닫기
