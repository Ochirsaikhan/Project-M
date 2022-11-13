import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Colors, Typography} from '../../styles';
import SearchBar from '../../components/atoms/SearchBar';
import {fetchSuggestionsAxios} from '../../API/AxiosYouTubeSuggest';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  // Whenever we call the state setter function, the SearchScreen component
  // will re-render, and useState will give us the next value of state. That's why
  // we can update state even though it's defined as const.
  const [userInputText, setUserInputText] = useState('');
  const [finalText, setFinalText] = useState();
  const [suggestionsArray, setSuggestionsArray] = useState([]);

  // Whenever the userInputText state is changed, we call the fetch function from AxiosYouTubeSuggest,
  // which returns a promise with JSON data provided by the API and we use that data to update suggestionsArray stat
  // which will update our UI.
  useEffect(() => {
    const suggestionsPromise = fetchSuggestionsAxios(userInputText);
    suggestionsPromise
      .then(data => setSuggestionsArray(data[1]))
      .catch(error => console.log(error));
  }),
    [userInputText];

  // This is a required component for FlatList component, and it
  // takes an "item" from "data" and renders it into the list
  const renderItem = ({item}) => {
    return (
      <View style={styles.suggestionContainer}>
        <Icon
          name={'search-sharp'}
          color={'white'}
          size={23}
          style={{alignSelf: 'flex-end'}}
        />
        <Text style={styles.suggestionText}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar
        userInputText={userInputText}
        setUserInputText={setUserInputText}
        setFinalText={setFinalText}
      />
      {/* <Text style={{color: 'white'}}>{userInputText}</Text> */}
      {/* <Text style={{color: 'white'}}>Welcome, {finalText}</Text> */}
      <FlatList data={suggestionsArray} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.XIKETIC,
  },
  suggestionContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 12,
  },
  suggestionText: {
    color: 'white',
    fontSize: 23,
    marginLeft: 15,
  },
});

export default SearchScreen;
