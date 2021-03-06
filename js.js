"use strict";

/* 1 задание
let a = 1, b = 1, c, d;
c = ++a; //Результат расчетов: с=а+1=2, где у а - первоначальное значение =1. Но теперь а=1+1=2
alert(c); // Выводит с=2

d = b++; // Результат расчетов: d=b=1, где у b - первоначальное значение = 1, но теперь b=1+1=2
alert(d); // 1

c = 2 + ++a; //Результат расчетов: с=2+2+1=5, где у а - значение 2 и а++ = 3 и теперь это новое значение а=3
alert(c); // 5

d = 2 + b++; //Результат расчетов: d=2+2=4, где b=2, а b++=3 и теперь новое значение b=3
alert(d); // 4
alert(a); // 3
alert(b); // 3
*/

/*задание 2
let a = 2;
let x = 1 + (a *= 2); //Результат расчетов: х=1+(2*2)=5, т.к. а*=2 - это 2*2=4
*/

/*задание 3
let a = Math.round(+ prompt('Введите целое число'));
let b = Math.round(+ prompt('Введите еще одно целое число'));

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

const addition = (a, b) => a + b;
console.log(`Сумма ваших чисел равна ${addition(a, b)}`);

const reduce = (a, b) => a - b;
console.log(`Разность ваших чисел равна ${reduce(a, b)}`);

const multiply = (a, b) => a * b;
console.log(`Произведение ваших чисел равно ${multiply(a, b)}`);

const divide = (a, b) => a / b;
console.log(`Частное ваших чисел равно ${divide(a, b)}`);


//задание 5
let arg1 = a;
let arg2 = b;
const operation = "multiply";

function mathOperation(arg1, arg2, operation){
    switch (operation){
        case "add": 
        return addition(a, b);
        case "reduce":
        return reduce(a, b);
        case "multiply":
        return multiply(a, b);
        case "divide":
        return divide(a, b);
        default:
        return false;
        }
}
console.log(mathOperation(arg1, arg2, operation));

//задание 6*
let money = prompt(`Сколько денег вы хотите положить в банк? Введите число цифрами.`);

const readNumber = money => {
    if (money === `1`){
        return ` рубль`;
    } else if (money === `2` || money === `3` || money === `4`) {
        return ` рубля`;
    }  else {
        return ` рублей`;
    }
};

const endFunc = money =>{
    if (Number.isNaN(+ money)) {
        return alert(`Сумма введена неправильно, попробуйте заново.`); 
    } 
    return alert(`Вы положили в банк ` + money + readNumber(money[money.length - 1]));   
};
endFunc(money);







