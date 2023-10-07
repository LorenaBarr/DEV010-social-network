import { onSnapshot } from 'firebase/firestore';
import { refPost, deletePost } from '../lib/FireBase';

export const ListPost = () => {
  const section = document.createElement('section');
  onSnapshot(refPost(), (querySnapshot) => {
    section.innerHTML = '';
    querySnapshot.forEach((doc) => {
      // console.log(doc.data().textPost);
      const article = document.createElement('article');
      const textPost = document.createElement('p');
      const btnDeletePost = document.createElement('button');
      textPost.textContent = doc.data().textPost;
      btnDeletePost.textContent = 'Eliminar';
      article.append(textPost, btnDeletePost);
      section.appendChild(article);

      btnDeletePost.addEventListener('click', () => {
        const postId = doc.id;
        deletePost(postId)
          .then(() => {
            console.log(`Documento con ID ${postId} eliminado.`);
          })
          .catch((error) => {
            console.error('Error al eliminar:', error);
          });
      });
    });
  });
  return section;
};
