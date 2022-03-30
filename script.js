"use strict";

let affairs = prompt("Как делишки? :) ", "      Очешуенненько!    ");

let howYouAffairs = function (str) {
  let type = typeof str;
  if (type != "string") {
    alert("Введите строку, пожалуйста.");
  } else {
    str = str.trim();
    if (str.length > 30) {
      str = str.substr(0, 30) + "...";
    }
  }
  return str;
};

console.log(onlyStr(affairs));
