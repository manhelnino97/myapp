import React from 'react';
import { connect } from "react-redux";
import Register from '../../stories/screens/Register';
import { View, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import RNAccountKit from 'react-native-facebook-account-kit';
import { updateText } from './actions';
import otpcode from '../../../assets/Register/otpcode.png';
class RegisterContainer extends React.Component {
    componentDidMount() {
    }
    openOtpCheckScreen() {
        RNAccountKit.loginWithPhone()
            .then((token) => {
            if (!token) {
                alert('Login cancelled');
            }
            else {
                alert('Logged with phone. Token:' + JSON.stringify(token));
            }
        });
    }
    render() {
        RNAccountKit.configure({
            responseType: 'token',
            initialPhoneCountryPrefix: '+84' + this.props.phoneNumber,
            defaultCountry: 'VN',
        });
        const textInputUserName = (React.createElement(TextInput, { style: styles.textInput, value: this.props.userName, placeholder: 'Họ & tên', placeholderTextColor: "#999999", onChangeText: (text) => {
                this.props.updateText(text, 'userName');
            } }));
        const textInputEmail = (React.createElement(TextInput, { style: styles.textInput, value: this.props.email, placeholder: 'Email', placeholderTextColor: "#999999", onChangeText: (text) => {
                this.props.updateText(text, 'email');
            } }));
        const textInputPhoneNumber = (React.createElement(TextInput, { style: styles.textInput, value: this.props.phoneNumber, placeholder: 'Số điện thoại', placeholderTextColor: "#999999", onChangeText: (text) => {
                this.props.updateText(text, 'phoneNumber');
            }, keyboardType: 'numeric', maxLength: 10 }));
        const textInputPassword = (React.createElement(TextInput, { style: styles.textInput, value: this.props.password, placeholder: 'Mật khẩu', placeholderTextColor: "#999999", onChangeText: (text) => {
                this.props.updateText(text, 'password');
            }, secureTextEntry: true }));
        const textInputAddress = (React.createElement(TextInput, { style: styles.textInput, value: this.props.address, placeholder: 'Địa chỉ', placeholderTextColor: "#999999", onChangeText: (text) => {
                this.props.updateText(text, 'address');
            } }));
        const otpImage = (this.props.phoneNumber.toString().length > 0 ?
            React.createElement(TouchableOpacity, { onPress: () => this.openOtpCheckScreen() },
                React.createElement(Image, { source: otpcode, style: { marginEnd: 10 } }))
            : React.createElement(View, null));
        return (React.createElement(Register, { textInputUserName: textInputUserName, textInputEmail: textInputEmail, textInputPhoneNumber: textInputPhoneNumber, textInputPassword: textInputPassword, textInputAddress: textInputAddress, otpImage: otpImage }));
    }
}
RegisterContainer.navigationOptions = {
    header: null
};
function bindAction(dispatch) {
    return {
        updateText: (text, title) => dispatch(updateText(text, title)),
    };
}
const mapStateToProps = state => ({
    userName: state.registerReducer.userName,
    email: state.registerReducer.email,
    phoneNumber: state.registerReducer.phoneNumber,
    password: state.registerReducer.password,
    address: state.registerReducer.address,
});
export default connect(mapStateToProps, bindAction)(RegisterContainer);
const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        height: 60,
        color: '#000000',
        marginStart: 8
    }
});
//# sourceMappingURL=index.js.map