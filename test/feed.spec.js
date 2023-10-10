/* eslint-disable no-import-assign */
/**
 * @jest-environment jsdom
 */
import { JSDOM } from 'jsdom';
import { Feed } from '../src/components/Feed';
// import { ListPost } from '../src/components/ListPost';

const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;

describe('test of feed', () => {
  let createPostMock;

  beforeEach(() => {
    createPostMock = jest.fn();
  });

  afterEach(() => {
    createPostMock.mockClear();
  });

  it('should creates a new post when clicking button', async () => {
    const rootDiv = document.createElement('div');
    document.body.appendChild(rootDiv);

    const onNavigate = jest.fn();

    const feedComponent = Feed(onNavigate, createPostMock);
    rootDiv.appendChild(feedComponent);

    const inputPost = rootDiv.querySelector('#post-text');
    inputPost.value = 'This is a test post';

    const btnPost = rootDiv.querySelector('#btn-post');
    btnPost.click();

    await Promise.resolve();

    expect(createPostMock).toHaveBeenCalledWith({
      datePost: expect.any(Date),
      textPost: 'This is a test post',
      uid: expect.any(String),
      likes: [],
    });
    document.body.removeChild(rootDiv);
  });
});

// describe('test of feed', () => {
//   let container;

//   beforeEach(() => {
//     container = document.createElement('div');
//     document.body.appendChild(container);
//   });

//   afterEach(() => {
//     document.body.removeChild(container);
//   });

//   it('should creates a new post when clicking button', () => {
//     const onNavigate = jest.fn();
//     const feedComponent = Feed(onNavigate);
//     container.appendChild(feedComponent);

//     const createPostButton = container.querySelector('#btn-post');
//     expect(createPostButton).toBeTruthy();
//   });

//   it('should create a new post when clicking the "Share" button', () => {
//     const createPostMock = jest.fn();

//     const rootDiv = document.createElement('div');
//     document.body.appendChild(rootDiv);

//     const onNavigate = jest.fn();

//     const feedComponent = Feed(onNavigate, createPostMock);
//     rootDiv.appendChild(feedComponent);

//     const textarea = container.querySelector('#post-text');
//     if (textarea) {
//       textarea.value = 'This is a test post';
//     } else {
//       console.error('Textarea with id "post-text" not found in the DOM');
//     }

//     const shareButton = rootDiv.querySelector('#btn-post');
//     shareButton.click();

//     expect(createPostMock).toHaveBeenCalledWith({
//       datePost: expect.any(Date),
//       textPost: 'This is a test post',
//       uid: expect.any(String),
//       likes: [],
//     });
//     document.body.removeChild(rootDiv);
//   });
// });
