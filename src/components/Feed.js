import { createPost } from '../lib/FireBase.js';

export const postFeed = () => {
  const HomeDiv = document.createElement('div');

  const headingPost = document.createElement('h2');
  headingPost.textContent = 'Create Post';

  const inputPost = document.createElement('input');
  inputPost.type = 'text';
  inputPost.id = 'post-text';
  inputPost.placeholder = 'Share your idea';

  const buttonPost = document.createElement('button');
  buttonPost.id = 'btn-post';
  buttonPost.textContent = 'Share';

  HomeDiv.appendChild(headingPost);
  HomeDiv.appendChild(inputPost);
  HomeDiv.appendChild(buttonPost);

  buttonPost.addEventListener('click', () => {
    const newPost = {
      datePost: new Date(),
      textPost: inputPost.value,
    };
    createPost(newPost)
      .then(() => {
        console.log(newPost);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return HomeDiv;
};
