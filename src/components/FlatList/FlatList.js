'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity
} from 'react-native'

export default class FlatList extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {}

  }

  render () {
    return (console.log(this.props))
  }
}
