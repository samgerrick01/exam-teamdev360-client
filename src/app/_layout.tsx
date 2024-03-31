import {
  Inter_300Light,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import { DataInterface } from '@interface/index';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { DataContext } from '../context';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [data, setData] = useState<DataInterface[]>([]);

  let [fontsLoaded, fontError] = useFonts({
    InterLight: Inter_300Light,
    InterMedium: Inter_500Medium,
    InterSemiBold: Inter_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <DataContext.Provider value={{ data, setData }}>
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <StatusBar style='light' hidden />
        <Stack>
          <Stack.Screen
            name='index'
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </View>
    </DataContext.Provider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
