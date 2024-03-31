import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { DataInterface } from 'src/interface';
import EmptyResult from './EmptyResult';
import SingleItem from './SingleItem';

interface SearchListProps {
  data: DataInterface[];
}

const SearchList = (props: SearchListProps) => {
  const { data } = props;
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={data}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <SingleItem item={item} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<EmptyResult />}
      />
    </SafeAreaView>
  );
};

export default SearchList;

const styles = StyleSheet.create({
  safeArea: {
    flex: 0.95,
  },
  list: {
    gap: 24,
    marginHorizontal: 15,
  },
});
