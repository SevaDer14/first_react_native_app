import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hi</Text>
      <Button
      title='next'
      onPress={() => navigation.navigate('Second Screen', {name: 'Sup?'})}
      />
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    color: '#000',
    fontSize: 32,
  },
});
