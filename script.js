const screen2 = document.querySelector('#questions');
const screen3 = document.querySelector('#result');
const questionBlocks = document.querySelectorAll('.question-block');
let qBlock1 = questionBlocks[0];
let qBlock2 = questionBlocks[1];
let qBlock3 = questionBlocks[2];
let obj ={};
let counter = 0;

//next question block on click

function nextQuestion(){
    counter++
    questionBlocks.forEach((qblock,idx)=>{
        qblock.classList.remove('active');
        if(idx == counter){
            qblock.classList.add('active');
        }
    })
}





qBlock1.children[0].addEventListener('click',question1);
qBlock1.children[1].addEventListener('click',question1);


qBlock2.children[0].addEventListener('click',question2);
qBlock2.children[1].addEventListener('click',question2);
qBlock2.children[2].addEventListener('click',question2);
qBlock2.children[3].addEventListener('click',question2);
qBlock2.children[4].addEventListener('click',question2);
qBlock2.children[5].addEventListener('click',question2);



qBlock3.children[0].addEventListener('click',question3);
qBlock3.children[1].addEventListener('click',question3);
qBlock3.children[2].addEventListener('click',question3);
qBlock3.children[3].addEventListener('click',question3);
qBlock3.children[4].addEventListener('click',question3);
qBlock3.children[5].addEventListener('click',question3);
qBlock3.children[6].addEventListener('click',question3);
qBlock3.children[7].addEventListener('click',question3);


function question1(e){
    obj.q1 = e.target.value;

    nextQuestion()
}

function question2(e){
    obj.q2 = e.target.value;

    nextQuestion()
}

function question3(e){
    obj.q3 = e.target.value;


    screen2.classList.add('hide')

    finalOchka()
}


function finalOchka(){

    screen2.classList.add('hide');
    screen3.classList.remove('hide');
    let a = document.querySelector('.result-textarea');
    a.innerHTML = `${obj.q1} ${obj.q2} в районі ${obj.q3}`;
}


// let a = document.querySelector('.result-textarea')
// a.innerHTML = `Здам в оренду двокімнатну квартиру в районі 12 школи за 5500 грн
// Для сім’ї. На довгий термін. 
// Квартира тепла та затишна, поруч є все необхідне для комфортного проживання, магазини, супермаркети.`

























