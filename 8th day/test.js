var n = Math.random();
n = n*6;
n =Math.floor(n)+1;
console.log(n);

var first = prompt("guy name?");
var second = prompt("girl name?");
var n =Math.random(),  
n = n* 100;
  n =Math.floor(n)+1;


if(n < 30){
    alert(n+"%"+" ,your love is suck .")
}
if(n >=30 && n<70){
    alert(n+"%"+" ,your love is normal .")
}
if(n >=70){
    alert(n+"%"+" ,your love is last for ever .")
}

function isLeap(year){
  if(year%4 ===0){}
  else{return("not a leap year");}
  
  if(year%400===0){}
  else{return("leap year")}
  
  if(year/400 ===0){
    return("leap year")
  }

else{return("not a leap year");}
}
isLeap(2030);

var guest = ["twana","yassin","darbaz","ali","ibrahim","ahmad"];
// console.log(guest);
// console.log(guest.length);
// console.log(guest[0]);
var person = prompt("what is your name?");
if(guest.includes(person)){
  alert("welcome")}
else{alert("get out")}

var play=[];
var cap= 1;

function FizzBuzz(){
play.push(cap)
cap++;
if(cap % 3 === 0 &&& cap % 5 === 0) {
    play.push("FizzBuzz");
}
else if(cap % 3 === 0){play.push(Fizz)}
else if(cap % 5 === 0){play.push(buzz)}
else (play.push(count));

console.log(play)
}
FizzBuzz()

var play = [];
var cap = 1;

function FizzBuzz() {
    play.push(cap);
    cap++;
    
    if (cap % 3 === 0 && cap % 5 === 0) {
        play.push("FizzBuzz");
    } else if (cap % 3 === 0) {
        play.push("Fizz");
    } else if (cap % 5 === 0) {
        play.push("Buzz");
    } else {
        play.push(cap);
    }

    console.log(play);
}

FizzBuzz();

var play = [];
var cap = 1;

function FizzBuzz() {
    while (cap <= 100) {
        if (cap % 3 === 0 && cap % 5 === 0) {
            play.push("FizzBuzz");
        } else if (cap % 3 === 0) {
            play.push("Fizz");
        } else if (cap % 5 === 0) {
            play.push("Buzz");
        } else {
            play.push(cap);
        }
        cap++;
    }

    console.log(play);
}

FizzBuzz();


