import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors, Typography} from '../../styles';
import SearchBar from '../../components/atoms/SearchBar';

const SearchScreen = () => {
  // Whenever we call the state setter function, the SearchScreen component
  // will re-render, and useState will give us the next value of state. That's why
  // we can update state even though it's defined as const.
  const [userInputText, setUserInputText] = useState();
  const [finalText, setFinalText] = useState();

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>This is Search Screen!</Text> */}
      <SearchBar
        userInputText={userInputText}
        setUserInputText={setUserInputText}
        setFinalText={setFinalText}
      />
      <Text style={{color: 'white'}}>{userInputText}</Text>
      <Text style={{color: 'white'}}>Welcome, {finalText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.XIKETIC,
  },
});

export default SearchScreen;
