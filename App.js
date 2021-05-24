import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';

const Stack = createStackNavigator();
const App = () => {
  const options = {
    headerStyle: {
      backgroundColor: '#0F52BA',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 24,
    },
    headerRight: () => (
      <View>
        <Text style={styles.text}>v. 0.0.01</Text>
      </View>
    ),
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'My App'}
          component={FirstScreen}
          options={() => options}
        />
        <Stack.Screen 
        name='Second Screen'
        component={SecondScreen}
        options={() => ({
          title: 'Go Back'
        })}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    marginRight: '30px',
    color: '#fff',
    fontSize: 12,
  },
});
