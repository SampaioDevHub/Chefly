import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../types/navigation.type';
import { Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export default function WelcomeScreen() {
  const navigation = useNavigation<NavigationProps>();

  const handleNavigateSignUp = () => {
    navigation.replace('SignUp');
  };

  const handleNavigateSignIn = () => {
    navigation.replace('SignIn');
  };

  return (
    <SafeAreaView style={styles.container} testID="WelcomeScreen">
      <ScrollView style={styles.scrollView}>
        <Image
          source={{
            uri: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d65bc9e-a13d-437a-90c3-b94a28d5408c',
          }}
          resizeMode={'stretch'}
          style={styles.image}
        />
        <Text style={styles.text}>{'Crie uma conta'}</Text>
        <Text style={styles.text2}>{'Ganhe 3 aulas de culinária grátis todos os dias!'}</Text>
        <TouchableOpacity style={styles.buttonRow} onPress={() => alert('Apple!')}>
          <Image
            source={{
              uri: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32610e03-3d7f-4654-bcb5-e0c83a4d579b',
            }}
            resizeMode={'stretch'}
            style={styles.image2}
          />
          <Text style={styles.text3}>{'Continuar com a Apple'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRow2} onPress={() => alert('Google!')}>
          <Image
            source={{
              uri: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9162955-4962-43ab-9377-9712806e522b',
            }}
            resizeMode={'stretch'}
            style={styles.image2}
          />
          <Text style={styles.text4}>{'Continuar com o Google'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRow3}
          onPress={handleNavigateSignUp}
          testID="SignUpButton">
          <Image
            source={{
              uri: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ee34a16-dcf8-4c76-9e58-d6101e0b36af',
            }}
            resizeMode={'stretch'}
            style={styles.image2}
          />
          <Text style={styles.text3}>{'Continuar com e-mail'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigateSignIn}>
          <Text style={styles.text5}>{'Já tem uma conta? Entrar'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
