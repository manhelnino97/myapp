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
    updateText: Function,
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
                    alert('Logged with phone. Token:' + JSON.stringify(token))
                }
            })
    }

    register(userName, password, fullName, phoneNumber) {
        fetch('http://192.168.43.57:3003/api/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userName,
                password: password,
                fullname: fullName,
                phone_number: phoneNumber,
            })
        }).then(response=>{
            
        }).catch(e=>alert(e));
    }

    render() {

        RNAccountKit.configure({
            responseType: 'token',
            initialPhoneCountryPrefix: '+84' + this.props.phoneNumber,
            defaultCountry: 'VN',
        })

        const textInputUserName = (
            <TextInput
                style={styles.textInput}
                value={this.props.userName.toString()}
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
                value={this.props.email.toString()}
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
                value={this.props.phoneNumber.toString()}
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
                value={this.props.password.toString()}
                placeholder={'Mật khẩu'}
                placeholderTextColor={"#999999"}
                onChangeText={(text) => {
                    this.props.updateText(text, 'password')
                }}
                secureTextEntry={true}
            />
        );

        // const textInputAddress = (
        //     <TextInput
        //         style={styles.textInput}
        //         value={this.props.address}
        //         placeholder={'Địa chỉ'}
        //         placeholderTextColor={"#999999"}
        //         onChangeText={(text) => {
        //             this.props.updateText(text, 'address')
        //         }}
        //     />
        // );

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
                otpImage={otpImage}
            />
        )
    }
}

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
