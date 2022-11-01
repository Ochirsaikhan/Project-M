import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './navigations/Navigation';

const App = () => {
  return (
    // This navigation container is a component that is responsible for
    // for managing the navigation state and navigation tree. It is a
    // top-level component responsible for wrapping navigators.
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
