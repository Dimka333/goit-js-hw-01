"use strict";

let credits = 23580;
let pricePerDroid = 3000;
let message;
let result = prompt('Сколько дронов Вы хотите купить?');
let totalPrice = result * pricePerDroid;

if (result === null) {
    message = 'Отменено пользователем!'
} else if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!'
} else {
    message = `Вы купили ${result} дроидов, на счету осталось ${credits - totalPrice} кредитов.`
}
alert(message);
 
