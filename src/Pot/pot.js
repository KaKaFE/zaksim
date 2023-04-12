import { getJaksimTodayList } from "../helper/JaksimTodayApi.js";

// 총 % 합
let total = 0;

export const renderPot = async () => {
  const waterProcessivity = document.querySelector(".water_processivity");
  const sunProcessivity = document.querySelector(".sun_processivity");
  const pillProcessivity = document.querySelector(".pill_processivity");

  const sunGoalNumber = 3;
  const waterGoalNumber = 3;
  const pillGoalNumber = 3;

  const jaksimTodayList = await getJaksimTodayList();
  const completedJaksimList = jaksimTodayList.filter(
    (jaksim) => jaksim.isDone === true
  );

  const completedJaksimByFeature = (feature) =>
    completedJaksimList.filter((jaksim) => jaksim.feature === feature);

  const completedWaterNumber = completedJaksimByFeature("water").length;
  const completedSunNumber = completedJaksimByFeature("sun").length;
  const completedPillNumber = completedJaksimByFeature("pill").length;

  waterProcessivity.innerText =
    Math.floor((completedWaterNumber / waterGoalNumber) * 100) + "%";

  sunProcessivity.innerText =
    Math.floor((completedSunNumber / sunGoalNumber) * 100) + "%";

  pillProcessivity.innerText =
    Math.floor((completedPillNumber / pillGoalNumber) * 100) + "%";

  total =
    parseInt(waterProcessivity.innerText) +
    parseInt(sunProcessivity.innerText) +
    parseInt(pillProcessivity.innerText);

  growPlant();
};

const div = document.getElementsByClassName("pot_content")[0];

// 총 6단계에 걸쳐 plant 표시
// %의 총합 : 33, 66, 100, 166, 233, 300
// 개수 총합 : 1, 2, 3, 5, 7, 9
const growPlant = () => {
  // 식물 png 파일 출처
  // https://kor.pngtree.com/freepng/cartoon-strawberry-plant-growth-process-decorative-pattern_4029768.html

  if (total === 33) {
    resetImgTag();
    makeImgTag(1);
  }

  if (total === 66) {
    resetImgTag();
    makeImgTag(2);
  }

  // 100이 아니고 99인 이유?
  // 물만 3번 달성한 경우 100이 되지만, 물 2번 영양 1번의 경우 각각 66, 33이므로 100이 되지 않게 된다.
  // 이후로도 마찬가지의 이유
  if (total >= 99 && total < 165) {
    resetImgTag();
    makeImgTag(3);
  }

  // 100,66,0 일 수도 있지만, 66,66,33 일 수도 있음. 따라서, 후자의 경우까지 포함되도록 범위 설정
  if (total >= 165 && total < 232) {
    resetImgTag();
    makeImgTag(4);
  }

  // 100,100,33일 수도 있지만, 100,66,66일 수도 있음.
  if (total >= 232 && total < 300) {
    resetImgTag();
    makeImgTag(5);
    div.style.top = "80px";
  }

  if (total >= 300) {
    resetImgTag();
    makeImgTag(6);
    div.style.top = "70px";
    congratulation();
  }
};

// img 태그를 리셋하는 함수
// 이전 데이터로 인한 plant 이미지를 제거하기 위함.
const resetImgTag = () => {
  // 전환 효과
  const img = document.getElementsByClassName("pot")[0];

  if (img === undefined) {
    return;
  }

  div.replaceChildren();
};

// total에 따른 plant 이미지를 보여주기 위한 함수
const makeImgTag = (level) => {
  const img = document.createElement("img");
  img.src = `./public/img/plant_level_${level}.png`;
  img.alt = `level ${level} plant`;
  img.classList.add("pot");

  div.appendChild(img);
};

// 300% 달성 시 이벤트
const congratulation = () => {
  const plant = document.getElementsByClassName("plant")[0];
  plant.style.boxShadow = "0px 0px 20px 8px #5ae4fc";
};
