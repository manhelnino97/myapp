
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import visaCard from '../../../../assets/Bus2FloorTicket/visaCard.png'
import masterCard from '../../../../assets/Bus2FloorTicket/masterCard.png'
import atm from '../../../../assets/Bus2FloorTicket/atm.png'
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

import NavigationBar from '../../../theme/components/NavigationBar'

export default class Recharge extends Component {

    state = {

    }

    render() {


        return (
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <View style={{ marginTop: 60, width: deviceWidth, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#85563a' }}>Số dư trong ví</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#85563a' }}>69.000 đ</Text>
                </View>
                <View style={{ width: deviceWidth, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingStart: 10, paddingEnd: 20, marginTop: 10 }}>
                    <TextInput
                        placeholder='Nhập số tiền'
                        placeholderTextColor='#999999'
                        style={{ fontSize: 20, color: '#85563a', height: 60 }}
                        keyboardType='numeric'
                    />
                    <Text style={{ fontSize: 20, color: '#85563a' }}>đ</Text>
                </View>
                <View style={styles.grayline} />
                <View style={{ width: deviceWidth, backgroundColor: '#e0e0e0', height: 40, justifyContent: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 16, marginStart: 10 }}>CHỌN NGUỒN TIỀN</Text>
                </View>

                <RadioButton.Group
                    value={'first'}
                    onValueChange={() => { }}>
                    <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingEnd: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 10 }}>
                            <RadioButton value="second" color='#0c7e7c' />
                            <Text style={{ marginStart: 10, color: '#000000' }}>Thẻ tín dụng/ghi nợ</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={visaCard} style={{ marginEnd: 5 }} />
                            <Image source={masterCard} />
                        </View>
                    </View>
                    <View style={styles.grayline} />
                    <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingEnd: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 10 }}>
                            <RadioButton value="third" color='#0c7e7c' />
                            <Text style={{ marginStart: 10, color: '#000000' }}>Thẻ ATM nội địa</Text>
                        </View>
                        <Image source={atm} />
                    </View>
                    <View style={styles.grayline} />
                </RadioButton.Group>
                <TouchableOpacity style={{ position: 'absolute', bottom: 0, width: deviceWidth, height: 45, backgroundColor: '#ebaa34', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 }}>NẠP TIỀN</Text>
                </TouchableOpacity>
                <View style={{ position: 'absolute', width: deviceWidth, height: 50, backgroundColor: '#000000' }}>
                    <NavigationBar goBack={() => this.props.navigation.goBack()} title='Nạp tiền vào ví' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    grayline: {
        width: deviceWidth - 30,
        height: 1,
        backgroundColor: '#d6d6d6',
        marginStart: 10,
        marginEnd: 20,
    },
});
