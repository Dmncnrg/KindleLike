import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ListBookScreen from './app/screens/ListBook';
import ViewBookScreen from './app/screens/ViewBook';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomeScreen} options={{ title: 'KindleLike' }}/>
        <Stack.Screen name="BookList" component={ListBookScreen} options={{ title: 'List' }}/>
        <Stack.Screen name="ViewBook" component={ViewBookScreen} options={{ title: 'Read' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;