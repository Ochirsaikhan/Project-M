// Import screen components from scenes
import HomeScreen from '../scenes/home/HomeScreen';
import LibraryScreen from '../scenes/library/LibraryScreen';
import SearchScreen from '../scenes/search/SearchScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../styles';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: Colors.REBECCA}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="musical-notes" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        // Screen component accepts `options` prop which is either an object or
        // a function that returns an object, that contains various configuration options.
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="search-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// This is default export, and one can have only one default export per file
// The naming of import is completely independent in default export and we can use any name we like.
export default MyTabs;
