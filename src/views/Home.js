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

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../actions'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {}

    this.renderItem = this.renderItem.bind(this)

    //console.log(Actions)
  }

  componentDidMount () {

    this.props.fetchRepositories()
    //this.props.getData() //call our action
  }

  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#F5F5F5', paddingTop: 20}}>
        <FlatList
          ref='listRef'
          data={this.props.repositories}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}/>
      </View>
    )
  }

  renderItem ({item, index}) {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {item: item})}>
        <View style={styles.row}>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: item.owner.avatar_url}}
          />
          <Text style={styles.title}>
            {parseInt(index) + 1}{'. '}
            stars: {item.stargazers_count} //
            id: {item.id} // {item.name}
          </Text>
          <Text style={styles.description}>
            {item.description}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    repositories: state.repositories.data,
    loading: state.repositories.loading,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(Actions, dispatch)
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  row: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10
  },

  title: {
    fontSize: 15,
    fontWeight: '600'
  },

  description: {
    marginTop: 5,
    fontSize: 14,
  }
})