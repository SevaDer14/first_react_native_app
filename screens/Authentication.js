import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Auth from '../modules/auth';

const Authentication = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const auth = new Auth({ host: 'https://fakest-newzz.herokuapp.com/api' });
  const authenticateUser = async () => {
    const response = await auth.signIn(email, password);
    setMessage(`Welcome ${response.data.first_name}`);
    navigation.navigate('FAKEST NEWS');
  };

  return (
    <View>
      <Text>Login:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        placeholder='email'
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        placeholder='password'
      />
      <Button
        type='solid'
        color='#FDC12A'
        onPress={() => authenticateUser()}
        title='Login'
      />
    </View>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 50,
    backgroundColor: '#D3D3D3',
  },
});
