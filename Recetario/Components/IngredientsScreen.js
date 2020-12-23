import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const IngrdientsScreen = ({text}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{text}</Text>
    </View>
  );
};

export default IngrdientsScreen;
