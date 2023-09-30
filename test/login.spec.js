import { Login } from '../src/components/Login';

describe('should return button navigate to "/"', () => {
  const onNavigate = jest.fn(); // crea una función simuladas
  const loginComponent = Login(onNavigate);
  const buttonHome = loginComponent.querySelector('button');

  buttonHome.click();

  expect(onNavigate).toHaveBeenCalledWith('/');
});

describe('myFunction', () => {
    it('debería ser una función', () => {
      expect(typeof myFunction).toBe('function');
    });
  });
  