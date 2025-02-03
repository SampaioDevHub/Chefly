import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '~/types/navigation.type';

import InitialScreen from '../screens/InicialScreen/page';
import SignUp from '../screens/SignUp/page';
import SignIn from '../screens/SignIn/page';
import WelcomeScreen from '../screens/WelcomeScreen/page';

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="InitialScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
