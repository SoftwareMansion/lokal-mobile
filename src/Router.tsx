import { createStackNavigator } from 'react-navigation';

import Home from './components/Home';
import ToDos from './components/ToDos';

export const Root = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: `lok.al`,
      headerBackTitle: null
    }),
  },
  ToDos: {
    screen: ToDos,
    navigationOptions: () => ({
      title: `Wydarzenia`,
      headerBackTitle: 'Start'
    }),
  },
}, {
  mode: 'modal',
  headerMode: 'float',
});