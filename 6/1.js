"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. Найти по id, используя getElementById, элемент с id равным "super_link" и
вывести этот элемент в консоль.
*/
const someEl = document.getElementById(`super_link`);
console.log(someEl);
/*
2. Внутри всех элементов на странице, которые имеют класс "card-link",
поменяйте текст внутри элемента на "ссылка".
*/
const linkEls = document.querySelectorAll(`.card-link`);
linkEls.forEach((linkEl) => {
  linkEl.textContent = `ссылка`;
});
/*
3. Найти все элементы на странице с классом "card-link", которые лежат в
элементе с классом "card-body" и вывести полученную коллекцию в консоль.
*/
const elsInEl = document.querySelector(`.card-body`);
console.log(elsInEl.querySelectorAll(`.card-link`));
/*
4. Найти первый попавшийся элемент на странице у которого есть атрибут
data-number со значением 50 и вывести его в консоль.
*/
const unknownEl = document.querySelector(`[data-number="50"]`);

console.log(unknownEl);

/*
5. Выведите содержимое title страницы в консоль.
*/
const titleEl = document.querySelector(`title`);

console.log(titleEl);
/*
6. Получите элемент с классом "card-title" и выведите его родительский узел
в консоль.
*/
const h5El = document.querySelector(`.card-title`);
console.log(h5El.parentNode);
/*
7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный
тег в начало элемента, который имеет класс "card".
*/
const pEl = document.createElement("p");
const cardEl = document.querySelector(`.card`);
cardEl.prepend(`pEl`);
/*
8. Удалите тег h6 на странице.
*/
const h6El = document.querySelector(`h6`);

h6El.remove();
