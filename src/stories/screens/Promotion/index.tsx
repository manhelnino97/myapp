
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';

import sale from '../../../../assets/sale.png'
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

import NavigationBar from '../../../theme/components/NavigationBar'

export default class Promotion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            load: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ load: false })
        }, 800);
    }

    renderItem2 = ({ item }) => {
        return (
            <TouchableOpacity style={{ flexDirection: 'row', marginStart: 10, marginBottom: 10, marginEnd: 10, width: deviceWidth - 20, height: 100, backgroundColor: '#FFFFFF', borderLeftColor: '#ebaa34', borderLeftWidth: 5 }}>
                <View style={{ width: (deviceWidth - 10) / 4, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={item.image} style={{ width: 100, height: 100 }} />
                </View>
                <View style={{
                    width: (deviceWidth - 10) / 4 * 3, alignItems: 'center', justifyContent: 'center',
                }}>
                    <Text style={{ fontWeight: 'bold', color: 'red' }}>Khuyến mại </Text>
                    <Text style={{ color: 'red' }}>{item.type}</Text>
                    <Text>{item.content}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const data1 = [
            { id: '1', image: sale, type: "Xe Buýt 2 tầng Hà Nội", content: "Giảm giá 50% khi mua 4 vé trở lên" },
            { id: '2', image: sale, type: "Xe Buýt 2 tầng Hà Nội", content: "Giảm giá 20% từ 22-4 đến 2-5-2019" },
            { id: '3', image: sale, type: "Xe Buýt 2 tầng Hà Nội", content: "Miễn phí cho người thứ 5" },
            { id: '4', image: sale, type: "Xe Buýt 2 tầng Hà Nội", content: "Miễn phí cho trẻ dưới 6 tuổi" },
        ]

        return (
            <View style={{ backgroundColor: '#d9d9d9', flex: 1 }}>
                {this.state.load ?
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                        <ActivityIndicator size="large" color='#ebaa34' />
                    </View> :
                    <ScrollView style={{ marginTop: 60 }}>
                        <FlatList
                            data={data1}
                            renderItem={this.renderItem2}
                        />
                    </ScrollView>
                }
                <View style={{ position: 'absolute', width: deviceWidth, height: 50, backgroundColor: '#000000' }}>
                    <NavigationBar goBack={() => this.props.navigation.goBack()} title='Thông tin khuyến mại' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    grayline: {
        width: deviceWidth,
        height: 1,
        backgroundColor: '#d6d6d6',
    },
});
