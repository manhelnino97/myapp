import React, { Component } from 'react'
import { connect } from "react-redux";
import Register from '../../stories/screens/Register';
import { View, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import RNAccountKit from 'react-native-facebook-account-kit'
import { updateText } from './actions';

import otpcode from '../../../assets/Register/otpcode.png'

export interface State { }
export interface Props {
    userName: Object,
    email: Object,
    phoneNumber: Object,
    password: Object,
    birthday: Object,
    address: Object,
    isShowDatePicker: Object,
    updateText: Function,
    showDatePicker: Function,
}

class RegisterContainer extends React.Component<Props, State> {

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
    }

    openOtpCheckScreen() {
        RNAccountKit.loginWithPhone()
            .then((token) => {
                if (!token) {
                    alert('Login cancelled')
                } else {
                    alert(`Logged with phone. Token: ${token}`)
                }
            })
    }

    render() {


        RNAccountKit.configure({
            responseType: 'token', // 'token' by default,
            initialPhoneCountryPrefix: '+84'+this.props.phoneNumber, // autodetected if none is provided
            defaultCountry: 'VN',
        })


        const textInputUserName = (
            <TextInput
                style={styles.textInput}
                value={this.props.userName}
                placeholder={'Họ & tên'}
                placeholderTextColor={"#999999"}
                onChangeText={(text) => {
                    this.props.updateText(text, 'userName')
                }}
            />
        );


        const textInputEmail = (
            <TextInput
                style={styles.textInput}
                value={this.props.email}
                placeholder={'Email'}
                placeholderTextColor={"#999999"}
                onChangeText={(text) => {
                    this.props.updateText(text, 'email')
                }}
            />
        );

        const textInputPhoneNumber = (
            <TextInput
                style={styles.textInput}
                value={this.props.phoneNumber}
                placeholder={'Số điện thoại'}
                placeholderTextColor={"#999999"}
                onChangeText={(text) => {
                    this.props.updateText(text, 'phoneNumber')
                }}
                keyboardType='numeric'
                maxLength={10}
            />
        );

        const textInputPassword = (
            <TextInput
                style={styles.textInput}
                value={this.props.password}
                placeholder={'Mật khẩu'}
                placeholderTextColor={"#999999"}
                onChangeText={(text) => {
                    this.props.updateText(text, 'password')
                }}
                secureTextEntry={true}
            />
        );


        const textInputAddress = (
            <TextInput
                style={styles.textInput}
                value={this.props.address}
                placeholder={'Địa chỉ'}
                placeholderTextColor={"#999999"}
                onChangeText={(text) => {
                    this.props.updateText(text, 'address')
                }}
            />
        );

        const otpImage = (
            this.props.phoneNumber.toString().length > 0 ?
                <TouchableOpacity onPress={() => this.openOtpCheckScreen()}>
                    <Image source={otpcode} style={{ marginEnd: 10 }} />
                </TouchableOpacity>
                : <View />
        );

        return (
            <Register
                textInputUserName={textInputUserName}
                textInputEmail={textInputEmail}
                textInputPhoneNumber={textInputPhoneNumber}
                textInputPassword={textInputPassword}
                textInputAddress={textInputAddress}
                otpImage={otpImage}
            />
        )
    }
}

function bindAction(dispatch) {
    return {
        updateText: (text, title) => dispatch(updateText(text, title)),
        showDatePicker: (status) => dispatch(showDatePicker(status)),
    };
}

const mapStateToProps = state => ({
    userName: state.registerReducer.userName,
    email: state.registerReducer.email,
    phoneNumber: state.registerReducer.phoneNumber,
    password: state.registerReducer.password,
    address: state.registerReducer.address,
    isShowDatePicker: state.registerReducer.isShowDatePicker,
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
