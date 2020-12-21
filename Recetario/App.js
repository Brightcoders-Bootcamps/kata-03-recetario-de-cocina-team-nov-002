import React, { Component, useState } from 'react';
import {View, Text} from 'react-native'
import Bar from './Components/Bar';
import List from './Components/List';

const App = () => {
  const [search, setSearch] = useState('');
  return (
    <View>
      <Bar />
      <List />
    </View>
  );
};

export default App;