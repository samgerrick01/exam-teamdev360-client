import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const CustomHeader = () => {
  return (
    <View style={styles.main}>
      <Image source={require('@assets/images/header-logo.png')} />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  main: {
    height: 85,
    width: '100%',
    backgroundColor: '#182F40',
    paddingTop: 48,
    paddingLeft: 22,
  },
});
