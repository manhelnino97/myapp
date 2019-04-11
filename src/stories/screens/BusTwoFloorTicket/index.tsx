
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown'
import DateTimePicker from 'react-native-modal-datetime-picker';
import { RadioButton } from 'react-native-paper';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import { checkMonth } from '../../../helper/Function'

import xebuyt from '../../../../assets/Bus2FloorTicket/xebuyt.png'
import money from '../../../../assets/Bus2FloorTicket/money.png'
import visaCard from '../../../../assets/Bus2FloorTicket/visaCard.png'
import masterCard from '../../../../assets/Bus2FloorTicket/masterCard.png'
import atm from '../../../../assets/Bus2FloorTicket/atm.png'

import NavigationBar from '../../../theme/components/NavigationBar'

export default class BusTwoFloorTicket extends Component {

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

          <View style={{ height: 30, backgroundColor: '#d0d0d0' }}></View>

          <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#000000', marginStart: 20 }} >Họ và Tên <Text style={{ color: 'red' }}>*</Text>:</Text>
            <TextInput style={{ flex: 1, height: 50 }}
            />
          </View>
          <View style={styles.grayline} />

          <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#000000', marginStart: 20 }} >Email <Text style={{ color: 'red' }}>*</Text>:</Text>
            <TextInput style={{ flex: 1, height: 50 }}
            />
          </View>
          <View style={styles.grayline} />

          <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#000000', marginStart: 20 }} >Số điện thoại :</Text>
            <TextInput
              style={{ flex: 1, height: 50 }}
              keyboardType='numeric'
            />
          </View>
          <View style={styles.grayline} />

          <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ width: deviceWidth * 0.25, color: '#000000', marginStart: 20 }} >Thành Phố : </Text>
            <View style={{ width: deviceWidth * 0.75, alignItems: 'center' }}>
              <ModalDropdown
                options={['Hà Nội']}
                defaultValue='Chọn thành phố'
                style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', paddingStart: 10, paddingEnd: 10, height: 35 }}
                textStyle={{ fontSize: 15, textAlign: 'left', textAlignVertical: 'center', color: '#000000' }}
                dropdownTextStyle={{ fontSize: 14, marginStart: 10, marginEnd: 10 }}
                onSelect={(idx, value) => { }}
              />
            </View>
          </View>
          <View style={styles.grayline} />

          <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ width: deviceWidth * 0.25, color: '#000000', marginStart: 20 }} >Tuyến : </Text>
            <View style={{ width: deviceWidth * 0.75, alignItems: 'center' }}>
              <ModalDropdown
                options={["Thăng Long - Hà Nội City Tour"]}
                defaultValue='Chọn tuyến'
                style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', paddingStart: 10, paddingEnd: 10, height: 35 }}
                textStyle={{ fontSize: 15, textAlign: 'left', textAlignVertical: 'center', color: '#000000' }}
                dropdownTextStyle={{ fontSize: 14, marginStart: 10, marginEnd: 10 }}
                onSelect={(idx, value) => { }}
              />
            </View>
          </View>
          <View style={styles.grayline} />

          <Text style={{ marginStart: 15, marginEnd: 10, marginTop: 10 }}>
            Mô tả: Thăng long – Hà Nội City Tour với lộ trình tuyến khoảng 90 phút sẽ đưa du khách thăm quan các danh lam thắng cảnh, các công trình, di tích lịch sử, văn hóa, tôn giáo chính của thủ đô Hà Nội như: Vườn hoa Lý Thái Tổ, Khách sạn Sofitel Metropole, Bảo tàng Quân đội Việt nam, Di tích Hoàng thành Thăng Long, Đền Quán Thánh, Chùa Trấn Quốc, Cụm di tích Lăng chủ tịch Hồ Chí Minh, Văn miếu – Quốc Tử Giám, Nhà tù Hỏa Lò, Nhà thờ lớn Hà Nội, phố cổ Hà Nội, Hồ Gươm, Nhà hát lớn thành phố.
          </Text>
          <Text style={{ marginStart: 15, marginEnd: 10, color: '#000000' }}>Điểm bắt đầu: Vườn hoa Con Cóc</Text>
          <Text style={{ marginStart: 15, marginEnd: 10, marginBottom: 10, color: '#000000' }}>Điểm kết thúc: Vườn hoa Con Cóc</Text>

          <View style={styles.grayline} />
          <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ width: deviceWidth * 0.25, color: '#000000', marginStart: 20 }} >Độ tuổi : </Text>
            <View style={{ width: deviceWidth * 0.75, alignItems: 'center' }}>
              <ModalDropdown
                options={["Từ 6 đến 11 tuổi", "Trên 11 tuổi"]}
                defaultValue='Chọn độ tuổi'
                style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', paddingStart: 10, paddingEnd: 10, height: 35 }}
                textStyle={{ fontSize: 15, textAlign: 'left', textAlignVertical: 'center', color: '#000000' }}
                dropdownTextStyle={{ fontSize: 14, marginStart: 10, marginEnd: 10 }}
                onSelect={(idx, value) => { }}
              />
            </View>
          </View>
          <View style={styles.grayline} />

          <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ width: deviceWidth * 0.25, color: '#000000', marginStart: 20 }} >Loại vé : </Text>
            <View style={{ width: deviceWidth * 0.75, alignItems: 'center' }}>
              <ModalDropdown
                options={["4 giờ", "24 giờ", "48 giờ"]}
                defaultValue='Chọn loại vé'
                style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', paddingStart: 10, paddingEnd: 10, height: 35 }}
                textStyle={{ fontSize: 15, textAlign: 'left', textAlignVertical: 'center', color: '#000000' }}
                dropdownTextStyle={{ fontSize: 14, marginStart: 10, marginEnd: 10 }}
                onSelect={(idx, value) => { }}
              />
            </View>
          </View>
          <View style={styles.grayline} />

          {/* <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ width: deviceWidth * 0.25, color: '#000000', marginStart: 20 }} >Ngày mua : </Text>
            <View style={{ width: deviceWidth * 0.75, alignItems: 'center' }}>
              <View style={{ backgroundColor: '#f0f0f0', paddingStart: 10, paddingEnd: 10, height: 35, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                  onPress={() => this.setState({ isShowDatePicker: !this.state.isShowDatePicker })}>
                  <Text style={{ fontSize: 15, color: '#000000' }}>{this.state.textDay}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <DateTimePicker
              isVisible={this.state.isShowDatePicker}
              onCancel={() => this.setState({ isShowDatePicker: !this.state.isShowDatePicker })}
              onConfirm={(date) => {
                var arrDate = date.toString().split(' ')
                this.setState({ textDay: checkMonth(arrDate[1]) + '-' + arrDate[2] + '-' + arrDate[3] })
              }}
            />
          </View> */}

          <Text style={{ height: 50, backgroundColor: '#d0d0d0', color: '#000000', textAlignVertical: 'center', fontSize: 16, paddingStart: 10 }}>PHƯƠNG THỨC THANH TOÁN</Text>
          <RadioButton.Group
            value={'first'}
            onValueChange={() => { }}>
            <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingEnd: 15 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 10 }}>
                <RadioButton value="first" color='#0c7e7c' />
                <Text style={{ marginStart: 10, color: '#000000' }}>Tiền trong ví</Text>
              </View>
              <Image source={money} />
            </View>
            <View style={styles.grayline} />
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

          <Text style={{marginStart:15, marignEnd:10}}>Sau khi thanh toán thành công, bạn sẽ nhận được một email có vé chứa tất cả thông tin bạn cần!</Text>
          <TouchableOpacity>
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
