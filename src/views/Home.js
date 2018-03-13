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

import { FlatList } from '../components/FlatList'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../actions'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {}

    this.renderItem = this.renderItem.bind(this)
  }

  componentDidMount () {

    this.props.fetchGithubRepositories()
    console.log(this.state)
    //this.props.getData(); //call our action
  }

  render () {
    if (this.props.loading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true}/>
        </View>
      )
    } else {
      return (
        <View style={{flex: 1, backgroundColor: '#F5F5F5', paddingTop: 20}}>
          <FlatList
            ref='listRef'
            data={this.props.github}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}/>
        </View>
      )
    }
  }

  renderItem ({item, index}) {
    return (
      <TouchableOpacity onPress={this._onPress(item)}>
        <View style={styles.row}>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: item.owner.avatar_url}}
          />
          <Text style={styles.title}>
            {item.name}
          </Text>
          <Text style={styles.description}>
            {item.description}
          </Text>
          <View>
            <Text>Show this on click</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  _onPress = (item) => {
    console.log(item)
  }
}

function mapStateToProps (state, props) {
  return {
    //data: state.dataReducer.data,
    github: state.github.data,
    loading: state.github.loading,
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