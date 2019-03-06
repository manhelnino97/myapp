import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Alert, TextInput } from 'react-native'
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
import styles from './styles'
export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            email: '',
            phoneNumber: '',
            otpCode: '',
            password: '',
            birthday: '',
            address: '',
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center',height:material.deviceHeight/5  }} >
                    {/* <Image source={logo} style={{ marginTop: 30, marginBottom: 30 }} /> */}
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
                    {this.props.otpImage }
                </View>
                <View style={styles.grayline} />

                <View style={styles.viewEdit}>
                    <View style={{ width: 20, alignItems: 'center' }}>
                        <Image source={clock} />
                    </View>
                    {this.props.textInputPassword}
                </View>
                <View style={styles.grayline} />

                <View style={styles.viewEdit}>
                    <View style={{ width: 20, alignItems: 'center' }}>
                        <Image source={location} />
                    </View>
                    {this.props.textInputAddress}
                </View>
                <View style={styles.grayline} />

                <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:10 }}>
                    <CheckBox checked={true} color='#0c7e7c' />
                    <View style={{ marginStart: 20, marginEnd: 5 }}>
                        <Text style={{ marginTop: 10 }} >Đăng kí tài khoản đồng nghĩa với bạn chấp nhận các
                        <Text style={{ color: '#0c7e7c' }} onPress={() => alert('Điều khoản sử dụng')}> Điều khoản sử dụng </Text>
                            của chúng tôi</Text>
                    </View>
                </View>

                <View style={{ alignItems: 'center', marginTop: 30 }}>
                    <TouchableOpacity style={styles.buttonLogin}>
                        <Text style={{ color: "white", fontWeight: "300" }}>ĐĂNG KÝ</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', marginTop: 30, paddingBottom: 20 }}>
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
