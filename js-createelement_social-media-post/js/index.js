console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

//Create the post add class
const post = document.createElement('article');
post.setAttribute("class", "post");

//Create the p add class
const content = document.createElement('p');
content.setAttribute("class","post__content");
content.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'

const footer = document.createElement('footer');
footer.setAttribute("class","post__footer");
const span =document.createElement('span');
span.setAttribute("class","post__username");
span.textContent('@username');
const button =document.createElement('button');
button.setAttribute("type","button");
button.setAttribute("class","post__button");
button.setAttribute("data-js","like_button");
button.textContent('♥ Like');

