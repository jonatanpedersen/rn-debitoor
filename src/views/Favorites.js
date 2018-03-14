import React, { Component } from 'react'
import {
  StyleSheet,
  FlatList,
  View,
  Button,
  Text,
  ActivityIndicator
} from 'react-native'

export default class Favorites extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  render () {

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Favorites!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }

}
