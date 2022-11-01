import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors, Typography} from '../../styles';
import SearchBar from '../../components/atoms/SearchBar';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>This is Search Screen!</Text> */}
      <SearchBar style={styles.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.XIKETIC,
  },
  text: {
    flex: 1,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default SearchScreen;
