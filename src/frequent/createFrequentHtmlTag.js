// 하나의 작심 태그를 생성하는 함수

export const createFrequent = (item) => {
  const btn = document.createElement("button");
  btn.classList.add("frequent_button");
  btn.id = `frequent_button_${item.id}`;

  const tag = document.createElement("div");
  tag.classList.add("frequent_button_tag");
  tag.innerHTML = "#";

  const text = document.createElement("div");
  text.classList.add("frequent_text");
  text.innerHTML = item.content;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("frequent_delete_btn");
  deleteBtn.innerHTML = "X";

  btn.appendChild(tag);
  btn.appendChild(text);
  btn.appendChild(deleteBtn);

  // type에 따른 색상 결정
  if (item.type === "물") {
    btn.style.borderColor = "#B3FFE3";
    btn.style.backgroundColor = "#B3FFE3";
  }

  if (item.type === "태양") {
    btn.style.borderColor = "#FFEAB3";
    btn.style.backgroundColor = "#FFEAB3";
  }

  if (item.type === "영양") {
    btn.style.borderColor = "#FFE2F4";
    btn.style.backgroundColor = "#FFE2F4";
  }

  return btn;
};
