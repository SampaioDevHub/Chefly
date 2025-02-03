import { fireEvent, render, waitFor, screen, act } from '@testing-library/react-native';
import Routes from '../routes';
describe('Navigation tests', () => {
  it('should navigate to Welcome Screen', async () => {
    // renderiza o componente <Routes/>
    render(<Routes />);

    // verifica se o botão 'Comece a cozinhar' está em tela
    const ComeceACozinharButton = await screen.findByText('Comece a cozinhar');
    expect(ComeceACozinharButton).toBeTruthy();

    // clica no botão
    fireEvent.press(ComeceACozinharButton);

    // verifica se a navegação para a 'WelcomeScreen'foi feita
    await waitFor(() => screen.getByTestId('WelcomeScreen'));
    expect(screen.getByTestId('WelcomeScreen')).toBeTruthy();
  });
});
