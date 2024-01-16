'use strict';
/*Part #1*/
const userYear = prompt('Ваш рік народження: ');
const userCity = prompt('В якому місті ви живете: ');
const userSport = prompt('Ваш улюблений вид спорту: ');

if (userYear == null){
    alert('Шкода, що ви не захотіли ввести свій рік народження.');
    throw new Error('Припинено виконання коду');
} else if(userCity == null){
    alert('Шкода, що ви не захотіли ввести своє місто.');
    throw new Error('Припинено виконання коду');
} else if(userSport == null){
    alert('Шкода, що ви не захотіли ввести свій вид спорту.');
    throw new Error('Припинено виконання коду');
}

const currentDate = new Date();
const ageMessage = currentDate.getFullYear() - userYear;
let cityMessage;

if (userCity.toLowerCase() === 'лондон'){
    cityMessage = 'Ви живете у столиці Британії';
}  else if(userCity.toLowerCase() === 'київ'){
    cityMessage = 'Ви живете у столиці України';
} else if (userCity.toLowerCase() === 'вашингтон'){
    cityMessage = 'Ви живете у столиці США';
} else{
    cityMessage = 'Ви живете у місті ' + userCity;
}

/*Part #2*/
let sportMessage
if (userSport.toLowerCase() === 'баскетбол'){
    sportMessage = 'Круто! Хочеш стати Майкл Джорданом?'
} else if (userSport.toLowerCase() === 'футбол'){
    sportMessage = 'Круто! Хочеш стати Криштиану Роналду?'
} else if(userSport.toLowerCase() === 'волейбол'){
    sportMessage = 'Круто! Хочеш стати Мэтью Андерсаном?'
}


alert(
    `Ваш вік: ${ageMessage} рік. \n${cityMessage}. \n${sportMessage}`
);
