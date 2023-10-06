import { onSnapshot } from 'firebase/firestore';
import { refPost } from '../lib/FireBase';

export const ListPost = () => {
  const section = document.createElement('section');
//   const h2 = document.createElement('h2');
//   h2.textContent = 'Listaaaa';

  onSnapshot(refPost(), (querySnapshot) => {
    const cities = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data().textPost);
      const textPost = document.createElement('p');
      textPost.textContent = doc.data().textPost;
      section.append(textPost)
    });
    //   console.log("Current cities in CA: ", cities.join(", "));
  });
//   section.append(h2);
  return section;
};
