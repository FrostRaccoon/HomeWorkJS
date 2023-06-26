"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const firstUserNumber = prompt("Введите первое число");
const secondUserNumber = prompt("Введите второе число");
const thirdUserNumber = prompt("Введите третье число");

function determineMaxNumber() {
  if (firstUserNumber > secondUserNumber && firstUserNumber > thirdUserNumber) {
    alert(`Максимальное значение среди трёх чисел равно ${firstUserNumber}`);
  } else if (
    secondUserNumber > firstUserNumber &&
    secondUserNumber > thirdUserNumber
  ) {
    alert(`Максимальное значение среди трёх чисел равно ${secondUserNumber}`);
  } else {
    alert(`Максимальное значение среди трёх чисел равно ${thirdUserNumber}`);
  }
}

determineMaxNumber();
