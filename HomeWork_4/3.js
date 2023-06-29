"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const arr = [];

for (let i = 0; i < 5; i++) {
  arr.push(getRandomInt(0, 9));
}

console.log(arr);

/*1:
let arrSum = 0;

for (let i = 0; i < arr.length; i++) {
  arrSum += arr[i];
}

console.log(arrSum);

2:

const minNum = Math.min(...arr);

console.log(minNum);
*/
//3:

const newArray = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    newArray.push(i);
  }
}

console.log(`Второй массив - [${newArray}]`);
