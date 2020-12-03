"use strict";

let total = 0;

while (true) {
    let input = prompt('Введи число!')

    if (input === null) {
        console.log('Отменено пользователем');
        break
    }
    input = Number(input);
    
    if (Number.isNaN(input)) {
        console.log('Было введено не число, попробуйте еще раз');
        continue;
    }

    total += input;
    
}
console.log(`Общая сумма ${total}`);