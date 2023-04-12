import { getJaksimTodayList } from "../helper/JaksimTodayApi.js";

const task = document.querySelector("ul");
const score = document.querySelector(".score");

export async function scoreCalc() {
  const jaksimTodayList = await getJaksimTodayList();
  const perTask = 100 / jaksimTodayList.length;
  const completedJaksimList = jaksimTodayList.filter(
    (jaksim) => jaksim.isDone === true
  );

  // 2/3, 5/7
  const result = Math.round(perTask * completedJaksimList.length);
  if (completedJaksimList.length === 0) {
    score.innerHTML = "0점";
  } else {
    score.innerHTML = `${result}점`;
  }
}

task.addEventListener("click", scoreCalc);
