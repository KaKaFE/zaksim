// 길어서 처리된 텍스트 버튼에 hover 발생 시 전부 보여주는 기능

const frequent = document.getElementsByClassName("frequent_text");

// text-overflow로 인해 텍스트가 간략화되는지 확인하는 함수
const checkTextOveflow = (e) => {
  if (e.target.clientWidth >= e.target.scrollWidth) {
    return false;
  }

  return true;
};

const getDetailFromHover = (e) => {
  // text-overflow가 발생하지 않은 컴포넌트라면 기능 정지
  if (!checkTextOveflow(e)) {
    return;
  }

  const detailModal = document.getElementById("frequent_detail_modal");

  const parentId = e.target.parentNode.id;
  const parentBtn = document.getElementById(parentId);

  const text = e.target.innerText;

  const div = document.createElement("div");
  div.innerHTML = text;
  div.classList.add("frequent_detail");
  div.id = `frequent_detail_${parentId}`;

  div.style.backgroundColor = parentBtn.style.backgroundColor;
  div.style.borderColor = parentBtn.style.borderColor;

  detailModal.appendChild(div);

  detailModal.style.top = `${parentBtn.getBoundingClientRect().top + 25}px`;
  detailModal.style.left = `${parentBtn.getBoundingClientRect().left + 20}px`;
};

const clearDetailFromHover = (e) => {
  if (!checkTextOveflow(e)) {
    return;
  }

  const parentId = e.target.parentNode.id;
  const childDiv = document.getElementById(`frequent_detail_${parentId}`);

  const detailModal = document.getElementById("frequent_detail_modal");
  detailModal.removeChild(childDiv);
};

export const addEventToEachFrequent = () => {
  // 이벤트 등록
  for (let i = 0; i < frequent.length; i++) {
    // 마우스가 올려졌을 때
    frequent[i].addEventListener("mouseover", getDetailFromHover);

    // 마우스가 나갔을 때
    frequent[i].addEventListener("mouseout", clearDetailFromHover);
  }
};
