const screen2 = document.querySelector('#questions');
const screen3 = document.querySelector('#result');
const questionBlocks = document.querySelectorAll('.question-block');
let qBlock1 = questionBlocks[0];
let qBlock2 = questionBlocks[1];
let qBlock3 = questionBlocks[2];
let qBlock4 = questionBlocks[3];
let qBlock5 = questionBlocks[4]

//input of price
let priceInput = document.querySelector('#price');
qBlock4.children[0].value = 0;

//getting checkboxes from last question page
let detail_checks = document.querySelectorAll('[data-desc]')







let obj ={};
obj.options = [];
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



qBlock4.children[1].addEventListener('click',()=> qBlock4.children[0].value = 0);

// plus buttons
qBlock4.children[2].addEventListener('click',plus)
qBlock4.children[3].addEventListener('click',plus)
qBlock4.children[5].addEventListener('click',plus)
qBlock4.children[6].addEventListener('click',plus)





//send buttons
qBlock4.children[7].addEventListener('click',question4);
qBlock4.children[8].addEventListener('click',skip);


//checkboxes
qBlock5.children[0].addEventListener('click',checkCheckbox);
qBlock5.children[1].addEventListener('click',checkCheckbox);
qBlock5.children[2].addEventListener('click',checkCheckbox);
qBlock5.children[3].addEventListener('click',checkCheckbox);
qBlock5.children[4].addEventListener('click',checkCheckbox);
qBlock5.children[5].addEventListener('click',checkCheckbox);
qBlock5.children[6].addEventListener('click',checkCheckbox);





//last page submit
qBlock5.children[7].addEventListener('click',question5);




function checkCheckbox(e){
    e.target.classList.toggle('checked');
    if(e.target.classList.contains('checked')){
        obj.options.push(e.target.dataset.desc);
    }
    else{
        obj.options.splice(obj.options.indexOf(e.target.dataset.desc),1);
    }
}





function plus(e){
    qBlock4.children[0].value = parseInt(qBlock4.children[0].value) + parseInt(e.target.value);
}


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
    


    nextQuestion();

    
}


function skip(){
    obj.q4 = '.';
    nextQuestion();
}




function question4(e){
    obj.q4 = ` за ${qBlock4.children[0].value}.&#9166;`;


    nextQuestion();

    
}

function question5(e){
    


   finalOchka();

    
}




function finalOchka(){

    screen2.classList.add('hide');
    screen3.classList.remove('hide');
    let a = document.querySelector('.result-textarea');
    a.innerHTML = `${obj.q1} ${obj.q2} в районі ${obj.q3}${obj.q4}
    ${obj.options.join('. ')}`;
}


























