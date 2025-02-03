import type { StackNavigationProp } from '@react-navigation/stack';

// Tipagem das telas
export type RootStackParamList = {
  InitialScreen: undefined;
  WelcomeScreen: undefined;
  SignUp: undefined;
  SignIn: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList, 'InitialScreen'>;
