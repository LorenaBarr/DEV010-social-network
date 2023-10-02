/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { Home } from '../src/components/Home';

describe('Tests for the Home component (Rutas)', () => {
  // Es una función de Home
  test('Home es una funcion', () => {
    expect(typeof Home).toBe('function');
  });

  // Funcionalidad de rutas
  test('El botón de Log In lleva a la ruta de login', () => {
    const onNavigateMock = jest.fn();
    const homeDiv = Home(onNavigateMock);
    const loginButton = homeDiv.querySelector('#loginButton');
    loginButton.click();
    expect(onNavigateMock).toHaveBeenCalledWith('/login');
  });

  test('El botón de Sign Up lleva a la ruta de registro', () => {
    const onNavigateMock = jest.fn();
    const homeDiv = Home(onNavigateMock);
    const registerButton = homeDiv.querySelector('#registerButton');
    registerButton.click();
    expect(onNavigateMock).toHaveBeenCalledWith('/register');
  });
});