"use strict";

let answer = confirm('Нажмите "ОК", если ваш язык - русский');
let lang = answer === true ? "ru" : "en";

if (lang == "ru") {
  console.log(
    "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"
  );
} else if (lang == "en") {
  console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
} else {
  console.log("Что-то тут не то.");
}

switch (true) {
  case lang == "ru":
    console.log(
      "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"
    );
    break;
  case lang == "en":
    console.log(
      "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"
    );
    break;
  default:
    console.log("Что-то тут не то.");
}

let week = [
  [
    "Понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ],
  [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  "Что-то тут не то.",
];

lang === "ru"
  ? console.log(week[0])
  : lang === "en"
  ? console.log(week[1])
  : console.log(week[2]);

let namePerson = prompt("Как вас зовут?");

namePerson === "Артем"
  ? console.log("Директор")
  : lang === "Александр"
  ? console.log("Преподаватель")
  : console.log("Студент");
