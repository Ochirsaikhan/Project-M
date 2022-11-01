// Import screen components from scenes
import HomeScreen from '../scenes/home/HomeScreen';
import LibraryScreen from '../scenes/library/LibraryScreen';
import SearchScreen from '../scenes/search/SearchScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarStyle: {
            position: 'absolute',
          },
          tabBarBackground: () => {},
        }}
      />
    </Tab.Navigator>
  );
};

// This is default export, and one can have only one default export per file
// The naming of import is completely independent in default export and we can use any name we like.
export default MyTabs;
