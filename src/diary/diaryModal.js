import { Modal } from "./ModalControl.js";

// 일기 모달 클래스 생성
const diaryModal = new Modal();
// 일기 추가 버튼
const diaryBtn = document.getElementById("add_diary_btn");
// 모달창 내 일기 추가 버튼
const submitDiary = document.getElementById("diary_submit");
// 일기 표시 영역
const diaryOutputBox = document.getElementById("diary_txt");
const backdrop = document.querySelector(".backdrop");

// 모달창 외부 백드롭 영역 눌러서 닫기
// backdrop.addEventListener('click', () => {
//   diaryModal.hide();
// });

diaryBtn.addEventListener("click", (e) => {
  e.preventDefault();

  diaryModal.show();
});

submitDiary.addEventListener("click", (e) => {
  e.preventDefault();

  const diaryInput = document.getElementById("diary_modal_input").value;

  // 입력된 내용이 없을 경우 경고창 출력
  if (diaryInput.length === 0) {
    alert("일기를 입력해주세요.");
  } else {
    // 일기 입력 시 모달창을 숨기고, 일기 표시 영역에 입력 내용 반영
    // 일기 추가 버튼, 모달창 내 일기 추가 버튼을 수정 버튼으로 바꿈
    diaryModal.hide();
    diaryOutputBox.innerText = diaryInput;
    submitDiary.innerText = "수정";
    diaryBtn.innerText = "수정";
  }
});
