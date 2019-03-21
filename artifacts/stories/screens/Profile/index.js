import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import user from '../../../../assets/Profile/userlogin.png';
import NavigationBar from '../../../theme/components/NavigationBar';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heightDialog: 0,
            isShowDialog: false,
        };
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(View, { style: { marginTop: 50 } },
                React.createElement(ScrollView, null,
                    React.createElement(View, { style: { alignItems: 'center', justifyContent: 'center', margin: 20 } },
                        React.createElement(Image, { source: user, style: { width: 100, height: 100 } })),
                    React.createElement(Text, { style: styles.textTittle }, "H\u1ECD v\u00E0 t\u00EAn"),
                    this.props.textInputUserName,
                    React.createElement(View, { style: styles.grayline }),
                    React.createElement(Text, { style: styles.textTittle }, "Email"),
                    this.props.textInputEmail,
                    React.createElement(View, { style: styles.grayline }),
                    React.createElement(Text, { style: styles.textTittle }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"),
                    this.props.textInputPhoneNumber,
                    React.createElement(View, { style: styles.grayline }),
                    React.createElement(Text, { style: styles.textTittle }, "M\u1EADt kh\u1EA9u"),
                    this.props.textInputPassword,
                    React.createElement(View, { style: styles.grayline }),
                    React.createElement(Text, { style: styles.textTittle }, "Ng\u00E0y sinh"),
                    this.props.textInputBirthday,
                    React.createElement(View, { style: styles.grayline }),
                    React.createElement(Text, { style: styles.textTittle }, "\u0110\u1ECBa ch\u1EC9"),
                    this.props.textInputAddress,
                    React.createElement(View, { style: styles.grayline }),
                    React.createElement(TouchableOpacity, null,
                        React.createElement(View, { style: { width: deviceWidth, alignItems: 'center', justifyContent: 'center', padding: 15 } },
                            React.createElement(Text, { style: { color: '#ebaa34' } }, "L\u01AFU THAY \u0110\u1ED4I"))))),
            React.createElement(View, { style: { position: 'absolute', width: deviceWidth, height: 50, backgroundColor: '#000000' } },
                React.createElement(NavigationBar, { goBack: () => this.props.navigation.goBack(), title: 'Th\u00F4ng tin c\u00E1 nh\u00E2n' }))));
    }
}
const styles = StyleSheet.create({
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
});
//# sourceMappingURL=index.js.map