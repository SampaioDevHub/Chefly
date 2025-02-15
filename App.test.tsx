import { render } from '@testing-library/react-native';
import App from './App';
describe('App component', () => {
  it('should render App ', () => {
    // testa a renderização do App
    render(<App />);
  });
});
