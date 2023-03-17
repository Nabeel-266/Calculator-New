var allClear = document.querySelector('.clr');
var delt = document.querySelector('.dlt');
var pecentage = document.querySelector('.percent');
var divide = document.querySelector('.divide');
var multiply = document.querySelector('.multiply');
var plus = document.querySelector('.plus');
var minus = document.querySelector('.minus');
var equal = document.querySelector('.equal');
var one = document.querySelector('.one');
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var four = document.querySelector('.four');
var five = document.querySelector('.five');
var six = document.querySelector('.six');
var seven = document.querySelector('.seven');
var eight = document.querySelector('.eight');
var nine = document.querySelector('.nine');
var zero = document.querySelector('.zero');
var doubleZero = document.querySelector('.dblzero');
var decimal = document.querySelector('.point');
var display = document.querySelector('.display');

var num = true;
var operator = true;

allClear.addEventListener('click', () => {
    display.value = '';
})

delt.addEventListener('click', () => {
   display.value = display.value.substr(0, display.value.length -1);
})

one.addEventListener('click', () => {
    display.value += '1';
    num = true;
})

two.addEventListener('click', () => {
    display.value += '2';
    num = true;
})

three.addEventListener('click', () => {
    display.value += '3';
    num = true;
})

four.addEventListener('click', () => {
    display.value += '4';
    num = true;
})

five.addEventListener('click', () => {
    display.value += '5';
    num = true;
})

six.addEventListener('click', () => {
    display.value += '6';
    num = true;
})

seven.addEventListener('click', () => {
    display.value += '7';
    num = true;
})

eight.addEventListener('click', () => {
    display.value += '8';
    num = true;
})

nine.addEventListener('click', () => {
    display.value += '9';
    num = true;
})

zero.addEventListener('click', () => {
    display.value += '0';
    num = true;
})

doubleZero.addEventListener('click', () => {
    display.value += '00';
    num = true;
})

decimal.addEventListener('click', () => {
    if(operator == true){
        display.value += '.';
        operator = false;
    }
})


plus.addEventListener('click', () => {
    if(num == true){
        display.value += '+';
        num = false;
        operator = true;
    }
})

minus.addEventListener('click', () => {
    if(num == true){
        display.value += '-';
        num = false;
        operator = true;
    }
})

multiply.addEventListener('click', () => {
    if(num == true){
        display.value += '*';
        num = false;
        operator = true;
    }
})

divide.addEventListener('click', () => {
    if(num == true){
        display.value += '/';
        num = false;
        operator = true;
    }
})

pecentage.addEventListener('click', () => {
    if(num == true){
        display.value += '%';
        num = false;
        operator = true;
    }
})

equal.addEventListener('click', () => {
    display.value = eval(display.value);
})