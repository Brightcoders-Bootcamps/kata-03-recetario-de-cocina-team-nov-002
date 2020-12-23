import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Bar from './Bar';
import List from './List';

const DATA = [
  {
    id: '1',
    title: 'Galletas',
    image: require('../images/cookies.jpg'),
    servings: '3',
    ingredients: [
      {
        id: '1',
        nombre: 'Harina',
        cantidad: '280 gramos'
      },
      {
        id: '2',
        nombre: 'Azucar',
        cantidad: '100 gramos'
      },
      {
        id: '3',
        nombre: 'Mantequilla',
        cantidad: '125 gramos'
      },
      {
        id: '4',
        nombre: 'Huevos',
        cantidad: '3'
      },
      {
        id: '5',
        nombre: 'Lecha',
        cantidad: '125 gramos'
      },
    ]
  },
  /*{
    id: '2',
    title: 'Cream Soup',
    image: require('../images/creamSoup.jpg'),
  },
  {
    id: '3',
    title: 'Tacos',
    image: require('../images/tacos.jpg'),
  },
  {
    id: '4',
    title: 'Pizza',
    image: require('../images/italianPizza.jpg'),
  },*/
];

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Bar />
      <Text style={styles.text1}>TRENDING</Text>
      <List data={DATA} navigation={navigation} />
      <Text style={styles.text1}>RECENTS</Text>      
      <List data={DATA} navigation={navigation} />    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    backgroundColor: '#282828',
    flex:1   
  },
  text1: {
    fontSize: 20,
    width: 300,
    marginLeft: 10,
    marginTop: 15,
    color:'white'    
  } 
});

export default HomeScreen;
