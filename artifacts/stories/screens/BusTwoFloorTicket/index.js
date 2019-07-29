import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { RadioButton } from 'react-native-paper';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import xebuyt from '../../../../assets/Bus2FloorTicket/xebuyt.png';
import money from '../../../../assets/Bus2FloorTicket/money.png';
import visaCard from '../../../../assets/Bus2FloorTicket/visaCard.png';
import masterCard from '../../../../assets/Bus2FloorTicket/masterCard.png';
import atm from '../../../../assets/Bus2FloorTicket/atm.png';
import NavigationBar from '../../../theme/components/NavigationBar';
export default class BusTwoFloorTicket extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            textDay: 'mm/dd/yy',
            isShowDatePicker: false
        };
    }
    renderItem() {
        return (React.createElement(Image, { source: xebuyt, style: { width: deviceWidth, height: deviceHeight / 4 } }));
    }
    render() {
        return (React.createElement(View, { style: { backgroundColor: '#FFFFFF' } },
            React.createElement(ScrollView, { style: { marginTop: 50 } },
                React.createElement(View, { style: { flexDirection: 'row', height: deviceHeight / 4 } },
                    React.createElement(FlatList, { data: [1], renderItem: this.renderItem, horizontal: true })),
                React.createElement(View, { style: { height: 50, flexDirection: 'row', alignItems: 'center' } },
                    React.createElement(Text, { style: { color: '#000000', marginStart: 20 } },
                        "H\u1ECD v\u00E0 T\u00EAn ",
                        React.createElement(Text, { style: { color: 'red' } }, "*"),
                        ":"),
                    React.createElement(TextInput, { style: { flex: 1, height: 50 } })),
                React.createElement(View, { style: styles.grayline }),
                React.createElement(View, { style: { height: 50, flexDirection: 'row', alignItems: 'center' } },
                    React.createElement(Text, { style: { color: '#000000', marginStart: 20 } },
                        "Email ",
                        React.createElement(Text, { style: { color: 'red' } }, "*"),
                        ":"),
                    React.createElement(TextInput, { style: { flex: 1, height: 50 } })),
                React.createElement(View, { style: styles.grayline }),
                React.createElement(View, { style: { height: 50, flexDirection: 'row', alignItems: 'center' } },
                    React.createElement(Text, { style: { color: '#000000', marginStart: 20 } }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i :"),
                    React.createElement(TextInput, { style: { flex: 1, height: 50 }, keyboardType: 'numeric' })),
                React.createElement(View, { style: styles.grayline }),
                React.createElement(View, { style: { height: 50, flexDirection: 'row', alignItems: 'center' } },
                    React.createElement(Text, { style: { width: deviceWidth * 0.25, color: '#000000', marginStart: 20 } }, "Th\u00E0nh Ph\u1ED1 : "),
                    React.createElement(View, { style: { width: deviceWidth * 0.75, alignItems: 'center' } },
                        React.createElement(ModalDropdown, { options: ['Hà Nội', 'Thành phố HCM', 'Hải Phòng', 'Đà Nẵng', 'Cần Thơ'], defaultValue: 'Ch\u1ECDn th\u00E0nh ph\u1ED1', style: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', paddingStart: 10, paddingEnd: 10, height: 35 }, textStyle: { fontSize: 15, textAlign: 'left', textAlignVertical: 'center', color: '#000000' }, dropdownTextStyle: { fontSize: 14, marginStart: 10, marginEnd: 10 }, onSelect: (idx, value) => { } }))),
                React.createElement(View, { style: styles.grayline }),
                React.createElement(View, { style: { height: 50, flexDirection: 'row', alignItems: 'center' } },
                    React.createElement(Text, { style: { width: deviceWidth * 0.25, color: '#000000', marginStart: 20 } }, "Tuy\u1EBFn : "),
                    React.createElement(View, { style: { width: deviceWidth * 0.75, alignItems: 'center' } },
                        React.createElement(ModalDropdown, { options: ["Thăng Long - Hà Nội City Tour", "Thăng Long - Hà Nội City Tour", "Thăng Long - Hà Nội City Tour", "Thăng Long - Hà Nội City Tour", "Thăng Long - Hà Nội City Tour"], defaultValue: 'Ch\u1ECDn tuy\u1EBFn', style: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', paddingStart: 10, paddingEnd: 10, height: 35 }, textStyle: { fontSize: 15, textAlign: 'left', textAlignVertical: 'center', color: '#000000' }, dropdownTextStyle: { fontSize: 14, marginStart: 10, marginEnd: 10 }, onSelect: (idx, value) => { } }))),
                React.createElement(View, { style: styles.grayline }),
                React.createElement(Text, { style: { marginStart: 15, marginEnd: 10, marginTop: 10 } }, "M\u00F4 t\u1EA3: Th\u0103ng long \u2013 H\u00E0 N\u1ED9i City Tour v\u1EDBi l\u1ED9 tr\u00ECnh tuy\u1EBFn kho\u1EA3ng 90 ph\u00FAt s\u1EBD \u0111\u01B0a du kh\u00E1ch th\u0103m quan c\u00E1c danh lam th\u1EAFng c\u1EA3nh, c\u00E1c c\u00F4ng tr\u00ECnh, di t\u00EDch l\u1ECBch s\u1EED, v\u0103n h\u00F3a, t\u00F4n gi\u00E1o ch\u00EDnh c\u1EE7a th\u1EE7 \u0111\u00F4 H\u00E0 N\u1ED9i nh\u01B0: V\u01B0\u1EDDn hoa L\u00FD Th\u00E1i T\u1ED5, Kh\u00E1ch s\u1EA1n Sofitel Metropole, B\u1EA3o t\u00E0ng Qu\u00E2n \u0111\u1ED9i Vi\u1EC7t nam, Di t\u00EDch Ho\u00E0ng th\u00E0nh Th\u0103ng Long, \u0110\u1EC1n Qu\u00E1n Th\u00E1nh, Ch\u00F9a Tr\u1EA5n Qu\u1ED1c, C\u1EE5m di t\u00EDch L\u0103ng ch\u1EE7 t\u1ECBch H\u1ED3 Ch\u00ED Minh, V\u0103n mi\u1EBFu \u2013 Qu\u1ED1c T\u1EED Gi\u00E1m, Nh\u00E0 t\u00F9 H\u1ECFa L\u00F2, Nh\u00E0 th\u1EDD l\u1EDBn H\u00E0 N\u1ED9i, ph\u1ED1 c\u1ED5 H\u00E0 N\u1ED9i, H\u1ED3 G\u01B0\u01A1m, Nh\u00E0 h\u00E1t l\u1EDBn th\u00E0nh ph\u1ED1."),
                React.createElement(Text, { style: { marginStart: 15, marginEnd: 10, color: '#000000' } }, "\u0110i\u1EC3m b\u1EAFt \u0111\u1EA7u: V\u01B0\u1EDDn hoa Con C\u00F3c"),
                React.createElement(Text, { style: { marginStart: 15, marginEnd: 10, marginBottom: 10, color: '#000000' } }, "\u0110i\u1EC3m k\u1EBFt th\u00FAc: V\u01B0\u1EDDn hoa Con C\u00F3c"),
                React.createElement(View, { style: styles.grayline }),
                React.createElement(View, { style: { height: 50, flexDirection: 'row', alignItems: 'center' } },
                    React.createElement(Text, { style: { width: deviceWidth * 0.25, color: '#000000', marginStart: 20 } }, "\u0110\u1ED9 tu\u1ED5i : "),
                    React.createElement(View, { style: { width: deviceWidth * 0.75, alignItems: 'center' } },
                        React.createElement(ModalDropdown, { options: ["Dưới 6 tuổi", "Từ 6 đến 11 tuổi", "Trên 11 tuổi", "Trên 16 tuổi", "Trên 18 tuổi"], defaultValue: 'Ch\u1ECDn \u0111\u1ED9 tu\u1ED5i', style: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', paddingStart: 10, paddingEnd: 10, height: 35 }, textStyle: { fontSize: 15, textAlign: 'left', textAlignVertical: 'center', color: '#000000' }, dropdownTextStyle: { fontSize: 14, marginStart: 10, marginEnd: 10 }, onSelect: (idx, value) => { } }))),
                React.createElement(View, { style: styles.grayline }),
                React.createElement(View, { style: { height: 50, flexDirection: 'row', alignItems: 'center' } },
                    React.createElement(Text, { style: { width: deviceWidth * 0.25, color: '#000000', marginStart: 20 } }, "Lo\u1EA1i v\u00E9 : "),
                    React.createElement(View, { style: { width: deviceWidth * 0.75, alignItems: 'center' } },
                        React.createElement(ModalDropdown, { options: ["1 giờ", "4 giờ", "24 giờ", "48 giờ", "64 giờ"], defaultValue: 'Ch\u1ECDn lo\u1EA1i v\u00E9', style: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', paddingStart: 10, paddingEnd: 10, height: 35 }, textStyle: { fontSize: 15, textAlign: 'left', textAlignVertical: 'center', color: '#000000' }, dropdownTextStyle: { fontSize: 14, marginStart: 10, marginEnd: 10 }, onSelect: (idx, value) => { } }))),
                React.createElement(View, { style: styles.grayline }),
                React.createElement(Text, { style: { height: 50, backgroundColor: '#d0d0d0', color: '#000000', textAlignVertical: 'center', fontSize: 16, paddingStart: 10 } }, "PH\u01AF\u01A0NG TH\u1EE8C THANH TO\u00C1N"),
                React.createElement(RadioButton.Group, { value: 'first', onValueChange: () => { } },
                    React.createElement(View, { style: { height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingEnd: 15 } },
                        React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center', marginStart: 10 } },
                            React.createElement(RadioButton, { value: "first", color: '#0c7e7c' }),
                            React.createElement(Text, { style: { marginStart: 10, color: '#000000' } }, "Ti\u1EC1n trong v\u00ED")),
                        React.createElement(Image, { source: money })),
                    React.createElement(View, { style: styles.grayline }),
                    React.createElement(View, { style: { height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingEnd: 15 } },
                        React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center', marginStart: 10 } },
                            React.createElement(RadioButton, { value: "second", color: '#0c7e7c' }),
                            React.createElement(Text, { style: { marginStart: 10, color: '#000000' } }, "Th\u1EBB t\u00EDn d\u1EE5ng/ghi n\u1EE3")),
                        React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center' } },
                            React.createElement(Image, { source: visaCard, style: { marginEnd: 5 } }),
                            React.createElement(Image, { source: masterCard }))),
                    React.createElement(View, { style: styles.grayline }),
                    React.createElement(View, { style: { height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingEnd: 15 } },
                        React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center', marginStart: 10 } },
                            React.createElement(RadioButton, { value: "third", color: '#0c7e7c' }),
                            React.createElement(Text, { style: { marginStart: 10, color: '#000000' } }, "Th\u1EBB ATM n\u1ED9i \u0111\u1ECBa")),
                        React.createElement(Image, { source: atm })),
                    React.createElement(View, { style: styles.grayline })),
                React.createElement(Text, { style: { marginStart: 15, marignEnd: 10, marginTop: 10, marginBottom: 10 } }, "Sau khi thanh to\u00E1n th\u00E0nh c\u00F4ng, b\u1EA1n s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c m\u1ED9t email c\u00F3 v\u00E9 ch\u1EE9a t\u1EA5t c\u1EA3 th\u00F4ng tin b\u1EA1n c\u1EA7n!"),
                React.createElement(TouchableOpacity, { onPress: () => {
                        setTimeout(() => {
                            Alert.alert("Thông báo", "Đặt vé thành công!");
                            this.props.navigation.navigate('Home');
                        }, 2000);
                    } },
                    React.createElement(View, { style: { height: 45, backgroundColor: '#ebaa34', alignItems: 'center', justifyContent: 'center' } },
                        React.createElement(Text, { style: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 } }, "\u0110\u1EB6T V\u00C9")))),
            React.createElement(View, { style: { position: 'absolute', width: deviceWidth, height: 50, backgroundColor: '#000000' } },
                React.createElement(NavigationBar, { goBack: () => this.props.navigation.goBack(), title: 'V\u00E9 xe bu\u00FDt 2 t\u1EA7ng' }))));
    }
}
const styles = StyleSheet.create({
    grayline: {
        width: deviceWidth,
        height: 1,
        backgroundColor: '#d6d6d6',
    },
});
//# sourceMappingURL=index.js.map