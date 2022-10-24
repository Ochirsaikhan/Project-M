import React from 'react';
import {View, Text} from 'react-native';
import {Typography, Colors} from '../../styles/index';

const HomeScreen = () => {
  return (
    <View>
      <Text
        style={{
          fontFamily: Typography.FONT_FAMILY_EXTRA_BOLD,
          fontSize: 32,
          color: Colors.XIKETIC,
        }}>
        This is Home Screen!
      </Text>
    </View>
  );
};

export default HomeScreen;
