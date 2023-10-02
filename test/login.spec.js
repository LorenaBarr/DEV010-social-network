/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { Login } from '../src/components/Login';

describe('click "Return to home" button navigate to "/"', () => {
  it('should return home with button', () => {
    const onNavigate = jest.fn();
    const loginComponent = Login(onNavigate);
    const buttonHome = loginComponent.querySelector('button');

    buttonHome.click();

    expect(onNavigate).toHaveBeenCalledWith('/');
  });

  it('submit login form with valid credentials should log in and navigate to "/feed"', () => {
    const onNavigate = jest.fn();
    const loginComponent = Login(onNavigate);

    const inputEmail = loginComponent.querySelector('input.email');
    const inputPassword = loginComponent.querySelector('input.password');
    const buttonLogin = loginComponent.querySelector('button.btnLogin');

    inputEmail.value = 'email@example.com';
    inputPassword.value = 'password';

    buttonLogin.click();

    return new Promise((resolve) => {
      setTimeout(() => {
        expect(onNavigate).toHaveBeenCalledWith('/feed');
        resolve();
      }, 1000);
    });
  });

  it('login form with invalid credetencials should show an error', () => {
    const alertSpy = jest.spyOn(window, 'alert');

    const loginComponent = Login(() => {});
    const loginForm = loginComponent.querySelector('form');
    const inputEmail = loginComponent.querySelector('input.email');
    const inputPassword = loginComponent.querySelector('input.password');

    inputEmail.value = 'email_invalid';
    inputPassword.value = 'password_invalid';

    loginForm.dispatchEvent(new Event('submit'));

    expect(alertSpy).toHaveBeenCalledWith('Verificar datos');

    alertSpy.mockRestore();
  });
});

// describe('should return button navigate to "/"', () => {
//   const onNavigate = jest.fn(); // crea una función simuladas
//   const loginComponent = Login(onNavigate);
//   const buttonHome = loginComponent.querySelector('button');

//   buttonHome.click();

//   expect(onNavigate).toHaveBeenCalledWith('/');
// });
