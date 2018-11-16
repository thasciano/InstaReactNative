import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput,
} from 'react-native';

const width = Dimensions.get('screen').width

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foto: this.props.foto,
            valorComentario: ''

        }
    }

    carregaIcone(like) {
        return like ? require('../../local/img/s2.png') :
            require('../../local/img/s2vermelho.png')
    }

    like() {
        let novaLista = 0;

        if (!this.state.foto.likeada) {
            novaLista = this.state.foto.likers;
        }

        const fotoatualizada = {
            ...this.state.foto,
            like: !this.state.foto.like,
            likers: (novaLista + 1)
        }
        this.setState({
            foto: fotoatualizada
        })
    }

    exibeLikes(likers) {
        if (likers <= 0)
            return;

        return (<Text style={styles.likes}>{likers} {likers > 1 ? 'curtidas' : 'curtida'}</Text>)
    }

    exibeLegenda(foto) {
        if (foto.comentario == '')
            return;

        return (
            <View style={styles.comentario}>
                <Text style={styles.tituloComentario}>{foto.loginUsuario}</Text>
                <Text>{foto.comentario}</Text>
            </View>
        );
    }

    adicionaComentario() {
        // this.inputComentario.clear();
        console.warn(this.state.valorComentario);

    }

    render() {

        const { foto } = this.state;

        return (
            <View>
                <View style={styles.cabecalho}>
                    <Image source={{ uri: foto.avatar }}
                        style={styles.fotoDePerfil} />
                    <Text >{foto.usuario}</Text>
                </View>

                <Image source={{ uri: foto.foto }}
                    style={styles.foto} />

                <View style={styles.rodape} >
                    <TouchableOpacity onPress={this.like.bind(this)}>
                        <Image style={styles.botaoDeLike}
                            source={this.carregaIcone(foto.like)} />
                    </TouchableOpacity>

                    {this.exibeLikes(foto.likers)}
                    {this.exibeLegenda(foto)}

                    <View style={styles.novoComentario}>
                        <TextInput style={styles.input}
                            placeholder="Adicione um comentário..."
                            underlineColorAndroid='transparent'
                            ref={input => this.inputComentario = input}
                            onChangeText={texto => this.setState({ valorComentario: texto })} />
                        <TouchableOpacity onPress={this.adicionaComentario.bind(this)}>
                            <Image style={styles.icone} source={require('../../local/img/send.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
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
    botaoDeLike: {
        marginBottom: 10,
        width: 32,
        height: 32
    },
    rodape: {
        margin: 10,
    },
    likes: {
        fontWeight: 'bold',
    },
    comentario: {
        flexDirection: 'row'
    },
    tituloComentario: {
        fontWeight: 'bold',
        marginRight: 5
    },
    input: {
        flex: 1,
        height: 40
    },
    novoComentario: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    icone: {
        width: 30,
        height: 30
    },
});
