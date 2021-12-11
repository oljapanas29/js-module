// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
const body = document.querySelector('body');
const customBlock = document.createElement('div');

customBlock.classList.add('wrap', 'collapse', 'alpha', 'beta');
customBlock.style.background = 'red';
customBlock.style.color = 'yellow';
customBlock.style.fontSize = '20px';
customBlock.textContent = 'Hello Okten!';

body.appendChild(customBlock);

const customBlockClone = customBlock.cloneNode();

customBlockClone.textContent = 'Hello Okten Clone!';
body.appendChild(customBlockClone);

// - Є масив: ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
const menuItems = ['Main','Products','About us','Contacts'];
const menuNode  = document.getElementsByClassName('menu')[0];

menuItems.forEach(item => {
    const menuItem = document.createElement('li');

    menuItem.textContent = item;
    menuNode.appendChild(menuItem);
});

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.forEach(course => {
    const courseBlock = document.createElement('div');

    courseBlock.innerHTML = `<p>${course.title}</p> <span>${course.monthDuration}</span>`;
    body.appendChild(courseBlock);
});

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
coursesAndDurationArray.forEach(course => {
    const courseBlock = document.createElement('div');
    courseBlock.className = 'item';

    // courseBlock.innerHTML = `<h1 class='heading'>${course.title}</h1> <p class='description'>${course.monthDuration}</p>`;
    const elTitle = document.createElement('h1');
    elTitle.className = 'heading';
    elTitle.textContent = course.title;

    const elSubtitle = document.createElement('p');
    elSubtitle.className = 'description';
    elSubtitle.textContent = course.monthDuration;

    courseBlock.appendChild(elTitle);
    courseBlock.appendChild(elSubtitle);
    body.appendChild(courseBlock);
});