"use strict";

const differentDaysOfWeek = function () {
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

  week.forEach(function (item, index, array) {
    if (index == date.getDay() - 1) {
      document.writeln("<b>" + week[date.getDay() - 1] + "</b>");
    } else if (index == 5 || index == 6) {
      document.writeln("<i>" + week[index] + "</i>");
    } else {
      document.writeln(array[index] + "<br>");
    }
  });
};

differentDaysOfWeek();
