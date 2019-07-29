var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { GoogleSignin } from 'react-native-google-signin';
import facebook from '../../../../assets/Register/facebook.png';
import google from '../../../../assets/Register/google.png';
import email from '../../../../assets/Register/email.png';
import clock from '../../../../assets/Register/clock.png';
import veviet from '../../../../assets/veviet.png';
import material from '../../../theme/variables/material';
GoogleSignin.configure();
export default class Login extends Component {
    loginFB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(function (result) {
                if (result.isCancelled) {
                    alert("Login Cancelled");
                }
                else {
                    AccessToken.getCurrentAccessToken().then((data) => {
                        //console.log(data.accessToken.toString())
                        fetch('https://graph.facebook.com/v2.5/me?fields=id,email,name&access_token=' + data.accessToken.toString())
                            .then((response) => response.json())
                            .then((json) => { alert(JSON.stringify(json)); })
                            .catch(() => {
                            alert('ERROR GETTING DATA FROM FACEBOOK');
                        });
                    });
                }
            }, function (error) {
                alert(error + "");
            });
        });
    }
    loginGG() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield GoogleSignin.hasPlayServices()
                    .then(() => GoogleSignin.signIn()
                    .then((userInfor) => alert(JSON.stringify(userInfor)))
                    .catch(e => alert(e)))
                    .catch(e => alert(e));
            }
            catch (error) {
                alert('ERROR GETTING DATA FROM GOOGLE');
            }
        });
    }
    ;
    render() {
        return (React.createElement(View, { style: { flex: 1, backgroundColor: '#FFFFFF' } },
            React.createElement(View, { style: { height: material.deviceHeight / 2 } },
                React.createElement(View, { style: { flex: 1, alignItems: "center", justifyContent: "center" } },
                    React.createElement(Image, { source: veviet, style: { width: 100, height: 100 } })),
                React.createElement(View, { style: { flex: 1, justifyContent: 'center', marginBottom: 30, marginTop: 10 } },
                    React.createElement(View, { style: styles.viewEdit },
                        React.createElement(Image, { source: email }),
                        this.props.textInputEmail),
                    React.createElement(View, { style: styles.grayline }),
                    React.createElement(View, { style: styles.viewEdit },
                        React.createElement(Image, { source: clock }),
                        this.props.textInputPassword),
                    React.createElement(View, { style: styles.grayline }))),
            React.createElement(View, { style: { height: material.deviceHeight / 2 } },
                React.createElement(View, { style: { flex: 1 } },
                    React.createElement(View, { style: { flex: 1, alignItems: 'center' } },
                        React.createElement(TouchableOpacity, { style: styles.buttonLogin, onPress: () => this.props.navigation.navigate('Home') },
                            React.createElement(Text, { style: { color: "white", fontWeight: "300" } }, "\u0110\u0102NG NH\u1EACP"))),
                    React.createElement(View, { style: { flex: 1, alignItems: 'center' } },
                        React.createElement(Text, null, "B\u1EA1n c\u00F3 th\u1EC3 \u0111\u0103ng nh\u1EADp qua c\u00E1c t\u00E0i kho\u1EA3n"),
                        React.createElement(View, { style: { flexDirection: 'row', marginTop: 10 } },
                            React.createElement(TouchableOpacity, { onPress: () => this.loginFB() },
                                React.createElement(Image, { source: facebook, style: { marginEnd: 10 } })),
                            React.createElement(TouchableOpacity, { onPress: () => this.loginGG() },
                                React.createElement(Image, { source: google }))))),
                React.createElement(View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
                    React.createElement(TouchableOpacity, null,
                        React.createElement(Text, { style: { textDecorationLine: 'underline' } }, "B\u1EA1n qu\u00EAn m\u1EADt kh\u1EA9u? ")),
                    React.createElement(View, { style: { flexDirection: 'row', marginTop: 10 } },
                        React.createElement(Text, null, "B\u1EA1n c\u00F3 ph\u1EA3i th\u00E0nh vi\u00EAn? "),
                        React.createElement(TouchableOpacity, { onPress: () => this.props.navigation.navigate('Register') },
                            React.createElement(Text, { style: { color: '#ebaa34' } }, "\u0110\u0102NG K\u00DD")))))));
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
//# sourceMappingURL=index.js.map