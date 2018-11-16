import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native';
import {
    Icon
} from 'native-base';
import Tabbar from 'react-native-tabbar-bottom'


const width = Dimensions.get('screen').width

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "HomeScreen",
        }

    }


    render() {

        return (
            <View style={styles.container}>
                {
                    // if you are using react-navigation just pass the navigation object in your components like this:
                    // {this.state.page === "HomeScreen" && <MyComp navigation={this.props.navigation}>Screen1</MyComp>}
                }
                {this.state.page === "HomeScreen" && <Text>Screen1</Text>}
                {this.state.page === "NotificationScreen" && <Text>Screen2</Text>}
                {this.state.page === "ProfileScreen" && <Text>Screen3</Text>}
                {this.state.page === "ChatScreen" && <Text>Screen4</Text>}
                {this.state.page === "SearchScreen" && <Text>Screen5</Text>}

                <Tabbar
                    stateFunc={(tab) => {
                        this.setState({ page: tab.page })
                        //this.props.navigation.setParams({tabTitle: tab.title})
                    }}
                    activePage={this.state.page}

                    tabs={[
                        {
                            page: "HomeScreen",
                            icon: "home",
                        },
                        {
                            page: "NotificationScreen",
                            icon: require('./local/img/s2.png'),
                            badgeNumber: 11,
                        },
                        {
                            page: "ProfileScreen",
                            icon: "person",
                        },
                        {
                            page: "ChatScreen",
                            icon: "chatbubbles",
                            badgeNumber: 7,
                        },
                        {
                            page: "SearchScreen",
                            icon: "search",
                        },
                    ]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
