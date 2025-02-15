import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  startButton: {
    backgroundColor: '#FF6E40',
    borderRadius: 48,
    paddingVertical: 22,
    paddingHorizontal: 26,
  },
  imageBackground: {
    height: height * 0.75, // Ajuste para 45% da altura da tela
    width: width, // A largura ocupará 100% da tela
    paddingTop: -20,
    paddingBottom: 20,
    marginBottom: 25,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between', // Distribui o conteúdo para deixar o botão mais alto
    paddingVertical: 20, // Adiciona um pouco de espaçamento superior e inferior
  },
  title: {
    color: '#FF6E40',
    fontSize: 40,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 76,
  },
  subtitle: {
    color: '#1F1C05',
    fontSize: 16,
    textAlign: 'center',
  },
  prompt: {
    color: '#1A1A1A',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 22,
  },
  description: {
    color: '#808080',
    fontSize: 16,
    marginBottom: 13,
    marginHorizontal: 49,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 5.5, // Ajuste para posicionar o botão mais para cima
    marginBottom: 40, // Espaço inferior para não colar no fundo
  },
});
