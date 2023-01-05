import React from 'react';
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigations/stack.navigator';



const App = () => {

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
