import { saveFrequentJaksim } from "../helper/FrequentJaksimApi.js";
import {
  renderFrequentJaksimList,
  renderJaksimTodayList,
} from "../helper/JaksimRender.js";
import { saveJaksimToday } from "../helper/JaksimTodayApi.js";
import { hideModal } from "../helper/ModalControl.js";
import { getFrequentJaksim } from "../helper/FrequentJaksimApi.js";

const waterfeatureBtn = document.querySelector("#water");
const sunfeatureBtn = document.querySelector("#sun");
const pillfeatureBtn = document.querySelector("#pill");
const featureInputEl = document.querySelector(".today_modal_color_check");
const modalSubmitBtn = document.querySelector(".today_modal_submit_btn");

// 물주기, 햇빛, 영양제 클릭에 따라 스타일을 변경하는 함수
const changeButtonStyle = (feature) => {
  if (feature === "water") {
    // background-color
    waterfeatureBtn.style.backgroundColor = "#adf2d9";
    sunfeatureBtn.style.backgroundColor = "";
    pillfeatureBtn.style.backgroundColor = "";

    // border
    waterfeatureBtn.style.border = "2px solid #adf2d9";
    sunfeatureBtn.style.border = "";
    pillfeatureBtn.style.border = "";
  } else if (feature === "sun") {
    waterfeatureBtn.style.backgroundColor = "";
    sunfeatureBtn.style.backgroundColor = "#f2dfac";
    pillfeatureBtn.style.backgroundColor = "";

    waterfeatureBtn.style.border = "";
    sunfeatureBtn.style.border = "2px solid #f2dfac";
    pillfeatureBtn.style.border = "";
  } else if (feature === "pill") {
    waterfeatureBtn.style.backgroundColor = "";
    sunfeatureBtn.style.backgroundColor = "";
    pillfeatureBtn.style.backgroundColor = "#f2d8e8";

    waterfeatureBtn.style.border = "";
    sunfeatureBtn.style.border = "";
    pillfeatureBtn.style.border = "2px solid #f2d8e8";
  }
};

/* 라디오버튼 선택 핸들러 함수 */
const featureClickHandler = (feature) => {
  waterfeatureBtn.classList.remove("clicked");
  sunfeatureBtn.classList.remove("clicked");
  pillfeatureBtn.classList.remove("clicked");
  // 각 버튼들 clicked css 초기화

  if (feature === "water") {
    waterfeatureBtn.classList.add("clicked");
    changeButtonStyle(feature);
  } else if (feature === "sun") {
    sunfeatureBtn.classList.add("clicked");
    changeButtonStyle(feature);
  } else if (feature === "pill") {
    pillfeatureBtn.classList.add("clicked");
    changeButtonStyle(feature);
  }
  // 매개변수로 받은 특징 clicked css 활성화

  featureInputEl.setAttribute("value", feature);
  // 클릭한 특징 부모 div value에 저장
};

// 작심 모달 제출 핸들러 함수
const modalSubmitHandler = async (e) => {
  e.preventDefault();

  // 작심 데이터 객체에 필요한 value 값들 받아옴(작심내용, 작심특징, 작성날짜)
  const jaksimInputValue = document.querySelector(".today_modal_input").value;
  const jaksimfeatureValue = featureInputEl.getAttribute("value");
  const jaksimDate = new Date().toLocaleDateString();
  const frequentJaksimIsChecked =
    document.getElementById("frequent_add_check").checked; // 자주쓰는 작심에도 추가할건지 체크 여부

  // 작심 input 유효성 검사 (빈칸 제출)
  if (jaksimInputValue === "") {
    alert("작심 내용을 입력해주세요.");
    return;
  }

  // 물주기, 햇빛, 영양제 선택 검사
  if (jaksimfeatureValue === "") {
    alert("물주기, 햇빛, 영양제 중 하나를 선택해주세요.");
    return;
  }

  // 자주 쓰는 작심에도 추가하는 경우
  // 자주 쓰는 작심에 동일한 문자열이 있는지 검사
  const frequentList = await getFrequentJaksim();

  const compareList = frequentList.filter(
    (item) => item.jaksim === jaksimInputValue
  );

  if (compareList.length !== 0) {
    alert("이미 등록된 자주 쓰는 작심입니다.");
    return;
  }

  /* 위에서 받아온 value 값들 데이터 객체에 저장 (완료여부인 isDone 추가)
   오늘의 작심과 자주쓰는 작심의 필요한 데이터가 달라서 따로저장 */
  const jaksimTodayData = {
    jaksim: jaksimInputValue,
    feature: jaksimfeatureValue,
    date: jaksimDate,
    isDone: false,
  };

  const frequentJaksimData = {
    jaksim: jaksimInputValue,
    feature: jaksimfeatureValue,
  };

  // 체크 여부에따라 양쪽 or 한쪽에 fetch
  if (frequentJaksimIsChecked) {
    await saveJaksimToday(jaksimTodayData); // 오늘의작심을 fetch하는 함수에 데이터객체를 인자로 전달
    await saveFrequentJaksim(frequentJaksimData); // 자주쓰는작심을 fetch하는 함수에 데이터객체를 인자로 전달

    await renderJaksimTodayList();
    await renderFrequentJaksimList();
    // 이후 오늘의 작심, 자주쓰는 작심 리스트 리렌더링
  } else {
    await saveJaksimToday(jaksimTodayData);
    await renderJaksimTodayList();
  }
  document.querySelector(".today_modal_input").value = null; // fetch완료 후 input창 비우기

  hideModal();
};

waterfeatureBtn.addEventListener("click", () => {
  featureClickHandler("water");
});
sunfeatureBtn.addEventListener("click", () => {
  featureClickHandler("sun");
});
pillfeatureBtn.addEventListener("click", () => {
  featureClickHandler("pill");
});
modalSubmitBtn.addEventListener("click", modalSubmitHandler);
