// firebase db init
const db = firebase.firestore();
// modal 닫기를위한 선택자
let modalcloser = document.querySelector('.modalcontainer');
// task 상태 class init
const taskDoc = document.querySelector('#modaltxt');
const stateSun = document.querySelector('#sunny');
const stateWater = document.querySelector('#water');
const stateVita = document.querySelector('#vita');
const oftenCheck = document.querySelector('#oftenTaskCheck');
const addbtn = document.querySelector('.addbtn')
// task db 보내기

addbtn.addEventListener('click', ()=> {
    let taskStateName = document.querySelector('input[name="state"]:checked').id; 
    db.collection('task')
    .add({
        taskname : taskDoc.value,
        taskstate : taskStateName,
        oftentask : oftenCheck.checked
    })
    .then(()=> {
        modalcloser.style.display = 'none';
    })
})

// task db 받아오기
function getDB(){
    db.collection('task').get().then((db)=>{
        db.forEach((taskDB)=>{
          console.log(taskDB.data())
        })
      })
}


