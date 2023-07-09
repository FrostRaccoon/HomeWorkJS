"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс
"super-dropdown", необходимо использовать методы forEach, querySelectorAll и
свойство classList у элементов.
*/
const desiredEls = document.querySelectorAll(`.dropdown-item`);

desiredEls.forEach((collectionEl) => {
  collectionEl.classList.add(`super-dropdown`);
});
/*
2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он
присутствует у этого элемента, либо добавить, если такого класса у элемента
не было.
*/
const btnEl = document.querySelector(`.btn`);

btnEl.classList.toggle(`btn-secondary`);
/*
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого
присутствует класс "menu".
*/
const desiredClassEl = document.querySelector(`.menu`);

desiredClassEl.classList.remove(`dropdown-menu`);
/*
4. Используя метод insertAdjacentHTML добавьте после div'a с классом
"dropdown" следующую разметку:
  <a href="#">link</a>
*/
const divEl = document.querySelector("div.dropdown");

divEl.insertAdjacentHTML(`afterend`, `<a href="#">link</a>`);
/*
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
*/
document.getElementById(
  `dropdownMenuButton`
).id = `superDropdown`;

/*
6. Добавьте атрибут data-dd со значением 3 элементу у которого существует
атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
*/
const enotherEl = document.querySelector(
  `[aria-labelledby="dropdownMenuButton"]`
);

enotherEl.dataset.dd = 3;
/*
7. Удалите атрибут type у элемента с классом "dropdown-toggle".
*/
const someEl = document.querySelector(`.dropdown-toggle`);

someEl.removeAttribute(`type`);
