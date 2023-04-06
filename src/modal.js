let modalbtn = document.querySelector(".addTaskbtn");
let modalContainer = document.querySelector('.modalcontainer');
let modalClose = document.querySelector('.closebtn');
let modal = document.querySelector('.modal')

modalbtn.addEventListener('mouseover', () => {
    modalbtn.classList.add('addTaskbtnClick');
});
modalbtn.addEventListener('mouseout', () => {
    modalbtn.classList.remove('addTaskbtnClick');
});


modalbtn.addEventListener('click', () => {
    modalContainer.style.display = 'unset';
});

modalClose.addEventListener('click', ()=> {
    modalContainer.style.display = 'none';
});

// modal 배경 눌렀을때 닫기기능 버그 존재 수정필요
// modalContainer.addEventListener('click' , (e) =>{
//     e.preventDefault()
//     if(e.target !== modal) modalContainer.style.display = 'none';
// } )