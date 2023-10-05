/* eslint-disable no-import-assign */
/**
 * @jest-environment jsdom
 */
import { JSDOM } from 'jsdom';
import '@testing-library/jest-dom';
import * as authentication from '../src/lib/FireBase';
import { Login } from '../src/components/Login';

const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;

describe('test de login', () => {
  beforeEach(() => {
    authentication.signInWithEmailAndPassword = jest.fn();
  });

  it('should return home with button', () => {
    const onNavigate = jest.fn();
    const loginComponent = Login(onNavigate);
    const buttonHome = loginComponent.querySelector('#buttonHome');

    buttonHome.click();

    expect(onNavigate).toHaveBeenCalledWith('/');
  });

  it('credentials valid should log in and navigate to "/feed"', async () => {
    const loginSpy = jest.spyOn(authentication, 'login');
    loginSpy.mockResolvedValue({ user: { email: 'example@email.com' } });

    const onNavigate = jest.fn();
    const loginComponent = Login(onNavigate);
    loginComponent.querySelector('#inputEmail').value = 'example@email.com';
    loginComponent.querySelector('#inputPassword').value = '123456';
    const loginButton = loginComponent.querySelector('#buttonLogIn');

    loginButton.click();

    await Promise.resolve();

    expect(loginSpy).toHaveBeenCalledWith('example@email.com', '123456');
    expect(onNavigate).toHaveBeenCalledWith('/feed');

    loginSpy.mockRestore();
  });
});
