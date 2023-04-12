let dbObj  = getDB();
let todayUl = document.querySelector(".todayContainer>ul");
let oftenUl = document.querySelector(".oTaskContainer>ul");

function taskrender () {
    for (obj of dbObj){
    let taskLi = document.createElement('li');
    taskLi.dataset.state = obj.taskstate;
    taskLi.textContent = obj.taskname;
    taskLi.dataset.often = obj.oftentask;
    console.log(typeof(taskLi.dataset.often))
        if(taskLi.dataset.often === 'true'){
            taskLi.classList.add('oTask');
            oftenUl.appendChild(taskLi);
            // taskLi.classList.remove('oTask')
            // taskLi.classList.add('task');
            // todayUl.appendChild(taskLi);
        }else{
            taskLi.classList.add('task');
            todayUl.appendChild(taskLi);
        }
    }      
}  

taskrender()


// document.addEventListener('DOMContentLoaded', function() {
//     taskrender();
// });

// oftentask
// : 
// true
// taskname
// : 
// "친구만나기"
// taskstate
// : 
// "sunny"

// 보통 작심 html 구조
/* <div class="todayContainer">
            <ul>
                <li class="task">
                    밥먹기
                </li>
                <li class="task">
                    산책 하기
                </li>
                <li class="task">
                    산책 하기
                </li>
                <li class="task">
                    헬스장
                </li>
            </ul>
        </div> */

// 자주쓰는 작심 html
/* <div class="oTaskContainer">
            <ul>
                <li class="oTask">
                    밥먹기
                </li>
                <li class="oTask">
                    밥먹기
                </li>
            </ul>
        </div> */