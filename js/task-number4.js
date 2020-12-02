"use strict";

let credits = 23580;
let pricePerDroid = 3000;
let message;
let resault = prompt ('Сколько дронов Вы хотите купить?');
let totalPrice = resault * pricePerDroid;

if (resault === null) {
    message = 'Отменено пользователем!'
} else if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!'
} else {
    message = `Вы купили ${resault} дроидов, на счету осталось ${credits - totalPrice} кредитов.`
}
alert(message);
 
