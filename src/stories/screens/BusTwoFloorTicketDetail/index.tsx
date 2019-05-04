
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown'
import DateTimePicker from 'react-native-modal-datetime-picker';
import { RadioButton } from 'react-native-paper';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import { checkMonth } from '../../../helper/Function'

import xebuyt from '../../../../assets/Bus2FloorTicket/xebuyt.png'
import bando from '../../../../assets/Bus2FloorTicket/bando.png'
import lichtrinh from '../../../../assets/Bus2FloorTicket/lichtrinh.png'
import giave from '../../../../assets/Bus2FloorTicket/giave.png'
import money from '../../../../assets/Bus2FloorTicket/money.png'
import visaCard from '../../../../assets/Bus2FloorTicket/visaCard.png'
import masterCard from '../../../../assets/Bus2FloorTicket/masterCard.png'
import atm from '../../../../assets/Bus2FloorTicket/atm.png'

import NavigationBar from '../../../theme/components/NavigationBar'
import Thumbnails from '../../../theme/components/Thumbnails';

export default class BusTwoFloorTicketDetail extends Component {

    state = {
        textDay: 'mm/dd/yy',
        isShowDatePicker: false
    }

    renderItem() {
        return (
            <Image source={xebuyt} style={{ width: deviceWidth, height: deviceHeight / 4 }} />
        )
    }

    render() {

        return (
            <View style={{ backgroundColor: '#FFFFFF' }}>
                <ScrollView style={{ marginTop: 50 }}>
                    <View style={{ flexDirection: 'row', height: deviceHeight / 4 }}>
                        <FlatList
                            data={[1]}
                            renderItem={this.renderItem}
                            horizontal={true}
                        />
                    </View>
                    <Text style={{ margin: 10, fontStyle: 'italic', color: 'c0c0c0' }}>Là một trong những sản phẩm xe buýt 2 tầng đầu tiên Hà Nội, Vietnam Sightseeing Thăng Long – Hà Nội City tour là một hình thức độc đáo để thưởng ngoạn những di sản văn hóa và lịch sử tại thủ đô ngàn năm văn hiến. </Text>
                    <Text style={{ width: deviceWidth, textAlign: 'center', fontWeight: 'bold', fontSize: 18, color: '#000000' }}>Điểm nổi bật</Text>
                    <Text style={{ marginStart: 10 }}>+ Khi tham gia 1 tuyến xe buýt quanh thủ đô Hà Nội, du khách có thể lên và xuống xe tại 11 điểm dừng bất kỳ.</Text>
                    <Text style={{ marginStart: 10 }}>+ Hệ thống thuyết minh tự động đa ngôn ngữ và hướng dẫn trực tiếp trên xe: tìm hiểu về tất cả những tinh hoa của các di tích lịch sử và văn hóa của Hà Nội.</Text>
                    <Text style={{ marginStart: 10 }}>+ Chuyến tham quan không giới hạn trong 4h / 24h / 48h với tầm nhìn toàn cảnh 360º ra thành phố Hà Nội.</Text>
                    <Text style={{ marginStart: 10 }}>+ Sách hướng dẫn miễn phí với bản đồ, đề xuất, và lịch trình tuyến.</Text>
                    <Text style={{ width: deviceWidth, textAlign: 'center', fontWeight: 'bold', fontSize: 18, color: '#000000' }}>Bản đồ</Text>
                    <ScrollView horizontal={true} style={{ width: deviceWidth, margin: 5 }}><Image source={bando} /></ScrollView>
                    <Text style={{ width: deviceWidth, textAlign: 'center', fontWeight: 'bold', fontSize: 18, color: '#000000' }}>Lịch trình tuyến</Text>
                    <ScrollView horizontal={true} style={{ width: deviceWidth, margin: 5 }}><Image source={lichtrinh} /></ScrollView>
                    <Text style={{ width: deviceWidth, textAlign: 'center', fontWeight: 'bold', fontSize: 18, color: '#000000' }}>Giá vé</Text>
                    <Text style={{ marginStart: 10 }}>+ Giá vé được niêm yết tại Vietnam Sightseeing là giá bán cuối cùng đã bao gồm thuế Giá trị gia tăng (VAT). Giá vé có thể thay đổi tùy thời điểm và chương trình khuyến mãi kèm theo và sẽ được hiển thị rõ tại trang Thanh toán khi quý khách tiến hành đặt hàng.</Text>
                    <Text style={{ marginStart: 10 }}>+ Chúng tôi phân loại giá vé theo hiệu lực sử dụng và độ tuổi như sau:</Text>
                    <ScrollView horizontal={true} style={{ width: deviceWidth }}><Image source={giave} /></ScrollView>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('BusTwoFloorTicket')}>
                        <View style={{ height: 45, backgroundColor: '#ebaa34', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 }}>ĐẶT VÉ</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                <View style={{ position: 'absolute', width: deviceWidth, height: 50, backgroundColor: '#000000' }}>
                    <NavigationBar goBack={() => this.props.navigation.goBack()} title='Vé xe buýt 2 tầng' />
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
