const user = JSON.parse(localStorage.getItem('currentUser'));

if(!user) {
    const locationPath = window.location.href;
    const navigationPath = locationPath.replace('user-details', 'index');

    location.href = navigationPath;
} else {
    generatePage();
}

const postsEl = document.getElementsByClassName('posts')[0];
let posts = [];

function generatePage() {
    const mainSection = document.getElementsByTagName('main')[0];
    // address: {street: 'Victor Plains', suite: 'Suite 879', city: 'Wisokyburgh', zipcode: '90566-7771', geo: {…}}
    // company: {name: 'Deckow-Crist', catchPhrase: 'Proactive didactic contingency', bs: 'synergize scalable supply-chains'}
    // email: "Shanna@melissa.tv"
    // id: 2
    // name: "Ervin Howell"
    // phone: "010-692-6593 x09125"
    // username: "Antonette"
    // website: "anastasia.net"

    const wrapper = document.createElement('div');
    const userName = document.createElement('h1');
    const userDetails = document.createElement('div');
    const userAddress = document.createElement('div')
    const postsAction = document.createElement('button');
    const userId = document.createElement('p');
    const userPhone = document.createElement('p');
    const userEmail = document.createElement('p');
    const userWebsite = document.createElement('p');
    const userCompany = document.createElement('p');
    const zipCode = document.createElement('p');
    const city = document.createElement('p');
    const street = document.createElement('p');
    const geo = document.createElement('p');

    wrapper.classList.add('wrapper');
    wrapper.classList.add('wrapper--full');
    postsAction.classList.add('action-button');
    postsAction.classList.add('action-button--full');

    userName.textContent = user.username;
    userId.textContent = user.id;
    userPhone.textContent = user.phone;
    userEmail.textContent = user.email;
    userWebsite.textContent = user.website;
    userCompany.textContent = user.company.name;
    zipCode.textContent = user.address.zipcode;
    city.textContent = user.address.city;
    street.textContent = `${user.address.street}, ${user.address.suite}`;
    geo.textContent = `geo: ${user.address.geo.lat}, ${user.address.geo.lng}`;
    postsAction.textContent = 'Posts of current user';

    postsAction.addEventListener('click', () => loadPosts());

    userDetails.appendChild(userId);
    userDetails.appendChild(userPhone);
    userDetails.appendChild(userEmail);
    userDetails.appendChild(userWebsite);
    userDetails.appendChild(userCompany);
    userAddress.appendChild(zipCode);
    userAddress.appendChild(city);
    userAddress.appendChild(street);
    userAddress.appendChild(geo);
    wrapper.appendChild(userName);
    wrapper.appendChild(userDetails);
    wrapper.appendChild(userAddress);
    wrapper.appendChild(postsAction);
    mainSection.appendChild(wrapper);
}

function loadPosts() {
    if(posts.length === 0) {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then(value => value.json())
            .then(value => {
                posts = value;
                for (const postItem of value) {
                    const postEl = document.createElement('div');
                    const postTitle = document.createElement('h4');
                    const postAction = document.createElement('button');

                    postEl.classList.add('post');
                    postAction.classList.add('action-button');

                    postTitle.textContent = postItem.title;
                    postAction.textContent = 'View Post';
                    postAction.addEventListener('click', () => loadPostDetails(postItem));
                    postEl.appendChild(postTitle);
                    postEl.appendChild(postAction);
                    postsEl.appendChild(postEl);
                }
            });
    }
}

function loadPostDetails(postItem) {
    const locationPath = window.location.href;

    location.href = locationPath.replace('user-details', 'post-details');
    localStorage.setItem('post', JSON.stringify(postItem));
}

