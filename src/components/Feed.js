import { createPost, auth } from '../lib/FireBase.js';
import { ListPost } from './ListPost.js';

export const Feed = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const headingPost = document.createElement('h2');
  headingPost.textContent = 'Create Post';

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

  buttonLogout.addEventListener('click', () => onNavigate('/'));

  HomeDiv.append(headingPost, buttonLogout, inputPost, buttonPost, ListPost());

  const listPostsContainer = document.createElement('div');
  listPostsContainer.id = 'list-post';

  HomeDiv.appendChild(listPostsContainer);

  return HomeDiv;
};
