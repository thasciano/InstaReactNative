import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native';

const width = Dimensions.get('screen').width

export default class Post extends Component {
    render() {
        return (
            <View>
                <View style={styles.cabecalho}>
                    <Image source={require('./local/android.jpg')}
                        style={styles.fotoDePerfil} />
                    <Text >{item.usuario}</Text>
                </View>

                <Image source={require('./local/android.jpg')}
                    style={styles.foto} />
            </View>
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
