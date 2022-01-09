const postObj = JSON.parse(localStorage.getItem('post'));

if(!postObj) {
    const locationPath = window.location.href;

    location.href = locationPath.replace('post-details', 'user-details');
} else {
    buildPostPage();
}

function buildPostPage() {
    const mainSection = document.getElementsByTagName('main')[0];
    const postTitle = document.createElement('h1');
    const postDescription = document.createElement('p');
    const commentsTitle = document.createElement('h3');
    const commentsWrapper = document.createElement('div');

    postTitle.classList.add('post-title');
    postDescription.classList.add('post-description');
    commentsTitle.classList.add('block');
    commentsWrapper.classList.add('posts');

    postTitle.textContent = postObj.title;
    postDescription.textContent = postObj.body;
    commentsTitle.textContent = 'Comments:';
    mainSection.appendChild(postTitle);
    mainSection.appendChild(postDescription);
    mainSection.appendChild(commentsTitle);
    mainSection.appendChild(commentsWrapper);

    fetch(`https://jsonplaceholder.typicode.com/posts/${postObj.id}/comments`)
        .then(value => value.json())
        .then(value => {
            for (const commentItem of value) {
                const commentEl = document.createElement('div');
                const commentName = document.createElement('h4');
                const commentDescription = document.createElement('p');
                const commentAuthor = document.createElement('span');

                commentName.textContent = commentItem.name;
                commentDescription.textContent = commentItem.body;
                commentAuthor.textContent = commentItem.email;
                commentEl.classList.add('comment');
                commentEl.classList.add('wrapper');
                commentAuthor.classList.add('author');

                commentEl.appendChild(commentName);
                commentEl.appendChild(commentDescription);
                commentEl.appendChild(commentAuthor);
                commentsWrapper.appendChild(commentEl);
            }
        });
}