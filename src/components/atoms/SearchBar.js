import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Typography} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = props => {
  return (
    <SafeAreaView>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        // value={props.userInputText}
        onChangeText={userText => props.setUserInputText(userText)}
        onSubmitEditing={finalText =>
          props.setFinalText(finalText.nativeEvent.text)
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: Colors.ORANGE,
    height: 40,
    width: '95%',
    borderRadius: 8,
    marginTop: 10,
    padding: 10,
    alignSelf: 'center',
  },
});

export default SearchBar;
