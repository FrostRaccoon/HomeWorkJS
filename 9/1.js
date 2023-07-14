"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. При изменении значения в input с id="from", значение содержащееся в нем
должно моментально отображаться в span. То есть при печати в input'е тег span
также должен меняться.
*/

const inputEl = document.getElementById(`from`);
const spanEl = document.querySelector(`span`);

inputEl.addEventListener("input", () => {
  spanEl.textContent = inputEl.value;
});

/*
2. При клике на кнопку с классом messageBtn необходимо элементу с классом
message:
1) добавить два класса: animate__animated и animate__fadeInLeftBig
2) поставить данному элементу стиль visibility в значение 'visible'.
*/

const btnEl = document.querySelector(`.messageBtn`);
const divEl = document.querySelector(`.message`);

btnEl.addEventListener(`click`, () => {
  divEl.classList.add(`animate__animated`, `animate__fadeInLeftBig`);
  divEl.style.visibility = `visible`;
});

/*
3. Необходимо при отправке формы проверить, заполнены ли все поля в этой
форме. Если какое-либо поле не заполнено, форма не должна отправляться, также
должны быть подсвечены незаполненные поля (необходимо поставить класс error
незаполненным полям).
Как только пользователь начинает заполнять какое-либо поле, необходимо,
при вводе в данное поле, произвести проверку:
Если поле пустое, необходимо данное поле подсветить (поставить класс error
данному полю).
Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
*/

const formEl = document.body.querySelector(`form`);
const formInputEl = formEl.querySelector(`input`);
const formSelectEl = formEl.querySelector(`select`);
const formButtonEl = formEl.querySelector(`button`);

formButtonEl.addEventListener(`click`, (event) => {
  if (!formInputEl.value) {
    event.preventDefault();
  }

  if (!formInputEl.value) {
    formInputEl.classList.add(`error`);
  }

  if (!formSelectEl.value) {
    event.preventDefault();
  }

  if (!formSelectEl.value) {
    !formSelectEl.classList.add(`error`);
  }
});

formEl.addEventListener(`input`, (event) => {
  if (event.target.classList.contains("form-control")) {
    !event.target.value
      ? event.target.classList.add("error")
      : event.target.classList.remove("error");
  }
});

formEl.addEventListener(`input`, (event) => {
  !event.target.value
    ? event.target.classList.add("error")
    : event.target.classList.remove("error");
});
