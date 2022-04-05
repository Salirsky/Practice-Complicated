"use strict";

// let week = [
//   "Воскресенье",
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
// ];

// let date = new Date();
// if (date.getDay() == indexOf(week) - 1) {
//   document.writeln("<b>" + date.getDay() + "</b>");
// }

// if (
//   week.findIndex(function (item, index, array) {
//     index = date.getDay();
//   })
// ) {
//   console.log(week[date.getDay()]);
// } else {
//   console.log("зато кексики вкусные");
// }

// document.writeln(week.join("<br>"));

// document.writeln("<br>" + "<br>" + date.getDay());

//document.writeln("<b>" + date.getDay() + "</b>" );

// document.writeln(week.join("<br>"));

const differentDaysOfWeek = function () {
  // Вводим переменные

  let week = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];

  let date = new Date();

  // Перечисляем все элементы массива

  week.forEach(function (item, index, array) {
    //document.writeln(array[index] + "<br>"); // Выводим каждый день недели с новой строки

    if (index == date.getDay() - 1) {
      document.writeln("<b>" + week[date.getDay() - 1] + "</b>");
    } else if (index == 5 || index == 6) {
      document.writeln("<i>" + week[index] + "</i>");
    } else {
      document.writeln(array[index] + "<br>");
    }

    // if (
    //   week.findIndex(function (item, index, array) {
    //     index = date.getDay();
    //   })
    // ) {
    //   document.writeln("<b>" + week[date.getDay()] + "</b>");
    // }
  });
};

differentDaysOfWeek();
