import { createPost, auth } from '../lib/FireBase.js';
import { ListPost } from './ListPost.js';

export const Feed = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const headingPost = document.createElement('h2');
  headingPost.textContent = 'Create Post';

  const inputPost = document.createElement('input');
  inputPost.id = 'post-text';
  inputPost.placeholder = 'Share your idea';

  const uidPost = auth.currentUser ? auth.currentUser.uid : null;
  const buttonPost = document.createElement('button');
  buttonPost.id = 'btn-post';
  buttonPost.textContent = 'Share';

  buttonPost.addEventListener('click', () => {
    const newPost = {
      datePost: new Date(),
      textPost: inputPost.value,
      uid: uidPost,
      likes: [],
    };
    inputPost.value = '';

    createPost(newPost)
      .then(() => {
      })
      .catch(() => {
      });
  });

  const buttonLogout = document.createElement('button');
  buttonLogout.id = 'btn-logout';
  buttonLogout.textContent = 'Logout';
  buttonLogout.addEventListener('click', () => onNavigate('/'));

  HomeDiv.append(headingPost, inputPost, buttonPost, buttonLogout, ListPost());

  return HomeDiv;
};
