import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Alert, ActivityIndicator } from 'react-native'
import { CheckBox } from 'native-base';
import logo from '../../../../assets/Register/logoomi.png'
import user from '../../../../assets/Register/user.png'
import email from '../../../../assets/Register/email.png'
import phone from '../../../../assets/Register/phone.png'
import clock from '../../../../assets/Register/clock.png'
import location from '../../../../assets/Register/location.png'
import facebook from '../../../../assets/Register/facebook.png'
import google from '../../../../assets/Register/google.png'
import material from '../../../theme/variables/material';
import veviet from '../../../../assets/veviet.png'
import styles from './styles'
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: false,
        }
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            {this.state.load ?
                        <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', top: 0, bottom: 0, right: 0, left: 0 }} >
                            <ActivityIndicator size="large" color='#ebaa34' />
                        </View> : null}
                <View style={{ alignItems: 'center', justifyContent: "center", height: material.deviceHeight / 4 }} >
                    <Image source={veviet} style={{ width: 100, height: 100 }} />
                </View>

                <View style={styles.viewEdit}>
                    <View style={{ width: 20, alignItems: 'center' }}>
                        <Image source={user} />
                    </View>
                    {this.props.textInputUserName}
                </View>
                <View style={styles.grayline} />

                <View style={styles.viewEdit}>
                    <View style={{ width: 20, alignItems: 'center' }}>
                        <Image source={email} />
                    </View>
                    {this.props.textInputEmail}
                </View>
                <View style={styles.grayline} />

                <View style={styles.viewEdit}>
                    <View style={{ width: 20, alignItems: 'center' }}>
                        <Image source={phone} />
                    </View>
                    {this.props.textInputPhoneNumber}
                    {this.props.otpImage}
                </View>
                <View style={styles.grayline} />

                <View style={styles.viewEdit}>
                    <View style={{ width: 20, alignItems: 'center' }}>
                        <Image source={clock} />
                    </View>
                    {this.props.textInputPassword}
                </View>
                <View style={styles.grayline} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <CheckBox checked={true} color='#ebaa34' />
                    <View style={{ marginStart: 20, marginEnd: 5 }}>
                        <Text style={{ marginTop: 10 }} >Đăng kí tài khoản đồng nghĩa với bạn chấp nhận các
                        <Text style={{ color: '#ebaa34' }} onPress={() => alert('Điều khoản sử dụng')}> Điều khoản sử dụng </Text>
                            của chúng tôi</Text>
                    </View>
                </View>

                <View style={{ alignItems: 'center', marginTop: 40 }}>
                    <TouchableOpacity style={styles.buttonLogin}
                    onPress={()=>{
                        this.setState({ load: true })
                        setTimeout(() => {
                            this.setState({ load: false })
                            Alert.alert("Thông báo","Đăng ký thành công!")
                        }, 2500);
                    }}>
                        <Text style={{ color: "white", fontWeight: "300" }}>ĐĂNG KÝ</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', marginTop: 40, paddingBottom: 20 }}>
                    <Text >Bạn có thể đăng nhập qua các tài khoản</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }} >
                        <TouchableOpacity>
                            <Image source={facebook} style={{ marginEnd: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={google} />
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        );
    }
}
