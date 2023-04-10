import { getTodayList } from "../helper/todayAPI.js";

export const renderPot = async () => {
  const waterProcessivity = document.querySelector(".water_processivity");
  const sunProcessivity = document.querySelector(".sun_processivity");
  const pillProcessivity = document.querySelector(".pill_processivity");

  const sunGoalNumber = 3;
  const waterGoalNumber = 3;
  const pillGoalNumber = 3;

  const todayList = await getTodayList();
  const completedList = todayList.filter(
    (jaksim) => jaksim.isDone === true
  );

  const completedByFeature = (feature) =>
    completedList.filter((jaksim) => jaksim.feature === feature);

  const completedWaterNumber = completedByFeature("water").length;
  const completedSunNumber = completedByFeature("sun").length;
  const completedPillNumber = completedByFeature("pill").length;

  waterProcessivity.innerText =
    Math.floor((completedWaterNumber / waterGoalNumber) * 100) + "%";

  sunProcessivity.innerText =
    Math.floor((completedSunNumber / sunGoalNumber) * 100) + "%";

  pillProcessivity.innerText =
    Math.floor((completedPillNumber / pillGoalNumber) * 100) + "%";
};
