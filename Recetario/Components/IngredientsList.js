import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const Item = ({title, image, navigation, servings, ingredients}) => (
    <View>
        <Text>Hola mundo</Text>
    </View>
);

const List = ({data}) => {
  const renderItem = ({item}) => (
    <Item title={item.title} image={item.image} />
  );
  return (
    <FlatList
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
  imageStyles: {
    width: 100,
    height: 110,
    borderRadius: 10,
  },
});

export default List;
