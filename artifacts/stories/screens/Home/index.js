import * as React from "react";
import { Container, Content, Text, Icon } from "native-base";
import { View, FlatList, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from "./styles";
const { width, height } = Dimensions.get('window');
import logo from '../../../../assets/logo.png';
class Home extends React.Component {
    constructor() {
        super(...arguments);
        this.renderItem1 = ({ item }) => {
            return (React.createElement(View, { style: {
                    height: 50, width: width / 4, alignItems: 'center', justifyContent: 'center',
                    marginTop: 10, marginBottom: 5
                } },
                React.createElement(TouchableOpacity, { style: { borderColor: '#d0d0d0', borderWidth: 1, width: width / 5, alignItems: 'center', backgroundColor: "#f0f0f0" }, onPress: () => {
                        this.props.navigation.navigate('WebSite', { url: item.url });
                    } },
                    React.createElement(Icon, { name: item.name }),
                    React.createElement(Text, null, item.name))));
        };
        this.renderItem2 = () => {
            return (React.createElement(TouchableOpacity, { style: {} },
                React.createElement(Image, { source: logo, style: { width: width * 2 / 3, height: height / 7, marginStart: 10 } })));
        };
    }
    render() {
        const data = [
            { id: '1', name: 'cart', url: 'https://www.gotadi.com/' },
            { id: '2', name: 'train', url: 'https://vexere.com/' },
            { id: '3', name: 'medkit', url: 'https://www.gotadi.com/' },
            { id: '4', name: 'alarm', url: 'https://vexere.com/' },
            { id: '5', name: 'flame', url: 'https://www.gotadi.com/' },
        ];
        return (React.createElement(Container, { style: { backgroundColor: '#FFFFFF' } },
            React.createElement(Content, null,
                React.createElement(ScrollView, null,
                    React.createElement(View, { style: { paddingBottom: 10 } },
                        React.createElement(Image, { source: logo, style: { width: width, height: height / 5 } }),
                        React.createElement(View, { style: styles.container },
                            React.createElement(View, { style: { width: width - 40, height: height / 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } },
                                React.createElement(Text, { style: { marginStart: 20, fontWeight: 'bold' } }, "S\u1ED1 d\u01B0"),
                                React.createElement(Text, { style: { marginEnd: 20, fontWeight: 'bold' } }, "69.000 \u0111")),
                            React.createElement(View, { style: { width: width - 40, height: 1, backgroundColor: '#d6d6d6' } }),
                            React.createElement(View, { style: { width: width - 40, height: height / 10 - 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } },
                                React.createElement(TouchableOpacity, { onPress: () => this.props.navigation.navigate('BusTwoFloorTicket') },
                                    React.createElement(View, { style: { width: (width - 40) / 4, alignItems: 'center', justifyContent: 'center' } },
                                        React.createElement(Icon, { name: 'cart' }),
                                        React.createElement(Text, null, "Mua v\u00E9"))),
                                React.createElement(TouchableOpacity, { onPress: () => this.props.navigation.navigate('Profile') },
                                    React.createElement(View, { style: { width: (width - 40) / 4, alignItems: 'center', justifyContent: 'center' } },
                                        React.createElement(Icon, { name: 'cart' }),
                                        React.createElement(Text, null, "Profile"))),
                                React.createElement(TouchableOpacity, null,
                                    React.createElement(View, { style: { width: (width - 40) / 4, alignItems: 'center', justifyContent: 'center' } },
                                        React.createElement(Icon, { name: 'cart' }),
                                        React.createElement(Text, null, "cart3"))),
                                React.createElement(TouchableOpacity, null,
                                    React.createElement(View, { style: { width: (width - 40) / 4, alignItems: 'center', justifyContent: 'center' } },
                                        React.createElement(Icon, { name: 'cart' }),
                                        React.createElement(Text, null, "cart4"))))),
                        React.createElement(Text, { style: { marginTop: height / 6, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 } }, "\u0110\u1EB6T V\u00C9 TH\u1EAENG C\u1EA2NH"),
                        React.createElement(FlatList, { data: data, renderItem: this.renderItem1, numColumns: 4 }),
                        React.createElement(Text, { style: { marginTop: 15, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 } }, "\u0110\u1EB6T V\u00C9 T\u00C0U, XE"),
                        React.createElement(FlatList, { data: data, renderItem: this.renderItem1, numColumns: 4 }),
                        React.createElement(Text, { style: { marginTop: 15, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 } }, "TITLE"),
                        React.createElement(FlatList, { data: [1, 2, 3, 4], renderItem: this.renderItem2, horizontal: true }),
                        React.createElement(Text, { style: { marginTop: 15, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 } }, "TITLE"),
                        React.createElement(FlatList, { data: [1, 2, 3, 4], renderItem: this.renderItem2, horizontal: true }))))));
    }
}
export default Home;
//# sourceMappingURL=index.js.map