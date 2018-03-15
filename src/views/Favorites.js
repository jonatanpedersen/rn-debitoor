import React, { Component } from 'react'
import {
  StyleSheet,
  FlatList,
  View,
  Button,
  Text,
  Image,
} from 'react-native'
import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Favorites extends Component {

  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <View style={styles.container}>
        {this.props.favorites.length === 0
          ? <Text>No favorites selected</Text>
          : <FlatList ref='listRef'
                      data={this.props.favorites}
                      renderItem={this.renderItem}
                      keyExtractor={(item, index) => index}/>}
      </View>
    )
  }

  renderItem ({item, index}) {
    return (
      <View style={styles.row}>
        <Image style={styles.image}
               source={{uri: item.owner.avatar_url}}/>
        <Text style={styles.title}>{item.name}</Text>
        <Text>{item.stargazers_count.toLocaleString()} stars</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    )
  }
}

function filterRepos (repos, ids) {
  const filter = []
  ids.forEach(id => repos.forEach(repo => {
      if (repo.id === id) {
        filter.push(repo)
      }
    }
  ))
  return filter.sort((a, b) => a.stargazers_count < b.stargazers_count)
}

function mapStateToProps (state, props) {
  return {
    favorites: filterRepos(state.repositories.data, state.favorites.ids),
    repositories: state.repositories.data
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)

const styles = StyleSheet.create({

  container: {flex: 1, backgroundColor: '#F5F5F5', paddingTop: 20},
  image: {width: 50, height: 50},
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