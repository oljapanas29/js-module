// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

    let area = (a,b) => a*b ;

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let roundArea = (r) => Math.PI * Math.pow(r,2);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderArea = (h,r) =>  2 * Math.PI * r * h;

// - створити функцію яка приймає масив та виводить кожен його елемент
let arrayIterator = (arr) => {
    for(i=0; i<=arr.length; i++) {
        console.log(arr[i]);
    }
}
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createParagraph = (text) => document.write(`<p>${text}</p>`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createList = (text) => {
    let list='';
    for(i=1; i<=3; i++) {
        list+=`<li>${text}</li>`;
    }
    return document.write(`<ul>${list}</ul>`)
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createList = (text,quantity) => {
    let list='';
    for(i=1; i<=quantity; i++) {
        list+=`<li>${text}</li>`;
    }
    return document.write(`<ul>${list}</ul>`);
}
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let createDocumentList = (arr) => {
    let list = '';
    for (i=0; i<=arr.length; i++) {
        return document.write(`<ul>${arr[i]}</ul>`)
    }
    return document.write(`<ol>${list}</ol>`)
}
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrObject = (arr) => {
    for (i=0; i<=arr.length; i++) {
        return document.write(
            `<div>
                <p>${arr[i].id}</p>
                <p>${arr[i].name}</p>
                <p>${arr[i].age}</p>
            </div>`
        );
    }
}