import CustomHeader from '@components/CustomHeader';
import SearchComponent from '@components/SearchComponent';
import SearchList from '@components/SearchList';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { DataContext } from 'src/context';
import { DataInterface } from 'src/interface';

const urlAndroid = 'http://10.0.2.2:5000'; //If you are using Android emulator
const urlIos = 'http://192.168.123.40:5000'; //Change this to your IP address

const index = () => {
  const { data, setData } = useContext(DataContext);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (value: string) => {
    if (value === '') return alert('Please enter a value');
    setLoading(true);
    try {
      axios
        .post(
          `${Platform.OS === 'android' ? urlAndroid : urlIos}/attractions`,
          { keyword: value }
        )
        .then((response) => {
          if (response.data !== undefined) {
            setData(response?.data);
            setIsSearch(true);
            setLoading(false);
          } else {
            setData([]);
            setLoading(false);
          }
        });
    } catch (error) {
      alert(`Error: ${error}`);
      setLoading(false);
    }
  };

  return (
    <View style={styles.main}>
      <CustomHeader />
      <SearchComponent loading={loading} handleSearch={handleSearch} />
      {isSearch && <SearchList data={data as DataInterface[]} />}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EDF5F9',
  },
});
