import * as React from "react";
import { Container, Content, Text, Icon, } from "native-base";
import { View, FlatList, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from "./styles";
const { width, height } = Dimensions.get('window');
import logo from '../../../../assets/logo.png';
import user from '../../../../assets/home/userlogin.png';
class Home extends React.Component {
    // componentDidMount(){
    //   this.props.navigation.navigate("DrawerOpen")
    // }
    renderItem1({ item, index }) {
        return (React.createElement(View, { style: {
                height: 50, width: width / 4, alignItems: 'center', justifyContent: 'center',
                marginTop: 10, marginBottom: 5
            } },
            React.createElement(TouchableOpacity, { style: { borderColor: '#d0d0d0', borderWidth: 1, width: width / 5, alignItems: 'center', backgroundColor: "#f0f0f0" } },
                React.createElement(Icon, { name: item.key }),
                React.createElement(Text, null, item.key))));
    }
    renderItem2({ item, index }) {
        return (React.createElement(View, { style: { width: width * 2 / 3, height: height / 7, margin: 10 } },
            React.createElement(TouchableOpacity, { style: {} },
                React.createElement(Image, { source: logo }))));
    }
    render() {
        return (React.createElement(Container, { style: { backgroundColor: '#FFFFFF' } },
            React.createElement(Content, null,
                React.createElement(ScrollView, null,
                    React.createElement(View, { style: { paddingBottom: 10 } },
                        React.createElement(Image, { source: logo, style: { width: width, height: height / 5 } }),
                        React.createElement(View, { style: styles.container },
                            React.createElement(Image, { source: user, style: { marginStart: 10 } }),
                            React.createElement(View, { style: { flexDirection: 'column', marginStart: 15 } },
                                React.createElement(Text, { style: { fontWeight: 'bold' } }, "Ho\u00E0ng Ti\u1EBFn M\u1EA1nh 123"),
                                React.createElement(Text, null, "144 Xu\u00E2n Th\u1EE7y, C\u1EA7u Gi\u1EA5y, H\u00E0 N\u1ED9i"),
                                React.createElement(Text, null, "0338668369"))),
                        React.createElement(Text, { style: { marginTop: height / 7, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 } }, "\u0110\u1EB6T V\u00C9 TH\u1EAENG C\u1EA2NH"),
                        React.createElement(FlatList, { contentContainerStyle: {}, data: [{ key: 'cart' }, { key: 'train' }, { key: 'medkit' }, { key: 'alarm' }, { key: 'flame' }], renderItem: this.renderItem1, numColumns: 4 }),
                        React.createElement(Text, { style: { marginTop: 15, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 } }, "\u0110\u1EB6T V\u00C9 T\u00C0U, XE"),
                        React.createElement(FlatList, { contentContainerStyle: {}, data: [{ key: 'cart' }, { key: 'train' }, { key: 'medkit' }, { key: 'alarm' }, { key: 'flame' }], renderItem: this.renderItem1, numColumns: 4 }),
                        React.createElement(Text, { style: { marginTop: 15, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 } }, "TITLE"),
                        React.createElement(FlatList, { data: [1, 2, 3, 4], renderItem: this.renderItem2, horizontal: true }),
                        React.createElement(Text, { style: { marginTop: 15, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 } }, "TITLE"),
                        React.createElement(FlatList, { data: [1, 2, 3, 4], renderItem: this.renderItem2, horizontal: true }))))));
    }
}
export default Home;
//# sourceMappingURL=index.js.map