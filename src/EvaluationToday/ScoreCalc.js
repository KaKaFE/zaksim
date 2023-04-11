import { getJaksimTodayList } from "../helper/JaksimTodayApi.js";

const task = document.querySelector("ul");
const score = document.querySelector(".score");

export async function scoreCalc() {
  // const doneTasks = document.querySelectorAll(".today_li.done");
  const todoTasks = document.querySelectorAll(".today_li");
  const perTask = 100 / todoTasks.length;

  const jaksimTodayList = await getJaksimTodayList();
  const completedJaksimList = jaksimTodayList.filter(
    (jaksim) => jaksim.isDone === true
  );
  // console.log(completedJaksimList);

  // 2/3, 5/7
  const result = Math.round(perTask * completedJaksimList.length);
  if (completedJaksimList.length === 0) {
    score.innerHTML = "0점";
  } else {
    score.innerHTML = `${result}점`;
  }
}

task.addEventListener("click", scoreCalc);
