class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(middleName) {
        return `${this.name} ${this.surname} ${middleName}`;
    };
    showCourse() {
        return new Date().getFullYear() - this.year;
    }
    
}
const person = new Person(`Tolik`, `Sarakhman`);
const student = new Student(`Peter`, `Peterson`, 2018);

console.log(person.showFullName());
console.log(student.showFullName(`Vasilovich`));
console.log(student.showCourse());