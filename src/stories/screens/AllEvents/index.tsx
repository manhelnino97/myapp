
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';

import vcs from '../../../../assets/vcs.png'
import sun from '../../../../assets/sun.png'
import nhac from '../../../../assets/nhac.png'
import saigon from '../../../../assets/saigon.png'
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import { API } from '../../../helper/Constants'
import NavigationBar from '../../../theme/components/NavigationBar'

export default class AllEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            load: true,
            data: []
        }
    }

    componentDidMount() {
        fetch(API + 'api')
            .then((response) => response.json())
            .then((responseJson) => {
                //alert(JSON.stringify(responseJson[0][0]))
                this.setState({ data: responseJson[0] })
                this.setState({ load: false })
            })
            .catch((error) => {
                alert(error);
            });

    }

    renderItem2 = ({ item }) => {
        return (
            <TouchableOpacity style={{ marginStart: 10, marginBottom: 10 }}
                onPress={() => this.props.navigation.navigate('WebSite', { url: API + 'event/' + item.id, name: item.name })}>
                <Image source={{ uri: API + item.image }} style={{ width: deviceWidth - 20, height: deviceHeight / 5 }} />
            </TouchableOpacity>
        )
    }

    render() {

        return (
            <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
                {this.state.load ?
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                        <ActivityIndicator size="large" color='#ebaa34' />
                    </View> :
                    <ScrollView style={{ marginTop: 60 }}>
                        <FlatList
                            data={this.state.data}
                            renderItem={this.renderItem2}
                        />
                    </ScrollView>
                }
                <View style={{ position: 'absolute', width: deviceWidth, height: 50, backgroundColor: '#000000' }}>
                    <NavigationBar goBack={() => this.props.navigation.goBack()} title='Tất cả sự kiện' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    grayline: {
        width: deviceWidth,
        height: 1,
        backgroundColor: '#d6d6d6',
    },
});
