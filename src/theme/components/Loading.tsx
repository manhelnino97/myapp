import React from 'react';
import {
	View,
	StyleSheet,
	ActivityIndicator,
	StatusBar
} from 'react-native';

export default class LoadingScreen extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" color="#0000ff"/>
				<StatusBar barStyle="default" />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
