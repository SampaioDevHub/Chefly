import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from 'screens/sign-up/page';
import WelcomePage from 'screens/welcome-inicial/page';
import  WelcomeScreen  from 'screens/welcome/page';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Welcome-inicial" component={WelcomePage}/>
        <Stack.Screen name="Signup" component={Signup}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
