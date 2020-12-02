"use strict";

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let resault = prompt('Введите пароль');
if (resault === null) {
message = 'Отменено пользователем!'
} else if (resault === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!'
} else {
    message = 'Доступ запрещен, неверный пароль!'
}
alert(message);