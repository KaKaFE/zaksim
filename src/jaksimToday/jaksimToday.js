import { renderTodayList } from "../helper/render.js";
import {
  updateToday,
  deleteToday,
} from "../helper/todayAPI.js";
import { renderPot } from "../pot/pot.js";

// 오늘의 작심 li 클릭시 done클래스를 토글하여 체크 표시, 텍스트에 가로줄 생성 하는 함수
async function TodayClickHandler(e) {
  if (e.target.className.includes("today_click_area")) {
    const id = e.target.parentElement.id;
    let isDone;

    if (e.target.parentElement.classList[1] === "done") {
      isDone = false; // today_li 가 두번째 클래스로 done 가지고 있으면 클릭시 체크해제 되야함
    } else if (e.target.parentElement.classList[1] === undefined) {
      isDone = true; // today_li 가 두번째 클래스가 없으면 클릭시 체크가 되야함
    }

    await updateToday(id, isDone); // 선택한 li의 id와 done 데이터를 전달

    renderTodayList();
    renderPot();
  }
}

async function TodayCrossClickHandler(e) {
  if (e.target.className === "delete_today_btn") {
    const id = e.target.parentElement.id;
    const jaksim = e.target.parentElement.innerText;

    if (confirm(`정말 ${jaksim}를 삭제하시겠습니까?`)) {
      await deleteToday(id);
      renderTodayList();
      renderPot();
    } else {
      return;
    }
  }
}

document.addEventListener("click", TodayClickHandler);
document.addEventListener("click", TodayCrossClickHandler);
