"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

let slide = "x";
console.log(slide);
for (let i = 0; i < 19; i++) {
  console.log((slide += "xx"));
}
