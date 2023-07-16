"use strict";

const dataJson = JSON.parse(data);

console.log(dataJson);

/*
<div class="app">
    
</div>
*/

const mainDivEl = document.querySelector(`.app`);

const tempEl = document.getElementById(`amiibo__template`);

function amiiboCollection(souvenir) {
  const cloneEl = tempEl.content.cloneNode(true);
  const imgEl = cloneEl.querySelector(`.character__image`);

  cloneEl.querySelector(`.character__name `).textContent = souvenir.name;
  imgEl.src = souvenir.image;
  imgEl.alt = `Photo ${souvenir.name}`;
  cloneEl.querySelector(
    `.game__series`
  ).textContent = `Game series: ${souvenir.gameSeries}`;
  cloneEl.querySelector(
    `.amiibo__series`
  ).textContent = `Amiibo series: ${souvenir.amiiboSeries}`;
  cloneEl.querySelector(
    `.Souvenir__type`
  ).textContent = `Souvenir type: ${souvenir.type}`;

  mainDivEl.appendChild(cloneEl);
}

dataJson.amiibo.forEach((amiiboContent) => {
  amiiboCollection(amiiboContent);
});
