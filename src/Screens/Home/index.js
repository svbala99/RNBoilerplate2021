// library imports
import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

// styles
import styles from './styles';

/**
 * @function Home
 * @returns {JSX}
 * @description Home screen in functional component
 */
const Home = () => <View style={styles.container}><Text>This is Home screen</Text></View>;

/**
 * Prop types for this functional component
 */
Home.propTypes = {
};

/**
 * Default props for this functional component
 */
Home.defaultProps = {
};

export default Home;
