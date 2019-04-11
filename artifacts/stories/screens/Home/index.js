import * as React from "react";
import { View, FlatList, Dimensions, TouchableOpacity, ScrollView, Image, Text } from 'react-native';
import styles from "./styles";
import logo from '../../../../assets/logo.png';
import pay from '../../../../assets/home/pay.png';
import notify from '../../../../assets/home/notify.png';
import profile from '../../../../assets/home/profile.png';
import bus from '../../../../assets/home/bus.png';
import ticket from '../../../../assets/home/ticket.png';
import plane from '../../../../assets/home/plane.png';
import vcs from '../../../../assets/vcs.png';
import sun from '../../../../assets/sun.png';
import nhac from '../../../../assets/nhac.png';
import saigon from '../../../../assets/saigon.png';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
class Home extends React.Component {
    constructor() {
        super(...arguments);
        this.renderItem1 = ({ item }) => {
            return (React.createElement(TouchableOpacity, { style: { width: deviceWidth / 4, alignItems: 'center', marginTop: 10 }, onPress: () => {
                    item.type === 'navigation' ? this.props.navigation.navigate(item.url) : this.props.navigation.navigate('WebSite', { url: item.url, name: item.name });
                } },
                React.createElement(Image, { source: item.icon, style: { width: deviceHeight / 20, height: deviceHeight / 20 } }),
                React.createElement(Text, { style: { fontSize: 13, color: '#ebaa34', marginTop: 5, textAlign: 'center', padding: 5 }, numberOfLines: 1, ellipsizeMode: 'tail' }, item.name)));
        };
        this.renderItem2 = ({ item }) => {
            return (React.createElement(TouchableOpacity, { style: { marginStart: 10, marginBottom: 10 } },
                React.createElement(Image, { source: item.image, style: { width: deviceWidth - 20, height: deviceHeight / 5 } })));
        };
    }
    render() {
        const data = [
            { id: '1', type: 'navigation', name: 'Vé xe buýt 2 tầng', url: 'BusTwoFloorTicket', icon: bus },
            { id: '2', type: 'webview', name: 'Vé xe khách ', url: 'https://vexere.com/', icon: ticket },
            { id: '3', type: 'webview', name: 'Vé máy bay', url: 'https://www.gotadi.com/', icon: plane },
            { id: '3', type: 'webview', name: 'Vé tàu hỏa', url: 'http://datve.vetaugiare24h.com/home2.php', icon: bus },
        ];
        const data1 = [
            { id: '1', image: vcs },
            { id: '2', image: nhac },
            { id: '3', image: sun },
            { id: '4', image: saigon },
        ];
        return (React.createElement(View, { style: { backgroundColor: '#FFFFFF' } },
            React.createElement(ScrollView, null,
                React.createElement(View, { style: { paddingBottom: 10 } },
                    React.createElement(Image, { source: logo, style: { width: deviceWidth, height: deviceHeight / 5 } }),
                    React.createElement(View, { style: styles.box },
                        React.createElement(View, { style: { width: deviceWidth - 40, height: deviceHeight / 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } },
                            React.createElement(Text, { style: { marginStart: 20, marginEnd: 5, fontWeight: 'bold', color: '#ebaa34' } }, "S\u1ED1 d\u01B0"),
                            React.createElement(Text, { style: { marginEnd: 20, fontWeight: 'bold', color: '#ebaa34' } }, "69.000 \u0111")),
                        React.createElement(View, { style: { width: deviceWidth - 60, height: 1, backgroundColor: '#e0e0e0', marginStart: 10, marginEnd: 10 } }),
                        React.createElement(View, { style: { width: deviceWidth - 40, height: deviceHeight / 10 - 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } },
                            React.createElement(TouchableOpacity, { onPress: () => this.props.navigation.navigate('Recharge') },
                                React.createElement(View, { style: { width: (deviceWidth - 40) / 3, alignItems: 'center', justifyContent: 'center' } },
                                    React.createElement(Image, { source: pay, style: { width: deviceHeight / 25, height: deviceHeight / 25 } }),
                                    React.createElement(Text, { style: { fontSize: 14, color: '#ebaa34' } }, "N\u1EA1p ti\u1EC1n"))),
                            React.createElement(TouchableOpacity, { onPress: () => this.props.navigation.navigate('Personal') },
                                React.createElement(View, { style: { width: (deviceWidth - 40) / 3, alignItems: 'center', justifyContent: 'center' } },
                                    React.createElement(Image, { source: profile, style: { width: deviceHeight / 25, height: deviceHeight / 25 } }),
                                    React.createElement(Text, { style: { fontSize: 14, color: '#ebaa34' } }, "T\u00E0i kho\u1EA3n"))),
                            React.createElement(TouchableOpacity, { onPress: () => this.props.navigation.navigate('Promotion') },
                                React.createElement(View, { style: { width: (deviceWidth - 40) / 3, alignItems: 'center', justifyContent: 'center' } },
                                    React.createElement(Image, { source: notify, style: { width: deviceHeight / 25, height: deviceHeight / 25 } }),
                                    React.createElement(Text, { style: { fontSize: 14, color: '#ebaa34' } }, "Khuy\u1EBFn m\u1EA1i"))))),
                    React.createElement(Text, { style: { marginTop: deviceHeight / 6 + 15, color: '#85563a', fontWeight: 'bold', fontSize: 15, marginStart: 10 } }, "\u0110\u1EB6T V\u00C9 T\u00C0U, XE, M\u00C1Y BAY"),
                    React.createElement(FlatList, { data: data, renderItem: this.renderItem1, numColumns: 4 }),
                    React.createElement(View, { style: { marginTop: 30, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' } },
                        React.createElement(Text, { style: { color: '#85563a', fontWeight: 'bold', fontSize: 15, marginStart: 10 } }, "\u0110\u1EB6T V\u00C9 S\u1EF0 KI\u1EC6N"),
                        React.createElement(TouchableOpacity, { onPress: () => this.props.navigation.navigate('AllEvents') },
                            React.createElement(Text, { style: { fontSize: 13, color: '#85563a', marginEnd: 10 } },
                                "Xem t\u1EA5t c\u1EA3 s\u1EF1 ki\u1EC7n  ",
                                React.createElement(Text, { style: { fontSize: 16 } }, ">")))),
                    React.createElement(FlatList, { data: data1, renderItem: this.renderItem2 })))));
    }
}
export default Home;
//# sourceMappingURL=index.js.map