// library imports
import React from 'react';
import { SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Home from './Screens/Home';
import Splash from './Screens/Splash';
import Login from './Screens/Login';

// constants
import CONSTANTS from './Constants/index';

// object destructurings
const { SPLASH, HOME, LOGIN } = CONSTANTS.screenTitles;

const Stack = createStackNavigator();

const AppContainer = (props) => {
  const { loading, token } = props;
  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Splash />
      </SafeAreaView>
    );
  }
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator>
          {!token ? (
          //   Login screen
            <Stack.Screen
              name={LOGIN}
              component={Login}
              options={{
                headerShown: false,
              }}
            />
          ) : (
          //   Home screen
            <Stack.Screen
              name={HOME}
              component={Home}
              options={{
                headerShown: false,
              }}
            />
          )}
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

/**
 * Prop types for this functional component
 */
AppContainer.propTypes = {
  loading: PropTypes.bool,
  token: PropTypes.string,
};

/**
 * Default props for this functional component
 */
AppContainer.defaultProps = {
  loading: false,
  token: null,
};

export default AppContainer;
