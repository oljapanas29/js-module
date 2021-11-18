// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
// 1. перебрати його циклом while
// let numb = [2,17,13,6,22,31,45,66,100,-18];
// let i=0
// while (i < numb.length) {
//     console.log(numb[i]);
//     i++ ;
// }
//  в зворотньому напрямку
// let i = numb.length - 1
// while (i>=0) {
//     console.log(numb[i]);
//     i-- ;
// }
//     2. перебрати його циклом for
// let numb = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < numb.length ; i++) {
//     console.log(numb [i]);
// }
//  в зворотньому напрямку
// for (let i = numb.length -1; i>= 0 ; i--) {
//     console.log(numb [i]);
// }
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let numb = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < numb.length) {
//     if (i%2 !== 0) {
//         console.log(numb[i]);
//     }
//     i++;
// }
// в зворотньому напрямку
// let i = numb.length - 1;
// while (i >= 0) {
//     if (i%2 !== 0) {
//         console.log(numb[i]);
//     }
//     i--;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let numb = [2,17,13,6,22,31,45,66,100,-18];
 // for (let i = 0; i < numb.length ; i++) {
 //     if (i%2 !== 0) {
 //         console.log(numb [i]);
 //     }
 // }
// в зворотньому напрямку
// for (let i = numb.length - 1; i >= 0; i--) {
//     if (i%2 !== 0) {
//         console.log(numb[i]);
//     }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let numb = [2,17,13,6,22,31,45,66,100,-18];
//  let i = 0;
//  while (i<numb.length) {
//      if (numb[i] % 2 === 0) {
//          console.log(numb[i]);
//      }
//      i++;
//  }
// в зворотньому напрямку
//  let i = numb.length - 1;
//  while (i >= 0) {
//      if (numb[i] % 2 === 0) {
//          console.log(numb[i]);
//      }
//      i--;
//  }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let numb = [2,17,13,6,22,31,45,66,100,-18];
// for (i = 0; i < numb.length; i++) {
//     if (numb [i] % 2 === 0) {
//         console.log(numb[i]);
//     }
// }
// в зворотньому напрямку
// for (i = numb.length - 1; i >= 0; i--) {
//     if (numb[i] % 2 === 0) {
//         console.log(numb[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// let numb = [2,17,13,6,22,31,45,66,100,-18];
// for (i = 0; i < numb.length; i++) {
//     if (numb[i] % 3 === 0) {
//         numb[i] = 'okten';
//     }
// }
// console.log(numb)
// в зворотньому порядку
// let numb = [2,17,13,6,22,31,45,66,100,-18];
// for (i = numb.length -1; i >=0; i--) {
//     if (numb[i] % 3 === 0) {
//         numb[i] = 'okten';
//     }
// }
// console.log(numb)

// 8. вивести масив в зворотньому порядку.
//  let numb = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = numb.length - 1 ; i >= 0 ; i--) {
//     console.log(numb[i])
// }
// OR
// console.log(numb.reverse());

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)