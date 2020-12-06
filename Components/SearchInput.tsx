import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {SearchBar} from 'react-native-elements';

type Props = {
  onPress?: () => void;
};

const SearchInput: React.FC<Props> = ({onPress}) => {
  const [term, setTerm] = useState('');

  return (
    <TouchableHighlight style={styles.container} onPress={onPress}>
      <SearchBar
        platform="android"
        containerStyle={styles.searchBarContainer}
        placeholder="Search people"
        onChangeText={(v) => setTerm(v)}
        value={term}
      />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  searchBarContainer: {
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.64,
    shadowRadius: 3.27,

    elevation: 4,
  },
});

export default SearchInput;
