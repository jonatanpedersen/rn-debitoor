import { TabNavigator } from 'react-navigation'
import Home from './views/Home'
import Favorites from './views/Favorites'

export default TabNavigator({
  Home: {screen: Home},
  Favorites: {screen: Favorites},
})