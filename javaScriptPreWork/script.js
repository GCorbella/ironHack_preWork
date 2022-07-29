const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const sum = document.getElementById("sum");
const res = document.getElementById("res");
const multiply = document.getElementById("multiply");
const division = document.getElementById("division");
const erase = document.getElementById("erase");
const result = document.getElementById("result");
const screen = document.getElementById("screen");

let numberShow = "";
let state = 0;
let num1 = "";
let num2 = "";
let operation = 0;

one.addEventListener('click', function(event) {
  numberShow += "1";
  if(state === 0){
    num1 +="1";
  }
  else{
    num2 +="1";
  }
  screen.innerHTML = numberShow;
});

two.addEventListener('click', function(event) {
  numberShow += "2";
  if(state === 0){
    num1 +="2";
  }
  else{
    num2 +="2";
  }
  screen.innerHTML = numberShow;
});

three.addEventListener('click', function(event) {
  numberShow += "3";
  if(state === 0){
    num1 +="3";
  }
  else{
    num2 +="3";
  }
  screen.innerHTML = numberShow;
});

four.addEventListener('click', function(event) {
  numberShow += "4";
  if(state === 0){
    num1 +="4";
  }
  else{
    num2 +="4";
  }
  screen.innerHTML = numberShow;
});

five.addEventListener('click', function(event) {
  numberShow += "5";
  if(state === 0){
    num1 +="5";
  }
  else{
    num2 +="5";
  }
  screen.innerHTML = numberShow;
});

six.addEventListener('click', function(event) {
  numberShow += "6";
  if(state === 0){
    num1 +="6";
  }
  else{
    num2 +="6";
  }
  screen.innerHTML = numberShow;
});

seven.addEventListener('click', function(event) {
  numberShow += "7";
  if(state === 0){
    num1 +="7";
  }
  else{
    num2 +="7";
  }
  screen.innerHTML = numberShow;
});

eight.addEventListener('click', function(event) {
  numberShow += "8";
  if(state === 0){
    num1 +="8";
  }
  else{
    num2 +="8";
  }
  screen.innerHTML = numberShow;
});

nine.addEventListener('click', function(event) {
  numberShow += "9";
  if(state === 0){
    num1 +="9";
  }
  else{
    num2 +="9";
  }
  screen.innerHTML = numberShow;
});

zero.addEventListener('click', function(event) {
  numberShow += "0";
  if(state === 0){
    num1 +="0";
  }
  else{
    num2 +="0";
  }
  screen.innerHTML = numberShow;
});

sum.addEventListener('click', function(event) {
  numberShow = ""
  state = 1;
  operation = 1;
  screen.innerHTML = '+';
});

res.addEventListener('click', function(event) {
  numberShow = ""
  state = 1;
  operation = 2;
  screen.innerHTML = '-';
});

multiply.addEventListener('click', function(event) {
  numberShow = ""
  state = 1;
  operation = 3;
  screen.innerHTML = 'X';
});

division.addEventListener('click', function(event) {
  numberShow = ""
  state = 1;
  operation = 4;
  screen.innerHTML = '/';
});

erase.addEventListener('click', function(event) {
  numberShow = "";
  num1 = "";
  num2 = "";
  state = 0;
  screen.innerHTML = '0';
});

result.addEventListener('click', function(event) {
  let result = 0;
  if (operation === 1){
    result = Number.parseInt(num1,10) + Number.parseInt(num2,10);
    screen.innerHTML = result;
  }
  else if (operation === 2){
    result = Number.parseInt(num1,10) - Number.parseInt(num2,10);
    screen.innerHTML = result;
  }
  else if (operation === 3){
    result = Number.parseInt(num1,10) * Number.parseInt(num2,10);
    screen.innerHTML = result;
  }
  else if (operation === 4){
    result = Number.parseInt(num1,10) / Number.parseInt(num2,10);
    screen.innerHTML = result;
  }
  numberShow = "";
  num1 = "";
  num2 = "";
  state = 0;
});