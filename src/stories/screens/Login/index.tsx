import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import facebook from '../../../../assets/Register/facebook.png'
import google from '../../../../assets/Register/google.png'
import email from '../../../../assets/Register/email.png'
import clock from '../../../../assets/Register/clock.png'
import veviet from '../../../../assets/veviet.png'
import material from '../../../theme/variables/material';
GoogleSignin.configure();
export default class Login extends Component {

    async loginFB() {
        await LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(function (result) {
            if (result.isCancelled) {
                alert("Login Cancelled");
            } else {
                AccessToken.getCurrentAccessToken().then(
                    (data) => {
                        //console.log(data.accessToken.toString())
                        fetch('https://graph.facebook.com/v2.5/me?fields=id,email,name&access_token=' + data.accessToken.toString())
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


    async loginGG() {
        try {
            await GoogleSignin.hasPlayServices()
                .then(() => GoogleSignin.signIn()
                    .then((userInfor) => alert(JSON.stringify(userInfor)))
                    .catch(e => alert(e)))
                .catch(e => alert(e));
        } catch (error) {
            alert('ERROR GETTING DATA FROM GOOGLE')
        }
    };


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <View style={{ height: material.deviceHeight / 2 }}>

                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Image source={veviet} style={{ width: 100, height: 100 }} />
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
                                <TouchableOpacity onPress={() => this.loginFB()}>
                                    <Image source={facebook} style={{ marginEnd: 10 }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.loginGG()}>
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

