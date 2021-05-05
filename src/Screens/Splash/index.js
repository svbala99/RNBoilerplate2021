// library imports
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
/**
 * @function Splash
 * @returns {JSX}
 * @description Functional component implementation of Splash screen
 */
const Splash = () => (
  <View style={styles.container}>
    <Text>This is Splash screen</Text>
  </View>
);
export default Splash;
