import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';
import Bar from './Components/Bar';
import ListTrending from './Components/ListTrending';

const DATA = [
  {
    id: '1',
    title: 'Galletas',
    image: require('./images/cookies.jpg') 
  },
  {
    id: '2',
    title: 'Cream Soup',
    image: require('./images/creamSoup.jpg') 
  },
  {
    id: '3',
    title: 'Tacos',
    image: require('./images/tacos.jpg')
  },
  {
    id: '4',
    title: 'Pizza',
    image: require('./images/italianPizza.jpg')
  },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Bar />
      <Text style={styles.text1}>TRENDING</Text>
      <ListTrending data={DATA}/>
      <Text style={styles.text1}>RECENTS</Text>
      <ListTrending data={DATA}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:
    {      
      padding:4,
      backgroundColor:'gray',
      flex:1      
    },
    text1:
    {
      fontSize:20,      
      width:300,
      marginLeft:10,
      marginTop:15,
      color: 'red'
    }
});

export default App;
