import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { CheckBox } from 'native-base';
import user from '../../../../assets/Register/user.png';
import email from '../../../../assets/Register/email.png';
import phone from '../../../../assets/Register/phone.png';
import clock from '../../../../assets/Register/clock.png';
import location from '../../../../assets/Register/location.png';
import facebook from '../../../../assets/Register/facebook.png';
import google from '../../../../assets/Register/google.png';
import material from '../../../theme/variables/material';
import styles from './styles';
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            email: '',
            phoneNumber: '',
            otpCode: '',
            password: '',
            birthday: '',
            address: '',
        };
    }
    render() {
        return (React.createElement(ScrollView, null,
            React.createElement(View, { style: { alignItems: 'center', height: material.deviceHeight / 4 } }),
            React.createElement(View, { style: styles.viewEdit },
                React.createElement(View, { style: { width: 20, alignItems: 'center' } },
                    React.createElement(Image, { source: user })),
                this.props.textInputUserName),
            React.createElement(View, { style: styles.grayline }),
            React.createElement(View, { style: styles.viewEdit },
                React.createElement(View, { style: { width: 20, alignItems: 'center' } },
                    React.createElement(Image, { source: email })),
                this.props.textInputEmail),
            React.createElement(View, { style: styles.grayline }),
            React.createElement(View, { style: styles.viewEdit },
                React.createElement(View, { style: { width: 20, alignItems: 'center' } },
                    React.createElement(Image, { source: phone })),
                this.props.textInputPhoneNumber,
                this.props.otpImage),
            React.createElement(View, { style: styles.grayline }),
            React.createElement(View, { style: styles.viewEdit },
                React.createElement(View, { style: { width: 20, alignItems: 'center' } },
                    React.createElement(Image, { source: clock })),
                this.props.textInputPassword),
            React.createElement(View, { style: styles.grayline }),
            React.createElement(View, { style: styles.viewEdit },
                React.createElement(View, { style: { width: 20, alignItems: 'center' } },
                    React.createElement(Image, { source: location })),
                this.props.textInputAddress),
            React.createElement(View, { style: styles.grayline }),
            React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center', marginTop: 10 } },
                React.createElement(CheckBox, { checked: true, color: '#0c7e7c' }),
                React.createElement(View, { style: { marginStart: 20, marginEnd: 5 } },
                    React.createElement(Text, { style: { marginTop: 10 } },
                        "\u0110\u0103ng k\u00ED t\u00E0i kho\u1EA3n \u0111\u1ED3ng ngh\u0129a v\u1EDBi b\u1EA1n ch\u1EA5p nh\u1EADn c\u00E1c",
                        React.createElement(Text, { style: { color: '#0c7e7c' }, onPress: () => alert('Điều khoản sử dụng') }, " \u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng "),
                        "c\u1EE7a ch\u00FAng t\u00F4i"))),
            React.createElement(View, { style: { alignItems: 'center', marginTop: 30 } },
                React.createElement(TouchableOpacity, { style: styles.buttonLogin },
                    React.createElement(Text, { style: { color: "white", fontWeight: "300" } }, "\u0110\u0102NG K\u00DD"))),
            React.createElement(View, { style: { alignItems: 'center', marginTop: 30, paddingBottom: 20 } },
                React.createElement(Text, null, "B\u1EA1n c\u00F3 th\u1EC3 \u0111\u0103ng nh\u1EADp qua c\u00E1c t\u00E0i kho\u1EA3n"),
                React.createElement(View, { style: { flexDirection: 'row', marginTop: 10 } },
                    React.createElement(TouchableOpacity, null,
                        React.createElement(Image, { source: facebook, style: { marginEnd: 10 } })),
                    React.createElement(TouchableOpacity, null,
                        React.createElement(Image, { source: google }))))));
    }
}
//# sourceMappingURL=index.js.map