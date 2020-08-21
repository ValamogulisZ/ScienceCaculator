var process = document.getElementById("processDisplay");
var answer = document.getElementById("answerDisplay");

var number1 = "";
var number2 = "";
var dotnum1 = "";
var dotnum2 = "";
var cacSymbol = "";
var inputFlag = 0;
// 0: input first number
// 1: input first decimal
// 2: input second number
// 3: input second decimal
var a;
var b;
var c;

function error(){
  process.innerHTML = "Error Operation! Please hit AC Button!"
}

function displayAnswer(){
  answer.innerHTML = c;
}

function displayProcess(){
  if (inputFlag == 0) {
    process.innerHTML = number1.toString();
  }
  else if (inputFlag == 1) {
    process.innerHTML = number1.toString() + dotnum1.toString();
  }
  else if (inputFlag == 2) {
    process.innerHTML = number1.toString() + dotnum1.toString()
      + cacSymbol.toString() + number2.toString();
  }
  else if (inputFlag == 3) {
    process.innerHTML = number1.toString() + dotnum1.toString()
      + cacSymbol.toString() + number2.toString() + dotnum2.toString();
  }
}

function num(inputNumber){
  if (inputFlag == 0) {
    number1 += inputNumber.toString();
  }
  else if (inputFlag == 1) {
    dotnum1 += inputNumber.toString();
  }
  else if (inputFlag == 2) {
    number2 += inputNumber.toString();
  }
  else if (inputFlag == 3) {
    dotnum2 += inputNumber.toString();
  }
  displayProcess()
}

function cac(inputSymbol){
  inputFlag = 2;
  cacSymbol = inputSymbol.toString();
  displayProcess();
}

function dot(){
  if (inputFlag == 0) {
    inputFlag = 1;
    dotnum1 = ".";
  }
  else if (inputFlag == 2) {
    inputFlag = 3;
    dotnum2 = ".";
  }
  else {
    error();
    return;
  }
  displayProcess();
}

function specailCac(inputSymbol){
  inputFlag = 2;
  number1 = "";
  dotnum1 = "";
  cacSymbol = inputSymbol;
  displayProcess();
}

function ac(){
  inputFlag = 0;
  number1 = "0";
  number2 = "";
  dotnum1 = "";
  dotnum2 = "";
  cacSymbol = "";
  displayProcess();
  number1 = "";
}

function eq(){
  a = parseFloat(number1 + dotnum1);
  b = parseFloat(number2 + dotnum2);
  if (cacSymbol == "+") {
    c = a + b;
  }
  else if (cacSymbol == "-") {
    c = a - b;
  }
  else if (cacSymbol == "*") {
    c = a * b;
  }
  else if (cacSymbol == "/") {
    c = a / b;
  }
  else if (cacSymbol == "^") {
    c = Math.pow(a, b);
  }
  else if (cacSymbol == "√"){
    c = Math.sqrt(b);
  }
  else if (cacSymbol == "sin") {
    c = Math.sin(b);
  }
  else if (cacSymbol == "cos") {
    c = Math.cos(b);
  }
  else if (cacSymbol == "tan") {
    c = Math.tan(b);
  }
  displayAnswer();

  ac();
  a = c;
  number1 = a.toString();
  inputFlag = 2;
}
