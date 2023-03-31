// 작심 삭제 기능

const deleteHandler = (e) => {
  deleteFrequent(e);
};

export const fetchDataForDelete = () => {
  // 이 함수가 첫 렌더링 이후 재호출 된다면, 작심이 추가된 상황이므로
  // 함수 하단에서 등록했던 이벤트를 삭제해줘야함.
  // 그래야지만 이벤트가 중복 등록 방지가 되어 에러를 막을 수 있음.

  const deleteBtn = Array.from(
    document.getElementsByClassName("frequent_delete_btn")
  );

  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", deleteHandler);
  }

  // for (let i = 0; i < deleteBtn.length; i++) {
  //   deleteBtn[i].removeEventListener("click", deleteHandler);
  // }
};

export const deleteFrequent = (event) => {
  const targetFrequent = event.target.parentNode;

  // localStorage에서 제거
  const currentData = JSON.parse(localStorage.getItem("JAKSIM"));

  const filteredData = currentData.filter(
    (data) => `frequent_button_${data.id}` !== targetFrequent.id
  );

  localStorage.setItem("JAKSIM", JSON.stringify(filteredData));

  // HTML 태그 제거
  const wantDeleteBtn = document.getElementById(targetFrequent.id);

  const targetParentNode = wantDeleteBtn.parentNode;
  // 그냥 제거할 때는 문제가 없는데, 추가 후 제거하면 null로 바뀜..
  // 게다가 제거하고 싶은 것이 콘솔에 두번 찍히게 됨. 왜지?
  // 의심되는 상황은 addEventListener가 두 번 등록되었기 때문에 deleteFrequent()를 두 번 실행한 것 같음
  // 그래서 지워지기 전 한번, 지워진 후 한번 실행이 되는거고
  // 후자의 경우 이미 사라진 요소를 탐색하기 때문에 에러가 발생하는 것임.
  // 이러한 이유로 새로 등록된 애들은 문제가 없지만, 기존에 존재하던 애들에 문제가 발생하게 됨.

  targetParentNode.removeChild(wantDeleteBtn);
};
