'use strict';

const hours = Number(prompt("Введіть кількість годин:"));

if (isNaN(hours) || hours < 0) {
    alert("Будь ласка, введіть коректну кількість годин.");
} else {
    const seconds = hours * 3600;

    alert("Кількість секунд у " + hours + " годинах: " + seconds + " секунд.");
}
