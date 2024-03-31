import React, { useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface SearchComponentProps {
  handleSearch: (value: string) => void;
  loading: boolean;
}

const SearchComponent = (props: SearchComponentProps) => {
  const { handleSearch, loading } = props;
  const [searchText, setSearchText] = useState<string>('');

  return (
    <View style={styles.main}>
      <TextInput
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        style={styles.textInputStyle}
      />
      <TouchableOpacity
        onPress={() => handleSearch(searchText)}
        style={styles.searchBtn}
      >
        {loading ? (
          <ActivityIndicator color='#FFFFFF' />
        ) : (
          <Text style={styles.text}>Submit</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 92,
    paddingTop: 29,
    paddingBottom: 23,
    flexDirection: 'row',
    paddingHorizontal: 15,
    gap: 13,
  },
  textInputStyle: {
    flex: 0.7,
    height: 40,
    borderColor: '#5DBDF0',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    fontFamily: 'InterMedium',
    textTransform: 'uppercase',
  },
  searchBtn: {
    flex: 0.3,
    backgroundColor: '#186CA8',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontFamily: 'InterMedium',
    color: '#FFFFFF',
  },
});
