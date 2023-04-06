let modalbtn = document.querySelector(".addTaskbtn");
let modalContainer = document.querySelector(".modalcontainer");
let modalClose = document.querySelector(".closebtn");
modalbtn.addEventListener("click", () => {
  modalbtn.classList.toggle("addTaskbtnClick");
  modalContainer.style.display = "unset";
});
modalClose.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

let test = "";
