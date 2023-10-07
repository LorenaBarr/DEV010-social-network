import { createPost } from '../lib/FireBase.js';
import { ListPost } from './ListPost.js';

export const Feed = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const headingPost = document.createElement('h2');
  headingPost.textContent = 'Create Post';

  const textareaPost = document.createElement('textarea');
  textareaPost.cols = 24;
  textareaPost.rows = 5;
  textareaPost.id = 'post-text';
  textareaPost.placeholder = 'Share your idea';

  const buttonPost = document.createElement('button');
  buttonPost.id = 'btn-post';
  buttonPost.textContent = 'Share';
  buttonPost.addEventListener('click', () => {
    const newPost = {
      datePost: new Date(),
      textPost: textareaPost.value,
    };
    createPost(newPost)
      .then(() => {
        console.log(newPost);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const buttonLogout = document.createElement('button');
  buttonLogout.id = 'btn-logout';
  buttonLogout.textContent = 'Logout';
  buttonLogout.addEventListener('click', () => onNavigate('/'));

  HomeDiv.append(headingPost, textareaPost, buttonPost, buttonLogout, ListPost());

  return HomeDiv;
};
