/* eslint-disable no-import-assign */
/**
 * @jest-environment jsdom
 */
import { JSDOM } from 'jsdom';
import { Feed } from '../src/components/Feed';
//import { ListPost } from '../src/components/ListPost';

const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;

describe('test of feed', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should render a "Create Post" button', () => {
    const onNavigate = jest.fn();
    const feedComponent = Feed(onNavigate);
    container.appendChild(feedComponent);

    const createPostButton = container.querySelector('#btn-post');
    expect(createPostButton).toBeTruthy();
  });

  it('should create a new post when clicking the "Share" button', () => {
    const createPostMock = jest.fn();

    const rootDiv = document.createElement('div');
    document.body.appendChild(rootDiv);

    const onNavigate = jest.fn();

    const feedComponent = Feed(onNavigate, createPostMock);
    rootDiv.appendChild(feedComponent);

    const textarea = container.querySelector('#post-text');
    textarea.value = 'This is a test post';

    const shareButton = rootDiv.querySelector('#btn-post');
    shareButton.click();

    expect(createPostMock).toHaveBeenCalledWith({
      datePost: expect.any(Date),
      textPost: 'This is a test post',
      uid: expect.any(String),
      likes: [],
    });
    document.body.removeChild(rootDiv);
  });
});
