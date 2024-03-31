import EventCard from '@components/EventCard';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useContext } from 'react';
import {
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { DataContext } from 'src/context';

const index = () => {
  const { id } = useLocalSearchParams();

  const { data } = useContext(DataContext);

  const item = data.find((item) => item.id === id);

  const externalLinks = item?.externalLinks;
  const imageSelected = item?.images.find(
    (image) => image.ratio === '16_9' && image.width > 300
  );
  const imageUrl = imageSelected?.url;
  const imageHeight = 245;

  const handleOpenLink = (value: string) => {
    Linking.openURL(value);
  };

  const handleLinksGenerate = (value: string) => {
    let url = '';
    switch (value) {
      case 'twitter':
        url = externalLinks?.twitter[0].url ?? '';
        break;
      case 'youtube':
        url = externalLinks?.youtube[0].url ?? '';
        break;
      case 'spotify':
        url = externalLinks?.spotify[0].url ?? '';
        break;
      case 'global':
        url = externalLinks?.homepage[0].url ?? '';
        break;
      default:
        break;
    }
    return url;
  };

  //mock data
  const mockEventList = [
    {
      id: '1',
      date: 'FRIDAY, MARCH 1, 2024',
      title: item?.name.toUpperCase() || 'BIG EYED PHISH',
      location: 'CHICAGO THEATER, CHICAGO, IL',
      url: item?.url || '',
    },
    {
      id: '2',
      date: 'SATURDAY, MARCH 2, 2024',
      title: item?.name.toUpperCase() || 'BIG EYED PHISH',
      location: 'CHICAGO THEATER, CHICAGO, IL',
      url: item?.url || '',
    },
    {
      id: '3',
      date: 'SUNDAY, MARCH 3, 2024',
      title: item?.name.toUpperCase() || 'BIG EYED PHISH',
      location: 'CHICAGO THEATER, CHICAGO, IL',
      url: item?.url || '',
    },
  ];

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Image
        source={{ uri: imageUrl }}
        height={imageHeight}
        resizeMode='cover'
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item?.name}</Text>
        <View style={styles.links}>
          <Pressable
            onPress={() => handleOpenLink(handleLinksGenerate('twitter'))}
          >
            <Image source={require('@assets/icons/twitter.png')} />
          </Pressable>
          <Pressable
            onPress={() => handleOpenLink(handleLinksGenerate('youtube'))}
          >
            <Image source={require('@assets/icons/youtube.png')} />
          </Pressable>
          <Pressable
            onPress={() => handleOpenLink(handleLinksGenerate('spotify'))}
          >
            <Image source={require('@assets/icons/spotify.png')} />
          </Pressable>
          <Pressable
            onPress={() => handleOpenLink(handleLinksGenerate('global'))}
          >
            <Image source={require('@assets/icons/global.png')} />
          </Pressable>
        </View>
      </View>
      <View style={{ gap: 8 }}>
        {mockEventList.map((item) => (
          <EventCard key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 21,
    paddingVertical: 16,
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    flex: 0.3,
  },
  title: {
    fontFamily: 'InterSemiBold',
    fontSize: 16,
    lineHeight: 19.36,
    flex: 0.7,
    textTransform: 'uppercase',
  },
});
