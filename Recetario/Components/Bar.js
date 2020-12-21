
import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';

const Bar = () => {
  const [search, setSearch] = useState('');
  return (
    <SearchBar
      placeholder="Type Here..."
      onChangeText={setSearch}
      value={search}
    />
  );
};

export default Bar;
