// getting all question containers
const questionBlocks = document.querySelectorAll('.question-block');
//setting up basic object
let obj ={};
obj.options = [];
obj.currency = '';
let counter = 1;






//getting main screens of app
const screens = Array.from(document.querySelectorAll('[data-bigSCRN]'));
//function to travel to main screen(number of screen)
function toScreen(n){
    screens.forEach(screen=>screen.classList.add('hide'))
    screens[n].classList.remove('hide');
}





//getting checkboxes from last question page
let detail_checks = document.querySelectorAll('[data-desc]')



//setting up archive buttons
const archiveButtons = document.querySelectorAll('[data-archive]');
archiveButtons.forEach(btn=>btn.addEventListener('click',toArchive))

function toArchive(){
    toScreen(3)
}





//next question block on click

function nextQuestion(){
    counter++
    questionBlocks.forEach((qblock,idx)=>{
        qblock.classList.remove('active');
        if(idx == counter-1){
            qblock.classList.add('active');
        }
    })
}


function previous(){
    counter--
       
    if (counter == 0){
        toScreen(0);
    }
    
    if (counter >= 1){
       
        questionBlocks.forEach((qblock,idx)=>{
            qblock.classList.remove('active');
            if(idx == counter-1){
                qblock.classList.add('active');
            }
        })
    
    
    }
        
    



    
}
let backButton = document.querySelector('.arrow-back')

backButton.addEventListener('click',previous)


const constButtons= document.querySelectorAll('[data-counstruct]' );
constButtons.forEach(btn=>btn.addEventListener('click',construct))

function construct(){
    toScreen(1);
    counter = 0;
    nextQuestion();
}





// STEP 1
//getting buttons on first question page and adding event listeners
let qBlock1 = document.querySelectorAll('[data-step="1"]');
qBlock1.forEach(btn=>btn.addEventListener('click',question1))

// STEP 2
//getting buttons on second question page and adding event listeners
let qBlock2 = document.querySelectorAll('[data-step="2"]');
qBlock2.forEach(btn=>btn.addEventListener('click',question2))

// STEP 3
//getting buttons on 3rd page
let qBlock3 = document.querySelectorAll('[data-step="3"]');
let qBlock3a = document.querySelector('[data-step="3a"]');

//setting event listeners on buttons of 3rd page
qBlock3.forEach(btn=>btn.addEventListener('click',question3))
qBlock3a.addEventListener('click',question3custom);



// STEP 4
//div to display calc value
const costInput = document.querySelector('#cost-input');
costInput.innerText = 0;

// button to reset calculator
const xButton = document.querySelector('.red');
xButton.addEventListener('click',()=> costInput.innerText = 0);

// plus buttons
const mathButtons = document.querySelectorAll('[data-math]');
mathButtons.forEach(btn=>btn.addEventListener('click',plus))

//setting up sending number from div
const sendDivNumber = document.querySelector('[data-sendDivNumber]');
sendDivNumber.addEventListener('click',question4);


//setting up skipping number
const numberSkip = document.querySelector('[data-numberSkip]');
numberSkip.addEventListener('click',skip);


//setting up currency buttons
const currencyButtons = document.querySelectorAll('[data-currency]');
currencyButtons.forEach(btn=>btn.addEventListener('click',checkCurrency))

function checkCurrency(e){
    // currencyButtons.forEach(btn=>btn.classList.remove('checked'))
    e.target.classList.toggle('checked');
    currencyButtons.forEach(btn=>btn != e.target ? btn.classList.remove('checked') : null)
    if(e.target.classList.contains('checked')){
        obj.currency = (e.target.dataset.currency);
    }
    else{
        obj.currency = '';
    }
}







// STEP 5
//setting up checkboxes on question 5
let lastChecks = document.querySelectorAll('.dop-check');
lastChecks.forEach(check=>check.addEventListener('click',checkCheckbox))

//submit button for question 5
const resultButton = document.querySelector('[data-result]');
resultButton.addEventListener('click',question5);


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
    costInput.innerText = parseInt(costInput.innerText) + parseInt(e.target.value);
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
    obj.area = e.target.value;
    nextQuestion();    
}


function question3custom(){
    obj.area = document.querySelector('.custom-input-area').value;
    nextQuestion();
}


function skip(){
    obj.price = '.';
    nextQuestion();
}


function question4(e){
    obj.price = ` за ${costInput.innerText}`;
    nextQuestion();
}

function question5(e){
   toScreen(2);
   let a = document.querySelector('.result-textarea');
    a.innerHTML = `${obj.q1} ${obj.q2} в районі ${obj.area} ${obj.price} ${obj.currency}.
    ${obj.options.join('. ')}.`
    a.addEventListener('click',copyArea)
}


function copyArea(e){
    navigator.clipboard.writeText(e.target.innerHTML)
    .then(() => alert("Copied"))
}

























