import React from 'react';
import { createStackNavigator } from 'react-navigation';

import ListScreen from './Screens/List';

export default createStackNavigator(
  {
    List: ListScreen,
  },
  {
    initialRouteName: 'List',
  }
);