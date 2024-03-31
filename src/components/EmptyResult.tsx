import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const EmptyResult = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={require('@assets/images/sadface.png')} />
        <Text style={styles.text}>No Results Found</Text>
      </View>
    </View>
  );
};

export default EmptyResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 46,
  },
  main: {
    backgroundColor: '#fff',
    borderRadius: 18,
    alignItems: 'center',
    width: 243,
    paddingVertical: 24,
  },
  text: {
    fontFamily: 'InterMedium',
    fontSize: 25.2,
    color: '#186CA8',
  },
});
