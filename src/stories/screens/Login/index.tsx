import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import facebook from '../../../../assets/Register/facebook.png'
import google from '../../../../assets/Register/google.png'
import email from '../../../../assets/Register/email.png'
import clock from '../../../../assets/Register/clock.png'

import material from '../../../theme/variables/material';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
    }

    _fbAuth() {
        LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(function (result) {
            if (result.isCancelled) {
                alert("Login Cancelled");
            } else {
                //alert("Login Success permission granted:" + result.grantedPermissions);
                AccessToken.getCurrentAccessToken().then(
                    (data) => {
                        //console.log(data.accessToken.toString())
                        fetch('https://graph.facebook.com/v2.5/me?fields=email,name,picture.width(300).height(300)&access_token=' + data.accessToken.toString())
                            .then((response) => response.json())
                            .then((json) => { alert(JSON.stringify(json)) })
                            .catch(() => {
                                alert('ERROR GETTING DATA FROM FACEBOOK')
                            })
                    }
                )
            }
        }, function (error) {
            alert(error + "");
        })
    }

    async signIn(){
        try {
            await GoogleSignin.hasPlayServices().catch(e=>alert(e));
            const userInfo = await GoogleSignin.signIn().catch(e=>alert('error: '+e));;
            //alert(JSON.stringify(userInfo))
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };


    render() {
        return (
            <View style={{}}>
                <View style={{ height: material.deviceHeight / 2 }}>

                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        {/* <Image source={logo}/> */}
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', marginBottom: 30, marginTop: 10 }}>
                        <View style={styles.viewEdit}>
                            <Image source={email} />
                            {this.props.textInputEmail}
                        </View>
                        <View style={styles.grayline} />

                        <View style={styles.viewEdit}>
                            <Image source={clock} />
                            {this.props.textInputPassword}
                        </View>
                        <View style={styles.grayline} />
                    </View>
                </View>

                <View style={{ height: material.deviceHeight / 2 }}>
                    <View style={{ flex: 1 }}>

                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <TouchableOpacity style={styles.buttonLogin}
                                onPress={() => this.props.navigation.navigate('Home')}
                            >
                                <Text style={{ color: "white", fontWeight: "300" }}>ĐĂNG NHẬP</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text >Bạn có thể đăng nhập qua các tài khoản</Text>
                            <View style={{ flexDirection: 'row', marginTop: 10 }} >
                                <TouchableOpacity onPress={() => this._fbAuth()}>
                                    <Image source={facebook} style={{ marginEnd: 10 }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.signIn()}>
                                    <Image source={google} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ textDecorationLine: 'underline' }} >Bạn quên mật khẩu? </Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text>Bạn có phải thành viên? </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                                <Text style={{ color: '#ebaa34' }}>ĐĂNG KÝ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewEdit: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ebebeb',
        alignItems: "center",
        paddingLeft: 16
    },
    buttonLogin: {
        backgroundColor: '#ebaa34',
        borderRadius: 30,
        width: '50%',
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    grayline: {
        width: "100%",
        height: 1,
        backgroundColor: '#d6d6d6',
    }
});

