import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { RadioButton } from 'react-native-paper';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import { checkMonth } from '../../../helper/Function';
import logo from '../../../../assets/logo.png';
import money from '../../../../assets/Bus2FloorTicket/money.png';
import visaCard from '../../../../assets/Bus2FloorTicket/visaCard.png';
import masterCard from '../../../../assets/Bus2FloorTicket/masterCard.png';
import atm from '../../../../assets/Bus2FloorTicket/atm.png';
import { ScrollView } from 'react-native';
export default class BusTwoFloorTicket extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            textDay: 'mm/dd/yy',
            isShowDatePicker: false
        };
    }
    renderItem2() {
        return (React.createElement(View, { style: { width: deviceWidth, height: deviceHeight / 7 } },
            React.createElement(TouchableOpacity, { style: {} },
                React.createElement(Image, { source: logo }))));
    }
    render() {
        return (React.createElement(ScrollView, { style: { backgroundColor: '#FFFFFF' } },
            React.createElement(View, { style: { flexDirection: 'row', height: deviceHeight / 4 } },
                React.createElement(FlatList, { data: [1, 2, 3, 4], renderItem: this.renderItem2, horizontal: true })),
            React.createElement(View, { style: { width: deviceWidth, alignItems: 'center', justifyContent: 'center', marginTop: 10 } },
                React.createElement(Text, { style: { color: '#000000', fontSize: 20 } }, "V\u00E9 xe bu\u00FDt 2 t\u1EA7ng H\u00E0 N\u1ED9i")),
            React.createElement(Text, { style: { height: 50, backgroundColor: '#d0d0d0', color: '#000000', textAlignVertical: 'center', fontSize: 16, paddingStart: 10, marginTop: 20 } }, "TH\u00D4NG TIN V\u00C9"),
            React.createElement(View, { style: { height: 50, flexDirection: 'row', alignItems: 'center' } },
                React.createElement(Text, { style: { width: deviceWidth * 0.25, color: '#000000', marginStart: 20 } }, "Lo\u1EA1i v\u00E9 : "),
                React.createElement(View, { style: { width: deviceWidth * 0.75, alignItems: 'center' } },
                    React.createElement(ModalDropdown, { options: ['Loại 1', 'Loại 2', 'Loại 3', 'Loại 4', 'Loại 5'], defaultValue: 'Lo\u1EA1i 1', style: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', paddingStart: 5, paddingEnd: 5, height: 35 }, textStyle: { fontSize: 15, textAlign: 'left', textAlignVertical: 'center', color: '#000000' }, dropdownTextStyle: { fontSize: 14, marginStart: 10, marginEnd: 10 }, onSelect: (idx, value) => { } }))),
            React.createElement(View, { style: styles.grayline }),
            React.createElement(View, { style: { height: 50, flexDirection: 'row', alignItems: 'center' } },
                React.createElement(Text, { style: { width: deviceWidth * 0.25, color: '#000000', marginStart: 20 } }, "S\u1ED1 l\u01B0\u1EE3ng : "),
                React.createElement(View, { style: { width: deviceWidth * 0.75, alignItems: 'center' } },
                    React.createElement(ModalDropdown, { options: ['1', '2', '3', '4', '5'], defaultValue: '1', style: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', paddingStart: 10, paddingEnd: 10, height: 35 }, textStyle: { fontSize: 15, textAlign: 'left', textAlignVertical: 'center', color: '#000000' }, dropdownTextStyle: { fontSize: 14, marginStart: 10, marginEnd: 10 }, onSelect: (idx, value) => { } }))),
            React.createElement(View, { style: styles.grayline }),
            React.createElement(View, { style: { height: 50, flexDirection: 'row', alignItems: 'center' } },
                React.createElement(Text, { style: { width: deviceWidth * 0.25, color: '#000000', marginStart: 20 } }, "Ng\u00E0y mua : "),
                React.createElement(View, { style: { width: deviceWidth * 0.75, alignItems: 'center' } },
                    React.createElement(TouchableOpacity, { onPress: () => this.setState({ isShowDatePicker: !this.state.isShowDatePicker }) },
                        React.createElement(TextInput, { style: { color: '#000000', backgroundColor: '#f0f0f0', paddingStart: 5, paddingEnd: 5, height: 35 }, value: this.state.textDay, editable: false }))),
                React.createElement(DateTimePicker, { isVisible: this.state.isShowDatePicker, onCancel: () => this.setState({ isShowDatePicker: !this.state.isShowDatePicker }), onConfirm: (date) => {
                        var arrDate = date.toString().split(' ');
                        this.setState({ textDay: checkMonth(arrDate[1]) + '-' + arrDate[2] + '-' + arrDate[3] });
                    } })),
            React.createElement(Text, { style: { height: 50, backgroundColor: '#d0d0d0', color: '#000000', textAlignVertical: 'center', fontSize: 16, paddingStart: 10 } }, "TH\u00D4NG TIN C\u00C1 NH\u00C2N"),
            React.createElement(View, { style: { height: 50, flexDirection: 'row', alignItems: 'center' } },
                React.createElement(Text, { style: { color: '#000000', marginStart: 20 } }, "H\u1ECD v\u00E0 T\u00EAn :"),
                React.createElement(TextInput, { style: { height: 50 } })),
            React.createElement(View, { style: styles.grayline }),
            React.createElement(View, { style: { height: 50, flexDirection: 'row', alignItems: 'center' } },
                React.createElement(Text, { style: { color: '#000000', marginStart: 20 } }, "Email :"),
                React.createElement(TextInput, { style: { height: 50 } })),
            React.createElement(View, { style: styles.grayline }),
            React.createElement(View, { style: { height: 50, flexDirection: 'row', alignItems: 'center' } },
                React.createElement(Text, { style: { color: '#000000', marginStart: 20 } }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i :"),
                React.createElement(TextInput, { style: { height: 50 }, keyboardType: 'numeric' })),
            React.createElement(View, { style: styles.grayline }),
            React.createElement(Text, { style: { height: 50, backgroundColor: '#d0d0d0', color: '#000000', textAlignVertical: 'center', fontSize: 16, paddingStart: 10 } }, "PH\u01AF\u01A0NG TH\u1EE8C THANH TO\u00C1N"),
            React.createElement(RadioButton.Group, { value: true, onValueChange: () => { } },
                React.createElement(View, { style: { height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingEnd: 10 } },
                    React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center', marginStart: 10 } },
                        React.createElement(RadioButton, { value: "first", color: '#0c7e7c' }),
                        React.createElement(Text, { style: { marginStart: 10, color: '#000000' } }, "Ti\u1EC1n trong v\u00ED")),
                    React.createElement(Image, { source: money })),
                React.createElement(View, { style: styles.grayline }),
                React.createElement(View, { style: { height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingEnd: 10 } },
                    React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center', marginStart: 10 } },
                        React.createElement(RadioButton, { value: "first", color: '#0c7e7c' }),
                        React.createElement(Text, { style: { marginStart: 10, color: '#000000' } }, "Th\u1EBB t\u00EDn d\u1EE5ng/ghi n\u1EE3")),
                    React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center' } },
                        React.createElement(Image, { source: visaCard, style: { marginEnd: 5 } }),
                        React.createElement(Image, { source: masterCard }))),
                React.createElement(View, { style: styles.grayline }),
                React.createElement(View, { style: { height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingEnd: 10 } },
                    React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center', marginStart: 10 } },
                        React.createElement(RadioButton, { value: "first", color: '#0c7e7c' }),
                        React.createElement(Text, { style: { marginStart: 10, color: '#000000' } }, "Th\u1EBB ATM n\u1ED9i \u0111\u1ECBa")),
                    React.createElement(Image, { source: atm })),
                React.createElement(View, { style: styles.grayline })),
            React.createElement(View, { style: { height: 50, backgroundColor: '#ebaa34', alignItems: 'center', justifyContent: 'center' } },
                React.createElement(Text, { style: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 } }, "\u0110\u1EB6T V\u00C9"))));
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