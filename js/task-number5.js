"use strict";

const countryName = prompt('Введите страну доставки');
const CHINA = 'Китай';
const CHILE = 'Чили';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';

let price;
let country;
let message;

if (countryName === null) {
    message = 'Отменено пользователем';
    alert(message);
} else {
    switch (countryName) {
        case 'Китай':
            price = 100;
            alert(`Доставка в ${CHINA} будет стоить ${price} кредитов.`);
            break;
        
        case 'Чили':
            price = 250;
            alert(`Доставка в ${CHILE} будет стоить ${price} кредитов.`);
            break
        
        case 'AUSTRALIA':
            price = 170;
            alert(`Доставка в ${AUSTRALIA} будет стоить ${price} кредитов.`);
            break
         default:
    console.log(alert('В вашей стране доставка не доступна'));
    }
}