/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { Register } from '../src/components/Register';
// Simulamos la función onNavigate
const mockOnNavigate = jest.fn();
describe('Register', () => {
  it('debe crear un elemento de formulario de registro', () => {
    const registerElement = Register(mockOnNavigate);
    // Verificar que el elemento se haya creado correctamente
    expect(registerElement).toBeDefined();
    expect(registerElement.tagName).toBe('DIV');
    // Simular el envío del formulario
    const form = registerElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    // Verificar que la función mockOnNavigate se haya llamado después del envío del formulario
    expect(mockOnNavigate).toHaveBeenCalledWith('/feed');
  });
});