import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Typography} from '../../styles';

const SearchBar = () => {
  return (
    <SafeAreaView>
      <TextInput style={styles.input} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: Colors.ORANGE,
  },
});

export default SearchBar;
