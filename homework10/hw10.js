// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

function hideElement() {
    const textEl = document.getElementById('text');

    textEl.style.display = 'none';
}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
function hideSelf() {
    const hideButton = document.getElementsByTagName('button')[1];

    hideButton.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
// чи меньше він ніж 18, та повідомити про це користувача
function checkAge() {
    const age = document.getElementById('age').value;
    const msg = (age < 18) ? 'your age is less then 18 years' : 'your age is more then 18 years';

    window.alert(msg);
}

// - Создайте меню, которое раскрывается/сворачивается при клике
let isOpened = true;

function openMenu() {
    const menuEl = document.getElementById('menu');

    if (isOpened) {
        menuEl.style.display = 'none';
    } else {
        menuEl.style.display = 'block';
    }

    isOpened = !isOpened;
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
const comments = [
    {title : 'comment1', body:'lorem ipsum dolo sit ameti', opened: true},
    {title : 'comment2', body:'lorem ipsum dolo', opened: true},
    {title : 'comment3', body:'lorem ipsum dolo sit', opened: true},
];
const wrapper = document.getElementById('wrapper');

comments.forEach((comment, index) => {
    const commentEl = document.createElement('div');
    const commentTitle = document.createElement('h2');
    const commentBody = document.createElement('p');
    const commentButton = document.createElement('button');

    commentEl.appendChild(commentTitle);
    commentEl.appendChild(commentBody);
    commentEl.appendChild(commentButton);
    commentTitle.textContent = comment.title;
    commentBody.textContent = comment.body;
    commentButton.textContent = `comment ${index + 1} button`;
    wrapper.appendChild(commentEl);
    commentButton.addEventListener('click', event => showBody(index));
});

function showBody(index) {
    const commentBody = document.getElementsByTagName('p')[index];

    commentBody.style.display = 'none';
}
