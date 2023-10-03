/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { Register } from '../src/components/Register';

describe('Register Component', () => {
  let container;
  beforeEach(() => {
    // Configurar un div de contenedor para cada prueba
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    // Limpiar después de cada prueba
    document.body.removeChild(container);
    container = null;
  });
  it('debería renderizar correctamente', () => {
    const onNavigate = jest.fn(); // Mock para onNavigate
    // Renderizar el componente
    container.appendChild(Register(onNavigate));
    // Verificar que el componente se haya renderizado correctamente
    expect(container.querySelector('form')).toBeTruthy();
    expect(container.querySelector('.Email')).toBeTruthy();
    expect(container.querySelector('.password')).toBeTruthy();
    expect(container.querySelector('button')).toBeTruthy();
  });
  // Puedes escribir más pruebas aquí para probar la funcionalidad del componente
});
