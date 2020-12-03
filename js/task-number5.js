"use strict";

const countryName = prompt('Введите страну доставки');

let price;
let country;
let message;

if (countryName === null) {
    message = 'Отменено пользователем';
    
} else {
    switch (countryName.toLowerCase()) {
        case 'китай':
            price = 100;
            country = 'Китай'
            break;
        case 'чили':
            price = 250;
            country = 'Чили'
            break;
        case 'австралия':
            price = 170;
            country = 'Австралия'
            break;
        case 'индия':
            price = 80;
            country = 'Индия'
            break;
        case 'ямайка':
            price = 120;
            country = 'Ямайка'
            break;
        default:
            break;
    }
    if (country) {
        message = `Доставка в ${country} будет стоить ${price} кредитов.`;
    } else {
        message = 'В вашей стране доставка не доступна';
    }
    
}
alert(message);