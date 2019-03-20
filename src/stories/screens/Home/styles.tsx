import { StyleSheet,Dimensions } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const styles: any = StyleSheet.create({
	box: {
		height:deviceHeight / 6,
		width: deviceWidth - 40,
		backgroundColor: "#f0f0f0",
		justifyContent:'space-between',
		marginStart: 20,
		marginEnd: 20,
		borderRadius: 10,
		position: 'absolute',
		top: deviceHeight / 5 - 20,
	  }
});
export default styles;
