import * as React from "react";
import { Container, Content, Text } from "native-base";
import { View, FlatList, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from "./styles";
const { width, height } = Dimensions.get('window');
import logo from '../../../../assets/logo.png';
import pay from '../../../../assets/home/pay.png';
import notify from '../../../../assets/home/notify.png';
import profile from '../../../../assets/home/profile.png';
import bus from '../../../../assets/home/bus.png';
import ticket from '../../../../assets/home/ticket.png';
import plane from '../../../../assets/home/plane.png';
class Home extends React.Component {
    constructor() {
        super(...arguments);
        this.renderItem1 = ({ item }) => {
            return (React.createElement(TouchableOpacity, { style: { width: width / 4, alignItems: 'center' }, onPress: () => {
                    item.type === 'navigation' ? this.props.navigation.navigate(item.url) : this.props.navigation.navigate('WebSite', { url: item.url });
                } },
                React.createElement(Image, { source: item.icon, style: { width: height / 20, height: height / 20 } }),
                React.createElement(Text, { style: { fontSize: 13, color: '#ebaa34', marginTop: 5, textAlign: 'center', ellipsizeMode: 'tail' } }, item.name)));
        };
        this.renderItem2 = () => {
            return (React.createElement(TouchableOpacity, { style: { marginTop: 20 } },
                React.createElement(Image, { source: logo, style: { width: width * 2 / 3, height: height / 6, marginStart: 10 } })));
        };
    }
    render() {
        const data = [
            { id: '1', type: 'navigation', name: 'Vé xe buýt buýt buýt', url: 'BusTwoFloorTicket', icon: bus },
            { id: '2', type: 'webview', name: 'Vexere buýt buýt', url: 'https://vexere.com/', icon: ticket },
            { id: '3', type: 'webview', name: 'Vé máy bay buýt', url: 'https://www.gotadi.com/', icon: plane },
            { id: '4', type: 'webview', name: 'Vé máy bay buýt', url: 'https://www.gotadi.com/', icon: plane },
        ];
        return (React.createElement(Container, { style: { backgroundColor: '#FFFFFF' } },
            React.createElement(Content, null,
                React.createElement(ScrollView, null,
                    React.createElement(View, { style: { paddingBottom: 10 } },
                        React.createElement(Image, { source: logo, style: { width: width, height: height / 5 } }),
                        React.createElement(View, { style: styles.container },
                            React.createElement(View, { style: { width: width - 40, height: height / 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } },
                                React.createElement(Text, { style: { marginStart: 20, fontWeight: 'bold', color: '#ebaa34' } }, "S\u1ED1 d\u01B0"),
                                React.createElement(Text, { style: { marginEnd: 20, fontWeight: 'bold', color: '#ebaa34' } }, "69.000 \u0111")),
                            React.createElement(View, { style: { width: width - 60, height: 1, backgroundColor: '#e0e0e0', marginStart: 10, marginEnd: 10 } }),
                            React.createElement(View, { style: { width: width - 40, height: height / 10 - 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } },
                                React.createElement(TouchableOpacity, { onPress: () => { } },
                                    React.createElement(View, { style: { width: (width - 40) / 3, alignItems: 'center', justifyContent: 'center' } },
                                        React.createElement(Image, { source: pay, style: { width: height / 25, height: height / 25 } }),
                                        React.createElement(Text, { style: { fontSize: 14, color: '#ebaa34' } }, "N\u1EA1p ti\u1EC1n"))),
                                React.createElement(TouchableOpacity, { onPress: () => this.props.navigation.navigate('Profile') },
                                    React.createElement(View, { style: { width: (width - 40) / 3, alignItems: 'center', justifyContent: 'center' } },
                                        React.createElement(Image, { source: profile, style: { width: height / 25, height: height / 25 } }),
                                        React.createElement(Text, { style: { fontSize: 14, color: '#ebaa34' } }, "C\u00E1 nh\u00E2n"))),
                                React.createElement(TouchableOpacity, null,
                                    React.createElement(View, { style: { width: (width - 40) / 3, alignItems: 'center', justifyContent: 'center' } },
                                        React.createElement(Image, { source: notify, style: { width: height / 25, height: height / 25 } }),
                                        React.createElement(Text, { style: { fontSize: 14, color: '#ebaa34' } }, "Khuy\u1EBFn m\u1EA1i"))))),
                        React.createElement(Text, { style: { marginTop: height / 6 + 40, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 } }, "\u0110\u1EB6T V\u00C9 T\u00C0U, XE, M\u00C1Y BAY"),
                        React.createElement(FlatList, { data: data, renderItem: this.renderItem1, numColumns: 4 }),
                        React.createElement(Text, { style: { marginTop: 40, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 } }, "\u0110\u1EB6T V\u00C9 S\u1EF0 KI\u1EC6N"),
                        React.createElement(FlatList, { data: [1, 2, 3, 4], renderItem: this.renderItem2, horizontal: true }))))));
    }
}
export default Home;
//# sourceMappingURL=index.js.map