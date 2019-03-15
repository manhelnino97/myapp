import React, { Component } from 'react';
import { connect } from "react-redux";
import Login from '../../stories/screens/Login';
import { TextInput, StyleSheet } from 'react-native';
import { updateText } from './action';
class LoginContainer extends Component {
    render() {
        const textInputEmail = (React.createElement(TextInput, { style: styles.textInput, value: this.props.email.toString(), placeholder: 'Email', placeholderTextColor: "#999999", onChangeText: (text) => {
                this.props.updateText(text, 'email');
            } }));
        const textInputPassword = (React.createElement(TextInput, { style: styles.textInput, value: this.props.password.toString(), placeholder: 'Mật khẩu', placeholderTextColor: "#999999", onChangeText: (text) => {
                this.props.updateText(text, 'password');
            }, secureTextEntry: true }));
        return React.createElement(Login, { navigation: this.props.navigation, textInputEmail: textInputEmail, textInputPassword: textInputPassword });
    }
}
LoginContainer.navigationOptions = {
    header: null
};
function bindAction(dispatch) {
    return {
        updateText: (text, title) => dispatch(updateText(text, title)),
    };
}
const mapStateToProps = state => ({
    email: state.loginReducer.email,
    password: state.loginReducer.password,
});
export default connect(mapStateToProps, bindAction)(LoginContainer);
const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        height: 60,
        color: '#000000',
        marginStart: 8
    }
});
//# sourceMappingURL=index.js.map