import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import user from '../../../../assets/Profile/userlogin.png';
import iconedit from '../../../../assets/Profile/iconedit.png';
import iconfoward from '../../../../assets/Profile/iconfoward.png';
import material from '../../../theme/variables/material';
import NavigationBar from '../../../theme/components/NavigationBar';
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
                    React.createElement(View, { style: styles.viewUser },
                        React.createElement(View, { style: { paddingStart: 40 } }),
                        React.createElement(View, { style: { alignItems: 'center' } },
                            React.createElement(Image, { source: user }),
                            this.props.textInputUserName),
                        React.createElement(View, { style: { justifyContent: 'flex-end' } },
                            React.createElement(TouchableOpacity, { onPress: () => {
                                    this.props.onPressUserName();
                                    this.setState({ heightDialog: 50 });
                                    this.setState({ isShowDialog: true });
                                } },
                                React.createElement(Image, { source: iconedit, style: { marginBottom: 10 } })))),
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
                    React.createElement(Text, { style: styles.textHeader }, "\u0110\u0102NG K\u00DD NH\u1EACN TIN"),
                    React.createElement(View, { style: styles.textOption },
                        React.createElement(Text, { style: { color: '#000000' } }, "Th\u00F4ng b\u00E1o qua SMS"),
                        this.props.switchSms),
                    React.createElement(View, { style: styles.grayline }),
                    React.createElement(View, { style: styles.textOption },
                        React.createElement(Text, { style: { color: '#000000' } }, "Th\u00F4ng b\u00E1o qua Email"),
                        this.props.switchEmail),
                    React.createElement(Text, { style: styles.textHeader }, "C\u00C0I \u0110\u1EB6T CHUNG"),
                    React.createElement(View, { style: styles.textOption },
                        React.createElement(Text, { style: { color: '#000000' } }, "Ng\u00F4n ng\u1EEF"),
                        React.createElement(TouchableOpacity, null,
                            React.createElement(View, { style: { flexDirection: 'row', marginEnd: 10 } },
                                React.createElement(Text, null, "Ti\u1EBFng Vi\u1EC7t"),
                                React.createElement(View, { style: { justifyContent: 'center', marginStart: 10 } },
                                    React.createElement(Image, { source: iconfoward }))))),
                    React.createElement(View, { style: styles.grayline }),
                    React.createElement(View, { style: styles.textOption },
                        React.createElement(Text, { style: { color: '#000000' } }, "Qu\u1EA3n l\u00FD \u0111\u1ECBa ch\u1EC9"),
                        React.createElement(TouchableOpacity, null,
                            React.createElement(View, { style: { flexDirection: 'row', marginEnd: 10 } },
                                React.createElement(Text, null, "Chi ti\u1EBFt"),
                                React.createElement(View, { style: { justifyContent: 'center', marginStart: 10 } },
                                    React.createElement(Image, { source: iconfoward }))))),
                    React.createElement(View, { style: styles.grayline }))),
            React.createElement(View, null,
                React.createElement(View, { style: { height: 50, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' } },
                    React.createElement(TouchableOpacity, { style: { marginEnd: 30 }, onPress: () => {
                            this.setState({ heightDialog: 0 });
                        } },
                        React.createElement(Text, { style: { fontSize: 15, color: '#0c7e7c' } }, "H\u1EE6Y")),
                    React.createElement(TouchableOpacity, { style: { marginEnd: 10 }, onPress: () => {
                            this.setState({ heightDialog: 0 });
                        } },
                        React.createElement(Text, { style: { fontSize: 15, color: '#0c7e7c' } }, "L\u01AFU")))),
            React.createElement(View, { style: { position: 'absolute', width: material.deviceWidth, height: 50, backgroundColor: '#000000' } },
                React.createElement(NavigationBar, { goBack: () => this.props.navigation.goBack(), title: 'Th\u00F4ng tin c\u00E1 nh\u00E2n' }))));
    }
}
const styles = StyleSheet.create({
    viewUser: {
        backgroundColor: "#d0d0d0",
        paddingTop: 10,
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
        color: '#000000'
    },
    textHeader: {
        backgroundColor: '#d0d0d0',
        padding: 16
    },
    textOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        paddingStart: 15,
        paddingEnd: 5,
        alignItems: 'center'
    }
});
//# sourceMappingURL=index.js.map