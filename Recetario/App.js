import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';
import Bar from './Components/Bar';
import List from './Components/List';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Bar />
      <Text>TRENDING</Text>
      <List />
      <Text>TRENDING</Text>
      <Text>TRENDING</Text>
      <Text>TRENDING</Text>
      <Text>TRENDING</Text>
      <Text>TRENDING</Text>
      <Text>TRENDING</Text>
      <Text>TRENDING</Text>

      <Text>TRENDING</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
