import {
  onSnapshot, updateDoc, doc, query, orderBy,
}
  from 'firebase/firestore';
import {
  refPost, deletePost, auth, db,
} from '../lib/FireBase';

export const ListPost = () => {
  const section = document.createElement('section');
  section.classList.add('posts-section');
  const postQuery = query(refPost(), orderBy('datePost', 'desc'));

  onSnapshot(postQuery, (querySnapshot) => {
    section.innerHTML = '';
    querySnapshot.forEach((postDoc) => {
      const article = document.createElement('article');
      const textPost = document.createElement('p');
      const likesCount = document.createElement('span');
      const buttonLike = document.createElement('button');
      const btnDeletePost = document.createElement('button');
      const trashIcon = document.createElement('i');
      const heartIcon = document.createElement('i');

      textPost.textContent = postDoc.data().textPost;
<<<<<<< HEAD
      likesCount.textContent = `${postDoc.data().likes.length}`;
      buttonLike.textContent = 'Like';
      buttonLike.id = 'btn-like';
      btnDeletePost.textContent = 'Eliminar';

      article.append(textPost, likesCount, buttonLike, btnDeletePost);
=======
      likesCount.textContent = `Likes: ${postDoc.data().likes.length}`;
      // btnLike.textContent = 'Like';
      // btnDeletePost.textContent = 'Eliminar';
      btnDeletePost.id = 'btn-delete';
      btnDeletePost.classList.add('btn-danger');
      trashIcon.className = 'fa-solid fa-trash';
      trashIcon.style.color = '#41d2c9';
      trashIcon.title = 'Delete';
      heartIcon.className = 'fa-solid fa-heart fa-beat';
      heartIcon.style.color = '#4ed0af';
      heartIcon.title = 'Like';

      article.append(textPost, likesCount, btnLike, btnDeletePost, trashIcon, heartIcon);
>>>>>>> 174a600da5300ea3db49955c160b5f18d0415fff
      section.appendChild(article);
      btnDeletePost.appendChild(trashIcon);
      btnLike.appendChild(heartIcon);
      // btnDeletePost.appendChild(document.createTextNode('Delete'));

      buttonLike.addEventListener('click', () => {
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
        updateDoc(postRef, { likes })
          .then(() => {
          })
          .catch(() => {
          });
      });

      btnDeletePost.addEventListener('click', () => {
        const postId = postDoc.id;
        deletePost(postId)
          .then(() => {
          })
          .catch(() => {
          });
      });
    });
  });
  return section;
};
