import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar,Image,TouchableOpacity} from 'react-native';



const Item = ({title,image}) => ( 
  <TouchableOpacity style={styles.item}> 
    <Image style={styles.imageStyles} source={image}></Image> 
    <Text>{title}</Text>
  </TouchableOpacity>
);

const ListTrending = ({data}) => {
  const renderItem = ({item}) => <Item title={item.title} image={item.image}  />;
  return (
    <FlatList
      horizontal={true}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {    
    paddingHorizontal: 10,
    paddingVertical: 1,
    marginVertical: 1,
    marginHorizontal: 1,    
  },
  title: {
    fontSize: 32,
  }, 
  imageStyles:
  {
    width:100,
    height:110,
    borderRadius:10
  }
});

export default ListTrending;
