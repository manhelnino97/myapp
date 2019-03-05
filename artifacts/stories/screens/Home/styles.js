import { StyleSheet, Dimensions } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        height: deviceHeight / 7,
        width: deviceWidth - 40,
        backgroundColor: "#f0f0f0",
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 25,
        marginStart: 20,
        marginEnd: 20,
        borderRadius: 10,
        position: 'absolute',
        top: deviceHeight / 5 - 20,
    }
});
export default styles;
//# sourceMappingURL=styles.js.map