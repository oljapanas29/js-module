// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let elementById = document.getElementById('main_header');
elementById.classList.add('sept-2021');
// b) робить шириниу елементу ul 400px
let elementsByTagName =document.getElementsByTagName('ul');
ElementsByTagName.style.width = '400px';
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let elementsByClassName = document.getElementsByClassName(`linkList`);
for (const elementsByTagNameElement of elementsByClassName) {
    elementsByTagNameElement.style.width = "50%"
}
// d) отримує текст який зберігається в елементі з класом listElement2
function addText(text) {
    let elementsByClassName = document.getElementsByClassName(`listElement2`);
    elementsByClassName.innerText = text;
}
// e) отримує всі елементи li та змінює ім колір фону на сірий
let list = document.getElementsByTagName('li');
for (const li of list) {
    li.style.background = 'silver';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let alist = document.getElementsByTagName('a');
for (const a of alist) {
    a.classList.add('anchor')
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let alist = document.getElementsByTagName('a');
for (const a of alist) {
    if (a.innerText === 'link3') {
        a.style.fotSize = '40px';
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let alist = document.getElementsByTagName('a');
for (const a of alist) {
    let classNew = a.innerText;
    a.classList.add(classNew);
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeadersList = document.getElementsByClassName('sub-header');
for (const item of subHeadersList) {
    item.style.background = prompt('enter color');
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let subHeaders = document.getElementsByClassName('sub-header');
for (const subheader of subHeaders) {
    if(subheader.innerText === 'content 2 segment') {
        subheader.style.color = prompt('what color');
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
document.getElementsByClassName('content_1').innerText = prompt();
// l) отримати елементи p та змінити їм padding на 20px
let pars = document.getElementsByTagName('p');
for (const p of pars) {
    p.style.padding = '20px'
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
document.getElementsByClassName('text2').innerText = "sept-2021";