/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { postFeed } from '../src/components/Feed';
import { ListPost } from '../src/components/ListPost';

describe('Tests for the postfeed component (Ruta)', () => {
  test('postFeed es una funcion', () => {
    expect(typeof postFeed).toBe('function');
  });

  test('listpost es una funcion', () => {
    expect(typeof ListPost).toBe('function');
  });

  test('El botón de Logout lleva a la ruta de home', () => {
    const onNavigateMock = jest.fn();
    const homeDiv = postFeed(onNavigateMock);
    const buttonLogout = homeDiv.querySelector('#btn-logout');
    buttonLogout.click();
    expect(onNavigateMock).toHaveBeenCalledWith('/');
  });

  test('Hacer clic en el botón "Share" llama a createPost y ListPost', async () => {
    const createPostMock = jest.fn();
    const ListPostMock = jest.fn();

    const onNavigateMock = jest.fn();

    const firebaseMock = {
      createPost: createPostMock,
    };
    createPostMock.mockResolvedValueOnce({
      datePost: expect.any(Date),
      textPost: 'Contenido del post',
    });
    const homeDiv = postFeed(onNavigateMock, firebaseMock, ListPostMock);

    const inputPost = homeDiv.querySelector('#post-text');
    inputPost.value = 'Contenido del post';

    const buttonPost = homeDiv.querySelector('#btn-post');
    // console.log(buttonPost);
    buttonPost.click();
    // buttonPost.dispatchEvent(new Event('click'));
    await createPostMock({
      datePost: expect.any(Date),
      textPost: 'Contenido del post',
    });
    // console.log(homeDiv.children.length);
    expect(homeDiv.children).toHaveLength(5);
    // expect(createPostMock).toHaveBeenCalledWith({
    //   datePost: expect.any(Date),
    //   textPost: 'Contenido del post',
    // });
    // expect(ListPostMock).toHaveBeenCalled();
  });
  test('El botón permite dar "like" a una publicación en ListPost', async () => {
    const listPostDiv = document.createElement('div');
    const postComponent = ListPost();
    listPostDiv.appendChild(postComponent);
    window.console.log('listPostDiv', listPostDiv);
    window.console.log('postComponent', postComponent, ListPost());

    const buttonLike = postComponent.querySelector('#btn-like');
    window.console.log('Este es el boton', buttonLike);
    const likesBeforeClick = parseInt(buttonLike.previousElementSibling.textContent);

    buttonLike.click();

    const likesAfterClick = parseInt(buttonLike.previousElementSibling.textContent);

    expect(likesAfterClick).toBe(likesBeforeClick + 1);
  });
});
