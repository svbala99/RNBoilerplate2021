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
 * @function Login
 * @returns {JSX}
 * @description Functional component implementation of Login screen
 */
const Login = () => (
  <View style={styles.container}>
    <Text>This is Login screen</Text>
  </View>
);
export default Login;
