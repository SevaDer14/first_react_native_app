import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const Article = ({ article, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Second Screen', { article: article });
      }}>
      <Image source={{ uri: article.image }} style={styles.image} />
      <View style={styles.card}>
        <Text style={styles.title}>{article.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Article;

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    padding: 7,
    paddingLeft: 10,
    paddingRight: 8,
    bottom: 8,
    backgroundColor: '#999',
  },
  title: {
    fontSize: 16,
    paddingBottom: 10,
    color: '#fff',
  },
  image: {
    height: 250,
    width: Dimensions.get('window').width,
    marginTop: 10,
  },
});
