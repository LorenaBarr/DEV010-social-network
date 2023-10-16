/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { postFeed } from '../src/components/Feed';
import { ListPost } from '../src/components/ListPost';
import { createPost } from '../src/lib/FireBase.js';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');
jest.mock('../src/lib/FireBase.js', () => ({
  createPost: jest.fn().mockImplementation(() => Promise.resolve()),
}));

describe('Tests for the postfeed component (Ruta)', () => {
  test('postFeed es una funcion', () => {
    expect(typeof postFeed).toBe('function');
  });

  test('listpost es una funcion', () => {
    expect(typeof ListPost).toBe('function');
  });

  test('El botón de Logout lleva a la ruta de home', async () => {
    const onNavigateMock = jest.fn();
    const authsignoutMock = jest.fn(() => Promise.resolve());

    const homeDiv = postFeed(onNavigateMock);
    const buttonLogout = homeDiv.querySelector('#btn-logout');
    buttonLogout.click();

    await authsignoutMock();

    expect(authsignoutMock).toHaveBeenCalledWith(1);
    expect(onNavigateMock).toHaveBeenCalledWith('/');
  });

  test('Hacer clic en el botón "Share" llama a createPost y ListPost', async () => {
    // const createPost = jest.fn().mockImplementation(() => Promise.resolve());
    // const ListPostMock = jest.fn();

    const onNavigateMock = jest.fn();

    // const firebaseMock = {
    //   createPost: createPostMock,
    // };
    createPost.mockResolvedValue({
      datePost: expect.any(Date),
      textPost: 'Contenido del post',
    });
    const homeDiv = postFeed(onNavigateMock);

    const inputPost = homeDiv.querySelector('#post-text');
    inputPost.value = 'Contenido del post';

    const buttonPost = homeDiv.querySelector('#btn-post');
    console.log({ buttonPost });
    buttonPost.click();
    console.log({ createPost });

    // await createPost({
    //   datePost: expect.any(Date),
    //   textPost: 'Contenido del post',
    // });
    expect(createPost).toHaveBeenCalled();
    // createPost({
    //   datePost: expect.any(Date),
    //   textPost: 'Contenido del post',
    // }).then(
    //   () => {
    //     expect(homeDiv.children).toHaveLength(5);
    //   },
    // );
  });
  test('El botón permite dar "like" a una publicación en ListPost', async () => {
    const listPostDiv = document.createElement('div');
    const postComponent = ListPost();
    listPostDiv.appendChild(postComponent);
    document.body.appendChild(listPostDiv);

    const buttonLike = postComponent.querySelector('#btn-like');
    const likesBeforeClick = parseInt(buttonLike.previousElementSibling.textContent, 10);

    buttonLike.click();

    const likesAfterClick = parseInt(buttonLike.previousElementSibling.textContent, 10);

    expect(likesAfterClick).toBe(likesBeforeClick + 1);
    document.body.removeChild(listPostDiv);
  });
});
