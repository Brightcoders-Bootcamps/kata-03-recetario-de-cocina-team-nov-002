import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Bar from './Bar';
import List from './List';

const DATA = [
  {
    id: '1',
    title: 'Galletas',
    image: require('../images/cookies.jpg'),
    ingredients: {
      harina: '280 gramos',
      azucar: '100 gramos',
      mantequilla: '125 gramos',
      huevos: '1',
    },
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
    backgroundColor: 'gray',
    flex: 1,
  },
  text1: {
    fontSize: 20,
    width: 300,
    marginLeft: 10,
    marginTop: 15,
    color: 'red',
  },
});

export default HomeScreen;
