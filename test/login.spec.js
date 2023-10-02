/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { Login } from '../src/components/Login';
// import fetch from 'node-fetch';
// globalThis.fetch = fetch;

describe('it a function should enter to feed by email and password, and return to home', () => {
  it('should return home with button', () => {
    const onNavigate = jest.fn();
    const loginComponent = Login(onNavigate);
    const buttonHome = loginComponent.querySelector('#buttonHome');

    buttonHome.click();

    expect(onNavigate).toHaveBeenCalledWith('/');
  });

  it('credentials valid should log in and navigate to "/feed"', async () => {
    const onNavigate = jest.fn();
    const loginComponent = Login(onNavigate);
    const inputEmail = loginComponent.querySelector('#inputEmail');
    const inputPassword = loginComponent.querySelector('#inputPassword');
    const buttonLogin = loginComponent.querySelector('#buttonLogIn');

    inputEmail.value = 'email@example.com';
    inputPassword.value = 'password';

    buttonLogin.click();

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 10000);
    });

    expect(onNavigate).toHaveBeenCalledWith('/feed');
  });

  it('login form with invalid credetencials should show an error', () => {
    const alertSpy = jest.spyOn(window, 'alert');

    const loginComponent = Login(() => {});
    const loginForm = loginComponent.querySelector('#loginForm');
    const inputEmail = loginComponent.querySelector('#inputEmail');
    const inputPassword = loginComponent.querySelector('#inputPassword');

    inputEmail.value = 'email_invalid';
    inputPassword.value = 'password_invalid';

    loginForm.dispatchEvent(new Event('submit'));

    expect(alertSpy).toHaveBeenCalledWith('Verificar datos');

    alertSpy.mockRestore();
  });
});
