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
  FlatList
} from 'react-native';

const width = Dimensions.get('screen').width

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<Props> {
  render() {
    const fotos = [
      { id: 1, usuario: 'thasciano' },
      { id: 2, usuario: 'teste' },
      { id: 3, usuario: 'asd' },
    ]
    return (

      <FlatList style={styles.container}
        keyExtractor={item => item.id}
        data={fotos}
        renderItem={({ item }) =>
          <View>
            <View style={styles.cabecalho}>
              <Image source={require('./local/android.jpg')}
                style={styles.fotoDePerfil} />
              <Text >{item.usuario}</Text>
            </View>

            <Image source={require('./local/android.jpg')}
              style={styles.foto} />

          </View>
        }
      />

      /*   <ScrollView style={{ marginTop: 20 }}>
          {fotos.map(foto =>
             <View key={foto.id}>
              <Text style={styles.instructions}>{foto.usuario}</Text>
              <Image source={require('./local/android.jpg')}
                style={{ width: width, height: 200 }} />
            </View>
          )}
  
        </ScrollView> */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  fotoDePerfil: {
    marginRight: 10,
    borderRadius: 20,
    width: 40,
    height: 40
  },
  foto: {
    width: width,
    height: width,
  },
});
