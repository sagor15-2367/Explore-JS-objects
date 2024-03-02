//create object using object literals
const player = {};
player.name = 'Sagor Alam';
player.specialty = 'coder';
player.bat = function () {
    console.log('swing your bat');
}
// console.log(player);
// player.bat();

const student = {
    name: 'Sagor Alam',
    job: 'bekar',
    ball: function () {
        console.log('throw the ball');
    },
    salary: 1000
}

//object constructor
const person = new Object();
// console.log(person);


//object create method
const item = Object.create(null);
// console.log(item)

const atel = Object.create(student);
// console.log(atel.name)

//class
class Person {
    name = 'Sagor';
    addres = 'Tripur';
    constructor(age) {
        this.age = age;
    }
}
const person1 = new Person(26);
// console.log(person1);

//function
function Car(model, price) {
    this.model = model;
    this.price = price;
}
const tesla = new Car('Elon', 32);
console.log(tesla);