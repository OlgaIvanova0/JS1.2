"use strict";

/* 1 задание
let a = 1, b = 1, c, d;
c = ++a; //с=а+1=2 теперь а=1+1=2
alert(c); //2

d = b++; // d=b=1 теперь b=1+1=2
alert(d); // 1

c = 2 + ++a; //с=2+2+1=5 теперь а=3
alert(c); // 5

d = 2 + b++; //d=2+2=4 и b=3
alert(d); // 4
alert(a); // 3
alert(b); // 3
*/

/*задание 2
let a = 2;
let x = 1 + (a *= 2); //х=1+(2*2)=5
*/

/*задание 3
let a = prompt('Введите целое число');
let b = prompt('Введите еще одно целое число');

if (a >= 0, b >= 0){
    alert(a - b);
} else if (a < 0, b < 0){
    alert(a * b);
} else {
    alert(a + b);
}
*/

//задание 4
let a = + prompt('Введите целое число');
let b = + prompt('Введите еще одно целое число');

add(a, b);

function add(a, b) {
    const sum = a + b;
    return sum;
}
const mySum = add(a,b);
console.log('Сумма ваших чисел равна ' + mySum);

reduce(a, b);

function reduce(a, b) {
    const red = a - b;
    return red;
}
const myRed = reduce(a,b);
console.log('Разность ваших чисел равна ' + myRed);

multiply(a, b);

function multiply(a, b) {
    const mult = a * b;
    return mult;
}
const myMult = multiply(a,b);
console.log('Произведение ваших чисел равна ' + myMult);

divide(a, b);

function divide(a, b) {
    const div = a / b;
    return div;
}
const myDiv = divide(a,b);
console.log('Частное ваших чисел равна ' + myDiv);


//задание 5
let arg1 = a;
let arg2 = b;
const operation = 'divide';
mathOperation(arg1, arg2, operation);


function mathOperation(arg1, arg2, operation){
    switch (arg1, arg2, operation){
        case "add": 
        return mySum;
        case "reduce":
        return myRed;
        case "multiply":
        return myMult;
        case "divide":
        return myDiv;
        default:
        return false;
        }
}
console.log(mathOperation(arg1, arg2, operation));

//задание 6*
let money = + prompt('Сколько денег вы хотите положить в банк?');
readMoney(money);

function readMoney(money){
    if (money < 10) {
        let number = money; 
        console.log(number);
        console.log ('меньше десятка');
    } else if (money < 100 ) {
        let hundred = money;
        let number = hundred % 10;
        console.log(hundred);
        console.log ('меньше сотни');
        console.log ('последняя цифра ' + number);
    } else if (money < 1000) {
        let thousand = money;
        let number = (thousand % 100) % 10;
        console.log(thousand);
        console.log ('меньше тысячи');
        console.log ('последняя цифра ' + number);
    } else if (money < 10000) {
        let tth = money;
        let number = (tth % 1000) % 10;
        console.log(tth);
        console.log ('меньше десяти тысяч');
        console.log ('последняя цифра ' + number);
    } else if (money < 100000) {
        let ht = money;
        let number = (ht % 10000) % 10;
        console.log(ht);
        console.log ('меньше ста тысяч');
        console.log ('последняя цифра ' + number);
    } else if (money < 1000000) {
        let ml = money;
        let number = (ml % 100000) % 10;
        console.log(ml);
        console.log ('меньше миллиона');
        console.log ('последняя цифра ' + number);
    } else {
        alert ('Введите число меньше миллиона');
    }
}
readNumber();

function readNumber (number) {
    if (number === 0) {
        let word = ' рублей';
        console.log(word);
        return word;
    } else if (number === 1) {
        let word = ' рубль';
        console.log(word);
        return word;
    } else if (number > 1, number <= 4) {
        let word = ' рубля';
        console.log(word);
        return word;
    } else {
        let word = ' рублей';
        console.log(word);
        return word;
    }
}

message();

function message(){
    if (money === 101) {
        alert('Ваша сумма в ' + money + readNumber() + ' успешно зачислена.');  
    } else if (money === 10020){
        alert('Ваша сумма в ' + money + readNumber() + ' успешно зачислена.'); 
    } else if (money === 120104){
        alert('Ваша сумма в ' + money + readNumber() + ' успешно зачислена.'); 
    } else {
        alert('Вы положили в банк ' + money + readNumber());
    }
}



