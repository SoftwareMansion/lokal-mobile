import { createStackNavigator } from 'react-navigation';

import Home from './components/Home';
// import ToDos from './components/ToDos';
import TodosList from './TodosList';

export const Root = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: `lok.al`,
      headerBackTitle: null
    }),
  },
  ToDos: {
    screen: TodosList,
    navigationOptions: () => ({
      title: `Wydarzenia`,
      headerBackTitle: 'Start'
    }),
  },
}, {
  mode: 'modal',
  headerMode: 'float',
});