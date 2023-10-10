import {
  onSnapshot, updateDoc, doc, query, orderBy,
}
  from 'firebase/firestore';
import {
  refPost, deletePost, auth, db,
} from '../lib/FireBase';

export const ListPost = () => {
  const section = document.createElement('section');
  const postQuery = query(refPost(), orderBy('datePost', 'desc'));

  onSnapshot(postQuery, (querySnapshot) => {
    section.innerHTML = '';
    querySnapshot.forEach((postDoc) => {
      const article = document.createElement('article');
      const textPost = document.createElement('p');
      const likesCount = document.createElement('span');
      const btnLike = document.createElement('button');
      const btnDeletePost = document.createElement('button');

      textPost.textContent = postDoc.data().textPost;
      likesCount.textContent = `Likes: ${postDoc.data().likes.length}`;
      btnLike.textContent = 'Like';
      btnDeletePost.textContent = 'Eliminar';

      article.append(textPost, likesCount, btnLike, btnDeletePost);
      section.appendChild(article);

      btnLike.addEventListener('click', () => {
        const postId = postDoc.id;
        const currentUserUid = auth.currentUser.uid; // usuario actual
        const likes = postDoc.data().likes;

        if (likes.includes(currentUserUid)) {
          const index = likes.indexOf(currentUserUid);
          if (index > -1) {
            likes.splice(index, 1);
          }
        } else {
          likes.push(currentUserUid);
        }

        const postRef = doc(db, 'postFeed', postId);
        updateDoc(postRef, { likes: likes })
          .then(() => {
            console.log('Like actualizado');
          })
          .catch((error) => {
            console.error('Error al actualizar', error);
          });
      });

      btnDeletePost.addEventListener('click', () => {
        const postId = postDoc.id;
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
