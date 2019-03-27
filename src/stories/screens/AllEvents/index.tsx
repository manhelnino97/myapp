
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';

import vcs from '../../../../assets/vcs.png'
import sun from '../../../../assets/sun.png'
import nhac from '../../../../assets/nhac.png'
import saigon from '../../../../assets/saigon.png'
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

import NavigationBar from '../../../theme/components/NavigationBar'

export default class AllEvents extends Component {

    state = {

    }

    renderItem2 = ({ item }) => {
        return (
            <TouchableOpacity style={{ marginStart: 10, marginBottom: 10 }}>
                <Image source={item.image} style={{ width: deviceWidth - 20, height: deviceHeight / 5 }} />
            </TouchableOpacity>
        )
    }

    render() {
        const data1 = [
            { id: '1', image: vcs },
            { id: '2', image: nhac },
            { id: '3', image: sun },
            { id: '4', image: saigon },
            { id: '1', image: vcs },
            { id: '2', image: nhac },
            { id: '3', image: sun },
            { id: '4', image: saigon },
        ]

        return (
            <View style={{ backgroundColor: '#FFFFFF' }}>
                <ScrollView style={{ marginTop: 60 }}>
                    <FlatList
                        data={data1}
                        renderItem={this.renderItem2}
                    />
                </ScrollView>
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
