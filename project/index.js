const mainSection = document.getElementsByTagName('main')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const userItem of value) {
            const wrapper = document.createElement('div');
            const userDetails = document.createElement('div');
            const idElement = document.createElement('span');
            const nameElement = document.createElement('h2');
            const userAction = document.createElement('button');

            wrapper.classList.add('wrapper');
            userDetails.classList.add('user-details');
            userAction.classList.add('action-button');

            idElement.textContent = userItem.id;
            nameElement.textContent = userItem.name;
            userAction.textContent = 'View details';

            userAction.addEventListener('click', () => detailsNavigate(userItem));

            wrapper.appendChild(userDetails);
            wrapper.appendChild(userAction);
            mainSection.appendChild(wrapper);
            userDetails.append(idElement,nameElement)
        }
    });

function detailsNavigate(user) {
    const locationPath = window.location.href;

    location.href = locationPath.replace('index', 'user-details');
    localStorage.setItem('currentUser', JSON.stringify(user));
}
