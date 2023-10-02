/**
 * @jest-environment jsdom
 */
// comentario especial para especificar el entorno donde se va a realizar//
// las pruebas en este caso environment//
import '@testing-library/jest-dom';
// El entorno "jsdom" es un entorno de emulación del navegador que //
// permite ejecutar JavaScript en un entorno similar al navegador dentro de Node.js//
import { Home } from '../src/components/Home';
import * as FirebaseModule from '../src/lib/FireBase';

describe('Tests for the Google Sign-In functionality', () => {
  test('googleSign se llama cuando se hace clic en el botón de Google', async () => {
    // Crea un mock para onNavigateMock y googleSign
    const onNavigateMock = jest.fn();
    FirebaseModule.googleSign = jest.fn(() => Promise.resolve());

    // Simula el comportamiento del botón de Google Sign-In
    const homeDiv = Home(onNavigateMock);
    const googleButton = homeDiv.querySelector('#googleButton');
    googleButton.click();

    // Espera a que la promesa de signInWithPopup se resuelva
    await Promise.resolve();

    // Verifica que googleSign se haya llamado
    expect(FirebaseModule.googleSign).toHaveBeenCalled();
  });
});