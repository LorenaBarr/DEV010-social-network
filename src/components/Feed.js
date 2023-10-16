import { createPost, auth } from '../lib/FireBase.js';
import { ListPost } from './ListPost.js';

export const postFeed = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.id = 'divpost';
  const headingPost = document.createElement('h2');
  headingPost.textContent = 'Create Post';
  headingPost.id = 'createPost';
  const buttonLogout = document.createElement('button');
  buttonLogout.id = 'btn-logout';
  buttonLogout.textContent = 'Logout';

  const inputPost = document.createElement('input');
  inputPost.id = 'post-text';
  inputPost.placeholder = 'Share your idea';

  const buttonPost = document.createElement('button');
  buttonPost.id = 'btn-post';
  buttonPost.textContent = 'Share';

  buttonPost.addEventListener('click', () => {
    const newPost = {
      datePost: new Date(),
      textPost: inputPost.value,
      uid: auth.currentUser ? auth.currentUser.uid : null,
      likes: [],
    };
    inputPost.value = '';

    createPost(newPost)
      .then(() => {})
      .catch(() => {});
  });

  buttonLogout.id = 'btn-logout';
  buttonLogout.textContent = 'Logout';
  buttonLogout.addEventListener('click', () => {
    auth.signOut().then(() => {
      onNavigate('/');
    });
  });

  HomeDiv.appendChild(headingPost);
  HomeDiv.appendChild(inputPost);
  HomeDiv.appendChild(buttonPost);
  HomeDiv.appendChild(buttonLogout);
  HomeDiv.appendChild(ListPost());

  return HomeDiv;
};
