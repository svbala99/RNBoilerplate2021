// library imports
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// stylesheet object
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * @function App
 * @returns {JSX}
 * @description Starting point of the App
 */
const App = () => (
  <View style={styles.container}>
    <Text>Hello World</Text>
  </View>
);

export default App;
