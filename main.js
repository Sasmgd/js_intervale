//1
let counter = 0;
let interval = setInterval(function () {
    if (counter === 10) {
        clearInterval(interval);

    }
    counter++
    console.log("hello")
}, 1000);
//2
const myTimeout = setTimeout(function () {
    console.log("Timeout Started");
}, 3000);
//3 4 5
let counterr = 1;
let circle = document.querySelector('.circle');
circle.style.backgroundColor = "blue";
let myTime = setTimeout(function () {
    let intervall = setInterval(function () {
        if (counterr === 30) {
            clearInterval(intervall);
        }
        else {
            circle.innerHTML = counterr;
            if (circle.innerHTML == 1) {
                circle.style.backgroundColor = "green"
            }
            else if (circle.innerHTML % 2 == 0) {
                circle.style.backgroundColor = "red"
            }
            else {
                circle.style.backgroundColor = "green"
            }
            counterr++
        }

    }, 1000)
}, 3000)
//6
let hours = 0;
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
hour.innerHTML = hours + " სთ :";
let hourinterval = setInterval(function () {
    if (hours === 25) {
        hours = 0;
        hour.innerHTML = hours + " სთ :";
    } else {
        hour.innerHTML = hours + " სთ :";
        hours++;
    }
}, 3600000)
let minutes = 0
minute.innerHTML = minutes + " წთ :";
let minuteinterval = setInterval(function () {
    if (minutes === 59) {
        minutes = 0;
        minute.innerHTML = minutes + " წთ :"
    } else {

        minutes++;
        minute.innerHTML = minutes + " წთ :"
    }
}, 60000)
let seconds = 0
second.innerHTML = 0 + " წმ";
let secondinterval = setInterval(function () {
    if (seconds === 59) {
        seconds = 0;
        second.innerHTML = seconds + "წმ "
    } else {
        seconds++;

        second.innerHTML = seconds + "წმ "
    }
}, 1000)
//7
let users = [{ name: 'John', email: 'john@example.com' },
{ name: 'Alex', email: 'alex@example.com' },
{ name: 'Lily', email: 'lily@example.com' }
]
let section = document.querySelector(".clas1");
let loading = document.querySelector(".loading");
let mycard = setTimeout(function () {
    loading.classList.add('none')
    for (let i = 0; i < users.length; i++) {
        let cards = document.createElement('div');
        section.appendChild(cards);
        cards.classList.add('cards');
        user(i,cards);

    }
}, 5000)

function user(element,cards) {
    let names = document.createElement('p')
    let emails = document.createElement('p')
    cards.appendChild(emails);
    cards.appendChild(names);
    names.innerHTML = "Username: " +users[element].name;
    emails.innerHTML = "Email: " + users[element].email;
}
//8
let txtminut=document.querySelector('.txtminut')
let test=document.querySelector('.test')
let input=document.querySelector('.basuxi')
let btn=document.querySelector('.btn')
let cards1=document.querySelector('.carde');
let testquiz=document.querySelector('.testquiz')
let str="8+4"
test.innerHTML="რას უდრის "+str;
let s;
s=input.value; 
let dive=document.createElement('div');
 dive.classList.add('carde');
function addelemet(){
    testquiz.appendChild(dive);
    cards1.classList.add('none')
    if(s==12){
        dive.innerHTML="პასუხი სწორია";
    }
    else{
        dive.innerHTML="პასუხი არსწორია";
    }
}
function timouts(){
    let dive=document.createElement('div')
    dive.classList.add('carde');
    testquiz.appendChild(dive);
    cards1.classList.add('none')
    dive.innerHTML="დრო ამოიწურა"
    
}
btn.addEventListener('click',function(){
    addelemet();

})
console.log(s)
let miunts=20;

let minuteInterval = setInterval(function () {
    if (miunts === 0) {
        clearInterval(minuteInterval);
        timouts()
    } else {

        miunts--;
        txtminut.innerHTML ="დარჩენილი დრო : "+ miunts + "წმ "
        btn.addEventListener('click',function(){
            addelemet();
            clearInterval(minuteInterval);
        })
    }
}, 1000)



