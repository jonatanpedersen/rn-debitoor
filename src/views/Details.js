import React, { Component } from 'react'
import {
  StyleSheet,
  FlatList,
  View,
  Button,
  Text,
  Image,
  ActivityIndicator
} from 'react-native'

import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'
import * as Actions from '../actions'

class Details extends Component {

  constructor (props) {
    super(props)
    this.state = {
      item: [],
      pulls: [],
    }
  }

  componentDidMount () {
    const {item} = this.props.navigation.state.params
    this.setState({pulls: this.props.getPulls(item.pulls_url)})
  }

  render () {
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.image}
                 source={{uri: this.props.item.item.owner.avatar_url}}
          />
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>{this.props.item.item.name}</Text>
          <Text>{this.props.item.item.description}</Text>
        </View>
        <Button title={'Add to favorite'} onPress={() => this.handleFavorite()}/>
        <View>
          <Text style={styles.pullsTitle}>Pull requests</Text>
          {this.props.loading && <ActivityIndicator size="large"/>}
          {this.props.pulls.length > 0 && this.renderList()}
        </View>
      </View>
    )
  }

  renderList () {
    return (<FlatList
      ref='listRef'
      data={this.props.pulls}
      renderItem={this.renderItem}
      keyExtractor={(item, index) => index}/>)
  }

  renderItem ({item}) {
    return (
      <View style={styles.row}>
        <View>
          <Image style={styles.image}
                 source={{uri: item.user.avatar_url}}/>
          <Text>{item.user.login}</Text>
        </View>
        <View>
          <Text style={styles.listTitle}>#{item.number} - {item.title}</Text>
          <Text style={styles.body}>
            {item.body.substring(0, 150) + '...'}
          </Text>
        </View>
      </View>
    )
  }

  handleFavorite () {
    return this.props.setFavorite(this.props.item.item)
  }
}

function mapStateToProps (state, props) {
  return {
    favorites: state.favorites.data,
    item: props.navigation.state.params,
    pulls: state.pulls.data,
    loading: state.pulls.loading,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 20
  },
  row: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10
  },
  textCenter: {textAlign: 'center'},

  title: {
    fontSize: 20,
    fontWeight: '600'
  },

  listTitle: {
    fontSize: 14,
    fontWeight: '600'
  },
  pullsTitle: {
    fontSize: 18,
    fontWeight: '600'
  },
  image: {
    width: 50,
    height: 50
  },

  body: {
    marginBottom: 20,
  },
  description: {
    marginTop: 5,
    fontSize: 14,
  }
})