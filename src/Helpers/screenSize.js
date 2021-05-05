/* eslint-disable prefer-const */
// library imports
import { Dimensions } from 'react-native';

// destructuring the object
let { width, height } = Dimensions.get('screen');

export const setScreenHeight = (calculatedHeight) => {
  height = calculatedHeight;
};

// exports
export const getScreenWidth = () => width;
export const getScreenHeight = () => height;
