let modalbtn = document.querySelector(".addTaskbtn");
let modalContainer = document.querySelector('.modalcontainer');
let modalClose = document.querySelector('.closebtn');


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
