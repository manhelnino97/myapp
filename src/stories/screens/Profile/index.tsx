import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, StatusBar, Dimensions } from 'react-native'
import { Switch } from 'native-base';

import user from '../../../../assets/Profile/userlogin.png'
import iconedit from '../../../../assets/Profile/iconedit.png'
import iconfoward from '../../../../assets/Profile/iconfoward.png'
import Modal from "react-native-modal";

import NavigationBar from '../../../theme/components/NavigationBar'
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default class Profile extends React.Component {
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
                <View style={{ marginTop: 50 }}>
                    <ScrollView>
                        <View style={{alignItems:'center',justifyContent:'center',margin:20}}>
                            <Image source={user} style={{ width:100, height:100 }} />
                        </View>
                        <Text style={styles.textTittle}>Họ và tên</Text>
                        {this.props.textInputUserName}
                        <View style={styles.grayline} />

                        <Text style={styles.textTittle}>Email</Text>
                        {this.props.textInputEmail}
                        <View style={styles.grayline} />

                        <Text style={styles.textTittle}>Số điện thoại</Text>
                        {this.props.textInputPhoneNumber}
                        <View style={styles.grayline} />

                        <Text style={styles.textTittle}>Mật khẩu</Text>
                        {this.props.textInputPassword}
                        <View style={styles.grayline} />

                        <Text style={styles.textTittle}>Ngày sinh</Text>
                        {this.props.textInputBirthday}
                        <View style={styles.grayline} />

                        <Text style={styles.textTittle}>Địa chỉ</Text>
                        {this.props.textInputAddress}
                        <View style={styles.grayline} />
                        <TouchableOpacity>
                            <View style={{ width: deviceWidth, alignItems: 'center', justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: '#ebaa34' }}>LƯU THAY ĐỔI</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <View style={{ position: 'absolute', width: deviceWidth, height: 50, backgroundColor: '#000000' }}>
                    <NavigationBar goBack={() => this.props.navigation.goBack()} title='Thông tin cá nhân' />
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    grayline: {
        width: "100%",
        height: 1,
        backgroundColor: '#d6d6d6',
    },
    textTittle: {
        marginStart: 10,
        fontSize: 12,
        marginTop: 5
    },
});
