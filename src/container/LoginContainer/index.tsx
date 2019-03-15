import React, { Component } from 'react'
import { connect } from "react-redux";
import Login from '../../stories/screens/Login';
import { View, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import { updateText } from './action';

export interface State { }
export interface Props {
	email: Object,
	password: Object,
	updateText: Function,
}

class LoginContainer extends Component<Props, State> {

	static navigationOptions = {
        header: null
    };

	render() {

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

		return <Login
			navigation={this.props.navigation}
			textInputEmail={textInputEmail}
			textInputPassword={textInputPassword} />;
	}
}

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

