// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, manufacturer, year, maxspeed, volume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.drive = () => console.log(`їдемо зі швидкістю ${maxspeed} на годину`);
//     this.info = () => {
//         console.log(`model - ${this.model}`);
//         console.log(`manufacturer-${this.manufacturer}`);
//         console.log(`year-${this.year}`);
//         console.log(`maxspeed - ${this.maxspeed = maxspeed}`);
//         console.log(`volume-${this.volume}`);
//     };
//     this.increaseMaxSpeed = (newSpeed) => this.maxspeed = this.maxspeed * newSpeed;
//     this.changeYear = (newValue) =>this.year = newValue;
//     this.addDriver = (driver) => this.driver = driver;
//
//     return this;
// }
//
// console.log(Car('bmw x5','bmw',2019,250,2));

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, manufacturer, year, maxspeed, volume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volume = volume;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${maxspeed} на годину`);
//     }
//
//     info() {
//        console.log(`model - ${this.model}`);
//        console.log(`manufacturer-${this.manufacturer}`);
//        console.log(`year-${this.year}`);
//        console.log(`maxspeed - ${this.maxspeed = maxspeed}`);
//        console.log(`volume-${this.volume}`);
//     }
//     increaseMaxSpeed(newSpeed) {
//           this.maxspeed = this.maxspeed * newSpeed;
//      }
//     changeYear(newValue) {
//           this.year = newValue; 
//     }
//     addDriver(driver) {
//           this.driver = driver;
//     }
// }
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// створити пустий масив, наповнити його 10 об'єктами Client
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Popelyushka {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let popelyushkaArr = [
//     new Popelyushka('Macha', 18, 41),
//     new Popelyushka('Dacha', 19, 37),
//     new Popelyushka('Chacha', 24, 45),
//     new Popelyushka('Olena', 22, 38),
//     new Popelyushka('Zlata', 34, 37),
//     new Popelyushka('Zirka', 38, 43),
//     new Popelyushka('Masja', 25, 37),
//     new Popelyushka('Valentuna', 34, 38),
//     new Popelyushka('Petruna', 41, 40),
//     new Popelyushka('Kateruna', 19, 37)
// ];
// let prince = {
//     name: 'Petro',
//     age: 55,
//     shoeSize: 43,
// };
//
// let selectedPopelyushka = popelyushkaArr.forEach(popelyushka => {
//     if(popelyushka.footSize === prince.shoeSize) {
//         return popelyushka;
//     }
// });
// // let selectedPopelyushka = popelyushkaArr.find(popelyushka => popelyushka.footSize === prince.shoeSize);
//