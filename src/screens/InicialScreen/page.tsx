import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../types/navigation.type';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

import { styles } from './styles';

export default function InitialScreen() {
  const navigation = useNavigation<NavigationProps>();

  const handleNavigateLogin = () => {
    navigation.replace('WelcomeScreen');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={{
            uri: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a396b9ce-5b84-4eb9-88c7-155e1c800019',
          }}
          resizeMode={'contain'}
          style={styles.imageBackground}>
          <Text style={styles.title}>{'Chefly'}</Text>
          <Text style={styles.subtitle}>{'Comida saborosa para sua família'}</Text>
        </ImageBackground>
        <Text style={styles.prompt}>{'Pronto para servir comida saborosa?'}</Text>
        <Text style={styles.description}>
          {
            'BeautyFood fornece um tutorial de explicação clara com as melhores práticas de culinária completas apenas para você.'
          }
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.startButton} onPress={handleNavigateLogin}>
            <Text style={styles.buttonText}>{'Comece a cozinhar'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
