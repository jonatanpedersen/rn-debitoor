import React, { Component } from 'react'
import {
  StyleSheet,
  FlatList,
  View,
  Button,
  Text,
  ActivityIndicator
} from 'react-native'

import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'
import * as Actions from '../actions'

class Details extends Component {

  constructor (props) {
    console.log(props.navigation.state.params.item.id)
    super(props)

    this.item = props.navigation.state.params.item
  }

  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#F5F5F5', paddingTop: 20}}>
        <Text>{this.item.name}</Text>
        <Text>{this.item.description}</Text>
        <Button title='Favorite'
                onPress={() => this.handleSetFavorite(this.item)}/>
      </View>
    )
  }

  handleSetFavorite (item) {
    this.props.setFavorite(item)
  }

}

function mapStateToProps (state, props) {
  return {
    favorites: state.favorites.data,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(Actions, dispatch)
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Details)

