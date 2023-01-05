import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameScreen from '../components/gameScreen';
import Index from '../components';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Index"
        component={Index}
      />

      <Stack.Screen
        name="GameScreen"
        component={GameScreen}
      />
    </Stack.Navigator>
  );
};
export default MyStack;