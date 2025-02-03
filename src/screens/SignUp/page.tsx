import { View, Text } from 'react-native';

import { styles } from './styles';

export default function SignUp() {
  return (
    <View style={styles.container} testID="SignUpScreen">
      <Text>Tela de Cadastro</Text>
    </View>
  );
}
