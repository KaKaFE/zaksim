class Modal {
  constructor() {
    this.modalEl = document.querySelector(".today_modal");
    this.backdropEl = document.querySelector(".backdrop");
  }

  show() {
    this.modalEl.style.display = "flex";
    this.backdropEl.style.display = "flex";

    // 모달 input - auto focus
    const input = document.getElementsByClassName("today_modal_input")[0];
    input.focus();
  }

  hide() {
    this.modalEl.style.display = "none";
    this.backdropEl.style.display = "none";

    // .clicked 초기화를 통해 어떤 버튼도 선택되지 않은 상태로 설정. CSS 초기화
    const clicked = document.getElementsByClassName("clicked")[0];

    // 아무것도 클릭하지 않고 모달을 닫는 경우에 대한 예외 처리
    if (clicked === undefined) {
      return;
    }

    clicked.style.backgroundColor = "";
    clicked.style.border = "";
    clicked.classList.remove("clicked");
  }
}

export const showModal = () => {
  new Modal().show();
};

export const hideModal = () => {
  new Modal().hide();
};
