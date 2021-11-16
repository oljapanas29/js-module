// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let a = [[1,2,3,4,5],['apple','lemon','melon','berry','pineapple'],
//     [['apple',1,true],['lemon',2,false],['melon',3,true],['berry',4,false],['pineapple',5,true]]];
// console.log(a)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
//     Вивести в консоль

// let b = [];
//    b[0] = 100;
//    b[1] = 'years';
//    b[2] = true;
// console.log(b)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div>something x</div>')
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>something ${i}</div>`)
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i<20) {
//     i++
//     document.write('<h1>Hello</h1>')
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i<20) {
//     i++
//     document.write(`<h1>Hello ${i}</h1>`),
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let array = [11,12,21,22,31,32,41,42,51,52];
// for (let i = 0; i<array.length; i++) {
//     console.log(`${array[i]}`)
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let array = ['apple','lemon','melon','berry','pineapple','peach','orange','kiwi','grapefruit','strawberry'];
// for (let i = 0; i < array.length; i++) {
//     console.log(`${array[i]}`)
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array = [1,'lemon',4,'berry',true,'peach','orange',false,'grapefruit',8];
// for (let i = 0; i < array.length; i++) {
//     console.log(`${array[i]}`)
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let products = [11,'berry',70,true,'pineapple',false,99,'peach',true];
// for (let product of products) {
//     if(typeof product === 'boolean') {
//         console.log(product)
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for (let product of products) {
//     if (typeof product === 'number') {
//         console.log(product)
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// for (let product of products) {
//     if (typeof product === 'string') {
//         console.log(product)
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.
//  let a = [];
//  a[0] = 12;
//  a[1] = true;
//  a[2] = 'apple';
//  a[3] = 22;
//  a[4] = false;
//  a[5] = 'berry';
//  a[6] = 'melon';
//  a[7] = 31;
//  a[8] = false;
//  a[9] = true;
// for (let i = 0; i<a.length; i++) {
//     console.log(`${a[i]}`);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(`${i}`);
//     document.write(`${i}`)
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(`${i}`);
//     document.write(`${i}`)
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(`${i}`);
//     document.write(`${i}`)
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i%2 === 0) {
//         console.log(`${i}`);
//         document.write(`${i}`)
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(`${i}`);
//         document.write(`${i}`)
//     }
// }