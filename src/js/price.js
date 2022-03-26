"use strict"


let siteTime;
let designTime;
let adapTime;
let site = prompt("Выберите тип сайта (Введите цифру)                                                              1-Визитка   2-Магазин   3-Сайт-викторина   4-Другое");
let design = prompt("Выберите дизайн сайта (Введите цифру)                                                         1-Простой   2-Динамичный   3-Потрясающий");
let adap = prompt("Выберите адаптивность сайта (Введите цифру)                                             1-Полная   2-Под Android/Ios   3-Только компьютер");
console.log(site, design, adap);
if (site == 1) {
    site = 5000;
    siteTime = 2;
} else if (site == 2) {
    site = 7000;
    siteTime = 3;
} else if (site == 3) {
    site = 8000;
    siteTime = 3;
} else if (site == 4) {
    site = 9000;
    siteTime = 4;
} else {
    site = 0;
    siteTime = 0;
}
if (design == 1) {
    design = 3000;
    designTime = 1;
} else if (design == 2) {
    design = 5000;
    designTime = 2;
} else if (design == 3) {
    design = 8000;
    designTime = 4;
} else {
    design = 0;
    designTime = 0;
}
if (adap == 1) {
    adap = 9000;
    adapTime = 2;
} else if (adap == 2) {
    adap = 6000;
    adapTime = 1;
} else if (adap == 3) {
    adap = 5000;
    adapTime = 1;
} else {
    adap = 0;
    adapTime = 0;
}
console.log(site, design, adap);
let result;
let resultTime;
if (site == 0 || design == 0 || adap == 0) {
    result = "Ошибка";
    alert(result);
} else {
    result = site + design + adap;
    resultTime = siteTime + designTime + adapTime;
    alert('Стоимость = ' + result + ' рублей' + '                                                                         Сроки = ' + resultTime + ' дней');
}
