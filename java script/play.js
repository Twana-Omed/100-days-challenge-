var tweet = prompt("compose your teet");
var tweetcount = tweet.length;
console.log("you've been writting "+tweetcount+" characters,you have"+(280-tweetcount)+"remain.");
console.log(tweet.slice(0,280));
var name = prompt("what is your name ?");
var first = name.slice(0,1);
first = first.toUpperCase();
var rest = name.slice(1,name.length);
rest = rest.toLowerCase();
console.log("hello, "+ first + rest);

var dog_age = prompt("how old is your dog ?");
var human_age= (dog_age-2)*4+21;
console.log("your dog human age is equall to "+ human_age);
var x = 3;
var y = x++;
y += 1;
function GetMilk() {
    console.log("leaveHome");
    console.log("GoLeft");
    console.log("GoUp");
    console.log("BuyMilk");
    console.log("GoDown");
    console.log("GoRight");
    console.log("EnterHouse");
}
alert(2+3);
typeof(true);
typeof(2);
var YourName = prompt("what is your name?");
var MyName ="Twana";
alert(MyName);
alert("my name is"+MyName+"wecome to my course"+YourName+"!");
function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/

  var c= a;
  a= b;
  b= c;
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}
var message ="hello";
var name ="twana";
alert(message+"there,"+name);
var tweet = prompt("compose your tweet");
var tweetcount =tweet.length;
alert("you've been written "+tweetcount+"and there is only"+(180-tweetcount)+"remaining");
var tweet = prompt("compose your tweet");
var tweetUnder140 =tweet.slice(0,140);
alert(tweetUnder140);
var name ="twana";
name = name.toUpperCase();
alert(name);

var name = "YASSIN";
name = name.toLowerCase();
alert(name);

var name = prompt("what is your name?");
var c = name.slice(0,1);
var first =c.toUpperCase();
var others = name.slice(1,name.length);
var last = b.toLowerCase();
alert("welcome to our course " +(first+last));
var name = prompt("how old is your dog?");
dogAge=(name-2)*4+21
alert("your dog is "+dogAge+" years old in human age!");
function Walk(){
console.log("go out");
console.log("get a walk");
console.log("come back home");
}
Walk();
function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");

var numberOfBottoles = Math.floor(money/1.5);
    console.log("buy"+numberOfBottoles+" bottoles of milk");

  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}
getMilk(5);
 var age = prompt("how old are you?");
    var year = 90-age;
    var month = year *12;
    var day = month*30;
    alert("your life remain till"+year+"years, "+month+"months,"+day,"days.");
   
   function life_remianing(age){
    var year = 90-age;
    var day =year*365;
    var week = year*52;
    var month = year*12;
    alert("you have " +day+ " days, " +week+" weeks, " +month+ " months left");
   }
life_remianing(12);

function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  var numberOfBottoles =Math.floor(money/1.5)
   console.log("buy"+numberOfBottoles+"bottoles of milk");
 
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

 return money % 1.5;
}
getMilk(5);

var weight = prompt("what is your wight?");
var height = prompt("what is your height?");
alert(weight/(height*height));

function bmiCalculator(weight,height){
    var bmi = weight/(height*height);
    return bmi;
}
bmiCalculator(65,1.8);