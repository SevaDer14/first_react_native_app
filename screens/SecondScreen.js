import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Dimensions,
  View,
} from 'react-native';

const SecondScreen = (props) => {
  const article = props.route.params.article;
  return (
    <>
    <Image source={{ uri: article.image }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.header}>{article.title}</Text>
        <Text style={styles.teaser}>{article.teaser}</Text>
      </View>
    </>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  teaser: {
    marginTop: 30,
    color: '#fff',
  },

  header: {
    color: '#fff',
    fontSize: 32,
  },
  image: {
    height: 250,
    width: Dimensions.get('window').width,
  },
});
