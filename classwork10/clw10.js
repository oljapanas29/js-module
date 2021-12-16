// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
function readForm() {
    const i11 = document.forms.f1.i11.value;
    const i12 = document.forms.f1.i12.value;
    const i21 = document.forms.f2.i21.value;
    const i22 = document.forms.f2.i22.value;
}
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let form = document.forms.tabCreator;
form.onsubmit = function (e) {
    e.preventDefault();
    let rows = +form.rows.value;
    let cells = +form.cells.value;
    let content = form.content.value;
    console.log(rows,cells,content);

    let table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cells; j++) {
            let td = document.createElement('td');
            td.textContent = content;
            tr.appendChild(td);
        }
        table.appendChild(tr)
    }
    document.body.appendChild(table)
}
//  - Сворити масив не цензцрних слів.
//  Сворити інпут текстового типу.
//  Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let badWords = ['кака','макака','срака'];
let btn = document.getElementById('btn');
btn.onclick = function () {
    let word = document.getElementById('bad').value;
    for (const badWord of badWords) {
        if (badWord === word) {
            alert('it is bad word');
        }
    }
}

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

let badWords = ['кака','макака','срака'];
let btn = document.getElementById('btn');
btn.onclick = function () {
    let sentence = document.getElementById('bad').value;
    for (const badWord of badWords) {
        if (sentence.includes(badWord)) {
            alert('Have bad word');
        }
    }
}