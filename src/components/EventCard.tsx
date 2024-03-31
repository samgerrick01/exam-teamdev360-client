import React from 'react';
import {
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface EventCardProps {
  item: {
    id: string;
    date: string;
    title: string;
    location: string;
    url: string;
  };
}

const EventCard = (props: EventCardProps) => {
  const { item } = props;
  return (
    <Pressable
      style={styles.container}
      onPress={() => Linking.openURL(item.url)}
    >
      <Image
        source={require('@assets/images/concert.png')}
        style={{ height: 105.4, width: 99 }}
      />
      <View style={styles.textContainer} key={item.id}>
        <Text style={[styles.text1, styles.font]}>{item.date}</Text>
        <Text style={[styles.text2, styles.font]}>{item.title}</Text>
        <Text style={[styles.text1, styles.font]}>{item.location}</Text>
      </View>
    </Pressable>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    marginHorizontal: 21,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 8,
  },
  text1: {
    fontSize: 12,
    lineHeight: 14.52,
    width: '90%',
  },
  text2: {
    fontSize: 16,
    lineHeight: 19.36,
    width: '90%',
  },
  font: {
    fontFamily: 'InterSemiBold',
  },
});
