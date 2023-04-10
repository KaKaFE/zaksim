import { getFrequent } from "./frequentAPI.js";
import { getTodayList } from "./todayAPI.js";

/**  자주쓰는 작심 리스트 생성 함수  **/
export const renderFrequentList = async () => {
  const frequentUl = document.querySelector(".frequent_ul");

  const frequentData = await getFrequent();
  //fetch로 받아온 데이터를 frequentJaksimData에 담음

  const frequentList = [];

  frequentData.map((data) =>
    frequentList.push(
      // frequentJaksimList 빈배열에 받아온 데이터를 HTML 엘리먼트로 넣음
      `<li id="${data.id}" class="frequent_li ${data.feature}">
          <div class="frequent_click_area">
              <span>${data.jaksim}</span>
          </div>
          <div class="delete_frequent_btn">
              X
          </div>
       </li>`
    )
  );

  frequentUl.innerHTML = frequentList.join("");
  // 만들어진 HTML 엘리먼트를 frequentJaksim ul에 넣음

  return frequentList;
};

/**  오늘의 작심 리스트 생성 함수  **/
export const renderTodayList = async () => {
  const todayUl = document.querySelector(".today_ul");

  const todayData = await getTodayList();

  const todayList = [];

  todayData.map((data) => {
    // 함수 인자로 받아온 오늘의작심 객체배열 데이터를 map함수를 통해
    todayList.push(
      // jaksimTodayList라는 빈배열에 HTML 엘리먼트로 넣음
      `<li id="${data.id}" class="today_li ${data.isDone ? "done" : ""}">
          <div class="today_click_area">
             <div class="today_checkbox ${data.feature}">
                ${data.isDone ? "ㅇ" : ""}
             </div>
             <span>${data.jaksim}</span>
          </div>
          <div class="delete_today_btn">
             X
          </div>
       </li>`
    );
  });

  todayUl.innerHTML = todayList.join("");
  // 만들어진 HTML 엘리먼트를 jaksimToday ul에 넣음
};
