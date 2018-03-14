import { TabNavigator } from 'react-navigation'
import Home from './views/Home'
import Favorites from './views/Favorites'
import Details from './views/Details'

export default TabNavigator({
  Home: {screen: Home},
  Favorites: {screen: Favorites},
  Details: {screen: Details}
})