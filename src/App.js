import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './navigations/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
