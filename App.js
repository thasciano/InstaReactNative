/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  StatusBar,
  ToolbarAndroid,
} from 'react-native';
import Post from './src/components/Post'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount() {
    fetch('http://5beebac27839000013e6fb1e.mockapi.io/fotos')
      .then(resposta => resposta.json())
      .then(json => this.setState({ fotos: json }));
  }

  onActionSelected(position) {
    if (position === 0) { // index of 'Settings'
      // showSettings();
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#790e8b'
          animated={true} />

        <ToolbarAndroid
          title="Compartilhagram"
          titleColor='#fff'
          subtitle="Timeline"
          subtitleColor='#fff'
          backgroundColor="#ab47bc"
          style={styles.toolbar}
          actions={[
            { title: 'Sair', icon: require('./local/img/s2.png'), show: 'never' }
          ]}
          onActionSelected={this.onActionSelected} />

        <FlatList style={styles.container}
          keyExtractor={item => item.id}
          data={this.state.fotos}
          renderItem={({ item }) =>
            <Post foto={item} />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#c7c7c7',
  },
  lista: {
    marginTop: 20,
  },
  toolbar: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});
