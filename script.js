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
    renderArchive()
    const archiveItems = document.querySelectorAll('.archive-textarea');
    archiveItems.forEach(item=>item.addEventListener('click',copyArea))
    toScreen(3)
    
}


//home button on questions
const homeButton = document.querySelector('[data-home]');
homeButton.addEventListener('click',toHome);


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
  
   //showing result
   let a = document.querySelector('.result-textarea');
    a.innerHTML = `${obj.q1} ${obj.q2} в районі ${obj.area} ${obj.price} ${obj.currency}.
    ${obj.options.join('. ')}.`
    
    //adding copy on click
    a.addEventListener('click',copyArea)


    //archive part
    //checking if archive exists
    if (localStorage.getItem('objectsDB')){
        //if archive exists
        let objectsDB = JSON.parse(localStorage.getItem('objectsDB'));
        objectsDB.push(obj)
        if (objectsDB.length > 5){
            objectsDB.shift();
        }

        localStorage.setItem('objectsDB',JSON.stringify(objectsDB));
    } else {
        // if archive is not exist
        let objectsDB = [];
        objectsDB.push(obj);
        localStorage.setItem('objectsDB',JSON.stringify(objectsDB));
    }



}


function copyArea(e){
    navigator.clipboard.writeText(e.target.innerHTML)
    .then(() => alert("Copied"))
}


//archive part
function renderArchive(){
    let title = document.querySelector('[data-arcTitle]');
    let arcDiv = document.querySelector('.inject-archive');
    let objectsDB = JSON.parse(localStorage.getItem('objectsDB')).reverse();


    if (objectsDB.length == 0){
        title.innerText = 'Немає записів в архіва';
        arcDiv.innerHTML = '>_<';
    } else {
        title.innerText = `В архіві ${objectsDB.length} записів`;
        let template ='';
        objectsDB.forEach(obj=>{
            template += `<div class="archive-textarea">
                            ${obj.q1} ${obj.q2} в районі ${obj.area} ${obj.price} ${obj.currency}.
                            ${obj.options.join('. ')}
                        </div>`

        })
        arcDiv.innerHTML = template;
    }



}
//back from archive
const backButtonArch = document.querySelector('.arrow-back-archive');
backButtonArch.addEventListener('click',toHome);






function toHome(){
    toScreen(0);
}


















let myWalletNumber = '5168 35'


