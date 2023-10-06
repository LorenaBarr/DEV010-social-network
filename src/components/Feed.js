import {
  createPost, firestoreQuery, firestoreOnSnapshot, db
} from '../lib/FireBase.js';
import { collection } from 'firebase/firestore';
import { ListPost } from './ListPost.js';

export const postFeed = (onNavigate) => {
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

  const buttonLogout = document.createElement('button');
  buttonLogout.id = 'btn-logout';
  buttonLogout.textContent = 'Logout';
  buttonLogout.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(headingPost);
  HomeDiv.appendChild(inputPost);
  HomeDiv.appendChild(buttonPost);
  HomeDiv.appendChild(buttonLogout);
  HomeDiv.appendChild(ListPost())

  // const readDocs = () => {
  //   const consulta = firestoreQuery(collection(db, 'posts'));
  //   firestoreOnSnapshot(consulta, (querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       const postElement = document.createElement('div');
  //       postElement.classList.add('post');
        
  //       const postData = doc.data();
  //       const postDate = postData.datePost.toDate(); // Convierte la fecha a un objeto Date
  //       const postText = postData.textPost;

  //       const dateElement = document.createElement('p');
  //       dateElement.textContent = `Date: ${postDate.toLocaleString()}`; // Muestra la fecha formateada
  //       postElement.appendChild(dateElement);

  //       const textElement = document.createElement('p');
  //       textElement.textContent = `Idea: ${postText}`;
  //       postElement.appendChild(textElement);

  //       HomeDiv.appendChild(postElement);
  //     });

     

  //     // while (HomeDiv.firstChild) {
  //     //   HomeDiv.removeChild(HomeDiv.firstChild);
  //     // }
  //   });
  // };
  // readDocs();
  return HomeDiv;
};
