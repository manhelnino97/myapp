import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Switch } from 'react-native';
import { connect } from "react-redux";
import Profile from '../../stories/screens/Profile';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { updateText, editUserName, switchStatus, showDatePicker } from './actions';
import { checkMonth } from '../../helper/Function';
class ProfileContainer extends React.Component {
    componentDidMount() {
        this.fillData();
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
        this.props.editUserName(true);
    }
    canceInputData() {
        // this.fillData()
        this.props.editUserName(false);
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
        const textInputUserName = (React.createElement(TextInput, { style: { color: "#000000", fontSize: 16 }, value: this.props.userName, onChangeText: (text) => {
                this.props.updateText(text, 'userName');
            }, editable: this.props.isEditUserName }));
        const textInputEmail = (React.createElement(TextInput, { style: styles.textInput, value: this.props.email, onChangeText: (text) => {
                this.props.updateText(text, 'email');
            }, editable: this.props.isEditUserName }));
        const textInputPhoneNumber = (React.createElement(TextInput, { style: styles.textInput, value: this.props.phoneNumber, onChangeText: (text) => {
                this.props.updateText(text, 'phoneNumber');
            }, keyboardType: 'numeric', maxLength: 10, editable: this.props.isEditUserName }));
        const textInputPassword = (React.createElement(TextInput, { style: styles.textInput, value: this.props.password, onChangeText: (text) => {
                this.props.updateText(text, 'password');
            }, editable: this.props.isEditUserName, secureTextEntry: true }));
        const textInputBirthday = (React.createElement(View, null,
            React.createElement(TouchableOpacity, { onPress: () => {
                    this.props.isEditUserName ? this.props.showDatePicker(true) : '';
                } },
                React.createElement(TextInput, { style: styles.textInput, value: this.props.birthday, editable: false })),
            React.createElement(DateTimePicker, { isVisible: this.props.isShowDatePicker, onCancel: this.props.showDatePicker(false), onConfirm: (date) => {
                    var arrDate = date.toString().split(' ');
                    this.props.updateText(checkMonth(arrDate[1]) + '-' + arrDate[2] + '-' + arrDate[3], 'birthday');
                } })));
        const textInputAddress = (React.createElement(TextInput, { style: styles.textInput, value: this.props.address, onChangeText: (text) => {
                this.props.updateText(text, 'address');
            }, editable: this.props.isEditUserName }));
        const switchSms = (React.createElement(Switch, { value: this.props.switchSms, style: { marginStart: 10 }, onValueChange: () => {
                this.props.switchStatus(!this.props.switchSms, 'sms');
            } }));
        const switchEmail = (React.createElement(Switch, { value: this.props.switchEmail, style: { marginStart: 10 }, onValueChange: () => {
                this.props.switchStatus(!this.props.switchEmail, 'email');
            } }));
        return React.createElement(Profile, { textInputUserName: textInputUserName, textInputEmail: textInputEmail, textInputPhoneNumber: textInputPhoneNumber, textInputPassword: textInputPassword, textInputBirthday: textInputBirthday, textInputAddress: textInputAddress, switchSms: switchSms, switchEmail: switchEmail, onPressUserName: () => this.onPressUserName(), canceInputData: () => this.canceInputData() });
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
//# sourceMappingURL=index.js.map