import { router } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { DataInterface } from 'src/interface';

interface SingleItemProps {
  item: DataInterface;
}

const SingleItem = (props: SingleItemProps) => {
  const { item } = props;
  const imageSelected = item?.images.find((image) => image.ratio === '3_2');
  const imageUrl = imageSelected?.url;
  return (
    <Pressable
      onPress={() => router.push(`/item/${item.id}`)}
      style={styles.container}
    >
      <Image source={{ uri: imageUrl }} width={105} height={59} />
      <Text style={styles.title}>{item.name}</Text>
    </Pressable>
  );
};

export default SingleItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'InterMedium',
    fontSize: 16,
    marginLeft: 8,
    width: '60%',
  },
});
