import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Linking, Platform, TextInput, Switch } from 'react-native'
import { connect } from "react-redux";
import Profile from '../../stories/screens/Profile';
import material from '../../theme/variables/material'
import DateTimePicker from 'react-native-modal-datetime-picker';
import { updateText, editUserName, switchStatus, showDatePicker } from './actions';
import { validateUserName, validateEmail, validatePhoneNumber, validateAddress } from '../../helper/Vadilation'
import { checkMonth } from '../../helper/Function'

export interface State {
}

export interface Props {
    userName: Object,
    email: Object,
    phoneNumber: Object,
    password: Object,
    birthday: Object,
    address: Object,
    isEditUserName: Object,
    switchSms: Object,
    switchEmail: Object,
    isShowDatePicker: Object,
    isLoading: Object,
    updateText: Function,
    editUserName: Function,
    switchStatus: Function,
    showDatePicker: Function,
}


class ProfileContainer extends React.Component<Props, State> {

    componentDidMount() {
        this.fillData()
    }

    fillData() {
        // getUserInfor()
        //     .then((data) => {
        //         this.updateData(data)
        //     })
    }

    // updateData(data) {
    //     this.props.updateText(data.name, 'userName')
    //     this.props.updateText(data.email, 'email')
    //     this.props.updateText(data.phone, 'phoneNumber')
    //     this.props.updateText(data.birthday, 'birthday')
    //     this.props.updateText(data.location, 'address')
    //     this.props.switchStatus(data.allow_receive_sms === 1 ? true : false, 'sms')
    //     this.props.switchStatus(data.allow_receive_email === 1 ? true : false, 'email')
    // }

    onPressUserName() {
        this.props.editUserName(true)
    }

    canceInputData() {
        // this.fillData()
        this.props.editUserName(false)
    }

    // saveData() {
    //     saveData(this.props.userName, this.props.email, this.props.phoneNumber, this.props.address, this.props.birthday,
    //         this.props.switchSms ? 1 : 0, this.props.switchEmail ? 1 : 0, '')
    //         .then((response) => {
    //             if (response.data) {
    //                 this.updateData(response.data)
    //                 alert('Lưu thành công')
    //             }
    //             else alert('Nhập thiếu thông tin')
    //         }).catch((e)=> alert(e+''))
    // }

    render() {

        const textInputUserName = (
            <TextInput
                style={{ color: "#000000", fontSize: 16 }}
                value={this.props.userName}
                onChangeText={(text) => {
                    this.props.updateText(text, 'userName')
                }}
                editable={this.props.isEditUserName}
            />
        );

        const textInputEmail = (
            <TextInput
                style={styles.textInput}
                value={this.props.email}
                onChangeText={(text) => {
                    this.props.updateText(text, 'email')
                }}
                editable={this.props.isEditUserName}
                onEndEditing={() => {
                    if (this.props.email === '') {
                        alert('Vui lòng nhập địa chỉ Email')
                    }
                    else if (!validateEmail(this.props.email)) {
                        alert('Địa chỉ email chưa chính xác. Vui lòng kiểm tra lại.')
                    }

                }}
            />
        );

        const textInputPhoneNumber = (
            <TextInput
                style={styles.textInput}
                value={this.props.phoneNumber}
                onChangeText={(text) => {
                    this.props.updateText(text, 'phoneNumber')
                }}
                keyboardType='numeric'
                maxLength={10}
                editable={this.props.isEditUserName}
                onEndEditing={() => {
                    if (this.props.phoneNumber === '') {
                        alert('Vui lòng nhập số điện thoại')
                    }
                    else if (!validatePhoneNumber(this.props.phoneNumber) || this.props.phoneNumber.toString().length !== 10) {
                        alert('Số điện thoại chưa chính xác. Vui lòng kiểm tra lại.')
                    }
                }}
            />
        );

        const textInputPassword = (
            <TextInput
                style={styles.textInput}
                value={this.props.password}
                onChangeText={(text) => {
                    this.props.updateText(text, 'password')
                }}
                editable={this.props.isEditUserName}
                secureTextEntry={true}
                onEndEditing={() => {
                    if (this.props.password === '') {
                        alert('Vui lòng nhập mật khẩu')
                    }
                    else if (this.props.password.toString().length < 8) {
                        alert('Mật khẩu phải lớn hơn hoặc bằng 8 kí tự')
                    }

                }}
            />
        );

        const textInputBirthday = (
            <View>
                <TouchableOpacity onPress={() => {
                    this.props.isEditUserName ? this.props.showDatePicker(true) : ''
                }}>
                    <TextInput
                        style={styles.textInput}
                        value={this.props.birthday}
                        editable={false}
                    />
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.props.isShowDatePicker}
                    onCancel={this.props.showDatePicker(false)}
                    onConfirm={(date) => {
                        var arrDate = date.toString().split(' ')
                        this.props.updateText(checkMonth(arrDate[1]) + '-' + arrDate[2] + '-' + arrDate[3], 'birthday')
                    }}
                />
            </View>
        );


        const textInputAddress = (
            <TextInput
                style={styles.textInput}
                value={this.props.address}
                onChangeText={(text) => {
                    this.props.updateText(text, 'address')
                }}
                editable={this.props.isEditUserName}
                onEndEditing={() => {
                    if (this.props.address === '') {
                        alert('Vui lòng nhập địa chỉ nơi bạn đang sinh sống')
                    }
                    else if (!validateAddress(this.props.address)) {
                        alert('Địa chỉ không chứa các kí tự đặc biệt )!@#$%^&*( ')
                    }
                }}
            />
        );

        const switchSms = (
            <Switch
                value={this.props.switchSms}
                style={{ marginStart: 10 }}
                onValueChange={() => {
                    this.props.switchStatus(!this.props.switchSms, 'sms')
                }}
            />
        );

        const switchEmail = (
            <Switch
                value={this.props.switchEmail}
                style={{ marginStart: 10 }}
                onValueChange={() => {
                    this.props.switchStatus(!this.props.switchEmail, 'email')
                }}
            />
        );



        return <Profile
            textInputUserName={textInputUserName}
            textInputEmail={textInputEmail}
            textInputPhoneNumber={textInputPhoneNumber}
            textInputPassword={textInputPassword}
            textInputBirthday={textInputBirthday}
            textInputAddress={textInputAddress}
            switchSms={switchSms}
            switchEmail={switchEmail}
            onPressUserName={() => this.onPressUserName()}
            canceInputData={() => this.canceInputData()}
            // saveData={() => this.saveData()} 
            />
    }
}

function bindAction(dispatch) {
    return {
        updateText: (text, title) => dispatch(updateText(text, title)),
        editUserName: (status) => dispatch(editUserName(status)),
        switchStatus: (status, title) => dispatch(switchStatus(status, title)),
        showDatePicker: (status) => dispatch(showDatePicker(status)),
    };
}

const mapStateToProps = state => ({
    userName: state.profileReducer.userName,
    email: state.profileReducer.email,
    phoneNumber: state.profileReducer.phoneNumber,
    password: state.profileReducer.password,
    birthday: state.profileReducer.birthday,
    address: state.profileReducer.address,
    isEditUserName: state.profileReducer.isEditUserName,
    switchSms: state.profileReducer.switchSms,
    switchEmail: state.profileReducer.switchEmail,
    isShowDatePicker: state.profileReducer.isShowDatePicker,

});

export default connect(mapStateToProps, bindAction)(ProfileContainer);

const styles = StyleSheet.create({
    viewUser: {
        backgroundColor: "#d0d0d0",
        paddingTop: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        paddingEnd: 10,
        justifyContent: 'space-between'
    },
    grayline: {
        width: "100%",
        height: 1,
        backgroundColor: '#d6d6d6',
    },
    textTittle: {
        marginStart: 10,
        fontSize: 12,
        marginTop: 5
    },
    textInput: {
        color: '#000000',
        flex: 1,
        height: 40,
        paddingStart: 10
    },
    textHeader: {
        backgroundColor: '#d0d0d0',
        padding: 16
    },
    textOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16
    }
});
