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

  let day = new Date().getDay() - 1;
  console.log(day);
  if (day == -1) {
    day = 6;
  }

  week.forEach(function (item, index, array) {
    if (index == day) {
      document.writeln("<b>" + week[day] + "</b>" + "<br>");
    } else if (index == 5 || index == 6) {
      document.writeln("<i>" + week[index] + "</i>" + "<br>");
    } else {
      document.writeln(array[index] + "<br>");
    }
  });
};

differentDaysOfWeek();
