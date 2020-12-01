const total = 100;
const ordered = 50;
const messageError = 'На складе недостаточно твоаров!'
const messageOk = 'Заказ оформлен, с вами свяжется менеджер'
if (total >= ordered) {
    console.log(messageOk);
} else {
    console.log(messageError);
}
