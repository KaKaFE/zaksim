function emojiClickHandler(e) {
  if (e.target.className === "emoji") {
    const selectedEmoji = document.querySelector(".selected_emoji");
    selectedEmoji.className = "emoji";
    e.target.className = "selected_emoji";
  }
}

document.addEventListener("click", emojiClickHandler);

const diaryParagraph = document.querySelector(".diary_paragraph");

function diaryParagrapthClickHandler(e) {
  let content = e.target.innerText;

  // 초기 p 태그 클릭 후 placeholder 삭제를 위한 분기 처리
  if (content === "클릭해서 작성하기.") {
    content = "";
  }

  document.querySelector(
    ".diary_content"
  ).innerHTML = `<textarea class="diary_textarea" placeholder="클릭해서 작성하기.">${content}</textarea>`;
  const diaryTextarea = document.querySelector(".diary_textarea");

  diaryTextarea.focus();
  diaryTextarea.addEventListener("focusout", diaryTextareaFocusoutHandler);
}

function diaryTextareaFocusoutHandler(e) {
  const content = e.target.value;
  document.querySelector(
    ".diary_content"
  ).innerHTML = `<p class ="diary_paragraph">${content}</p>`;

  const diaryParagraph = document.querySelector(".diary_paragraph");

  diaryParagraph.addEventListener("click", diaryParagrapthClickHandler);
}

diaryParagraph.addEventListener("click", diaryParagrapthClickHandler);

// // 오늘의 점수 입력
// const input = document.getElementsByClassName("score")[0];

// /**
//  * 숫자만 입력됐는지 판별
//  * @param {Event} event 이벤트 객체
//  * @returns {boolean} boolean : 숫자만 입력됐는지 판단
//  */
// function parseOnlyNumber(e) {
//   const text = e.target.value;

//   // 정규식 : 숫자를 제외한 모든 문자열 추출
//   const regex = /^[0-9]+$/;

//   if (!regex.test(text)) {
//     alert("숫자만 입력 가능합니다.");

//     // 입력값 초기화 및 auto focus
//     input.value = "";
//     input.focus();

//     return false;
//   }

//   return true;
// }

// /**
//  * 오늘의 점수 범위 제한 조건 판별
//  * @param {Event} 이벤트 객체
//  * @returns {boolean} boolean : 점수의 범위의 유효성
//  */
// function checkScoreRange(e) {
//   const score = parseInt(e.target.value);

//   if (score < 0 || score > 100) {
//     alert("0 ~ 100점만 입력 가능합니다.");

//     // 입력값 초기화 및 auto focus
//     input.value = "";
//     input.focus();

//     return false;
//   }

//   return true;
// }

// function addScoreStringFromInput(e) {
//   // 아무것도 입력하지 않고 focusout 했을 때, 불필요한 연산 진행 방지
//   if (e.target.value === "") {
//     return;
//   }

//   if (!parseOnlyNumber(e)) {
//     return;
//   }

//   if (!checkScoreRange(e)) {
//     return;
//   }

//   // input.value = `${e.target.value}점`;

//   // input 태그 숨김 처리
//   input.style.display = "none";

//   // span 태그 생성
//   const span = document.createElement("span");
//   span.classList.add("score_span");
//   span.innerText = `${e.target.value}점`;

//   span.addEventListener("click", updateScore);

//   const parentNode = e.target.parentNode;
//   parentNode.appendChild(span);
// }

// input.addEventListener("focusout", addScoreStringFromInput);

// // 점수 입력 후 span 상태에서의 동작
// function updateScore(e) {
//   const text = e.target.innerText;

//   const score = text.split("점")[0];

//   // span 태그 숨김
//   e.target.style.display = "none";

//   // input 태그 보이기
//   input.style.display = "block";
//   input.value = `${score}`;
//   input.focus();
// }
