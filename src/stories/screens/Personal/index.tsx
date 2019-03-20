import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, StatusBar, Platform } from 'react-native'
import { Switch } from 'native-base';

import user from '../../../../assets/Profile/userlogin.png'
import iconedit from '../../../../assets/Profile/iconedit.png'
import iconfoward from '../../../../assets/Profile/iconfoward.png'
import material from '../../../theme/variables/material'
import Modal from "react-native-modal";

import NavigationBar from '../../../theme/components/NavigationBar'

export default class Personal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            heightDialog: 0,
            isShowDialog: false,
        }
    }

    render() {
        return (
            <View>
                <View style={{marginTop:50}}>
                    <ScrollView>
                        <View style={styles.viewUser}>
                            <Image source={user} style={{ marginStart: 10 }} />
                            <View style={{ flexDirection: 'column', marginStart: 15 }} >
                                <Text style={{ fontWeight: 'bold' }} >Hoàng Tiến Mạnh</Text>
                                <Text>0338668369</Text>
                                <Text>144 Xuân Thủy. Cầu Giấy, Hà Nội</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ position: 'absolute', width: material.deviceWidth, height: 50, backgroundColor: '#000000' }}>
                    <NavigationBar goBack={() => this.props.navigation.goBack()} title='Tài khoản' />
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewUser: {
        backgroundColor: "#d0d0d0",
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10
    },
    grayline: {
        width: "100%",
        height: 1,
        backgroundColor: '#d6d6d6',
    },
});
