import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import facebook from '../../../../assets/Register/facebook.png';
import google from '../../../../assets/Register/google.png';
import email from '../../../../assets/Register/email.png';
import clock from '../../../../assets/Register/clock.png';
import material from '../../../theme/variables/material';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }
    render() {
        return (React.createElement(View, { style: {} },
            React.createElement(View, { style: { height: material.deviceHeight / 2 } },
                React.createElement(View, { style: { flex: 1, alignItems: "center", justifyContent: "center" } }),
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
                        React.createElement(TouchableOpacity, { style: styles.buttonLogin, onPress: () => this.props.navigation.navigate('Drawer') },
                            React.createElement(Text, { style: { color: "white", fontWeight: "300" } }, "\u0110\u0102NG NH\u1EACP"))),
                    React.createElement(View, { style: { flex: 1, alignItems: 'center' } },
                        React.createElement(Text, null, "B\u1EA1n c\u00F3 th\u1EC3 \u0111\u0103ng nh\u1EADp qua c\u00E1c t\u00E0i kho\u1EA3n"),
                        React.createElement(View, { style: { flexDirection: 'row', marginTop: 10 } },
                            React.createElement(TouchableOpacity, null,
                                React.createElement(Image, { source: facebook, style: { marginEnd: 10 } })),
                            React.createElement(TouchableOpacity, null,
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
//# sourceMappingURL=index.js.map