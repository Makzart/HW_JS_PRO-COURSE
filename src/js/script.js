'use strict';
/*Task #1*/
const student = {
    name: 'Maksym',
    age: 20,
    grade: 80
}

console.log("Початковий об'єкт student:", student);

student.grade = 90;
student.course = 'Pro-course';

console.log("Модифікований об'єкт student:", student);

/*Task #2*/
const book = {
    title: 'Harry Potter' ,
    author: 'Joanne Rowling',
    year: 1997
}

book.publisher = {
    name: 'Flying Eye Books',
    location: 'London'
}

console.log("Об'єкт book:", book);

/*Task #3*/
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Sci-Fi"
}

for (let key in movie) {
    console.log(`${key}: ${movie[key]}`);
}

/*Task #4*/
const person1 = {
    name: "John",
    age: 25,
    city: "New York"
};

const person2 = {
    name: "John",
    age: 25,
    city: "New York"
};

function areObjectsEqual(obj1, obj2) {
    for (let key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
    }

    for (let key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (obj2[key] !== obj1[key]) {
                return false;
            }
        }
    }

    return true;
}

if (areObjectsEqual(person1, person2)) {
    console.log("Об'єкти однакові за структурою.");
} else {
    console.log("Об'єкти відрізняються за структурою.");
}

/*Task #5*/
const animals = [
    { type: "Dog", name: "Rax" },
    { type: "Cat", name: "Rodman" },
    { type: "Bird", name: "Ruby" }
];

console.log("Масив animals перед додаванням нового об'єкта:", animals);

animals.push({ type: "Fish", name: "Nemo" });

console.log("Масив animals після додавання нового об'єкта:", animals);
