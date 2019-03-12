
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown'
import DateTimePicker from 'react-native-modal-datetime-picker';
import { RadioButton } from 'react-native-paper';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import { checkMonth } from '../../../helper/Function'

import logo from '../../../../assets/logo.png'
import money from '../../../../assets/Bus2FloorTicket/money.png'
import visaCard from '../../../../assets/Bus2FloorTicket/visaCard.png'
import masterCard from '../../../../assets/Bus2FloorTicket/masterCard.png'
import atm from '../../../../assets/Bus2FloorTicket/atm.png'
import { ScrollView } from 'react-native';

export default class BusTwoFloorTicket extends Component {

  state = {
    textDay: 'mm/dd/yy',
    isShowDatePicker: false
  }

  renderItem2() {
    return (
      <View style={{ width: deviceWidth, height: deviceHeight / 7 }} >
        <TouchableOpacity style={{}}>
          <Image source={logo} />
        </TouchableOpacity>
      </View>
    )
  }

  render() {

    return (
      <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
        <View style={{ flexDirection: 'row', height: deviceHeight / 4 }}>
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={this.renderItem2}
            horizontal={true}
          />
        </View>
        <View style={{ width: deviceWidth, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
          <Text style={{ color: '#000000', fontSize: 20 }}>Vé xe buýt 2 tầng Hà Nội</Text>
        </View>

        <Text style={{ height: 50, backgroundColor: '#d0d0d0', color: '#000000', textAlignVertical: 'center', fontSize: 16, paddingStart: 10, marginTop: 20 }}>THÔNG TIN VÉ</Text>

        <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ width: deviceWidth * 0.25, color: '#000000', marginStart: 20 }} >Loại vé : </Text>
          <View style={{ width: deviceWidth * 0.75, alignItems: 'center' }}>
            <ModalDropdown
              options={['Loại 1', 'Loại 2', 'Loại 3', 'Loại 4', 'Loại 5']}
              defaultValue='Loại 1'
              style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', paddingStart: 5, paddingEnd: 5, height: 35 }}
              textStyle={{ fontSize: 15, textAlign: 'left', textAlignVertical: 'center', color: '#000000' }}
              dropdownTextStyle={{ fontSize: 14, marginStart: 10, marginEnd: 10 }}
              onSelect={(idx, value) => { }}
            />
          </View>
        </View>
        <View style={styles.grayline} />

        <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ width: deviceWidth * 0.25, color: '#000000', marginStart: 20 }} >Số lượng : </Text>
          <View style={{ width: deviceWidth * 0.75, alignItems: 'center' }}>
            <ModalDropdown
              options={['1', '2', '3', '4', '5']}
              defaultValue='1'
              style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', paddingStart: 10, paddingEnd: 10, height: 35 }}
              textStyle={{ fontSize: 15, textAlign: 'left', textAlignVertical: 'center', color: '#000000' }}
              dropdownTextStyle={{ fontSize: 14, marginStart: 10, marginEnd: 10 }}
              onSelect={(idx, value) => { }}
            />
          </View>
        </View>
        <View style={styles.grayline} />

        <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ width: deviceWidth * 0.25, color: '#000000', marginStart: 20 }} >Ngày mua : </Text>
          <View style={{ width: deviceWidth * 0.75, alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => this.setState({ isShowDatePicker: !this.state.isShowDatePicker })}>
              <TextInput
                style={{ color: '#000000', backgroundColor: '#f0f0f0', paddingStart: 5, paddingEnd: 5, height: 35 }}
                value={this.state.textDay}
                editable={false} />
            </TouchableOpacity>
          </View>
          <DateTimePicker
            isVisible={this.state.isShowDatePicker}
            onCancel={() => this.setState({ isShowDatePicker: !this.state.isShowDatePicker })}
            onConfirm={(date) => {
              var arrDate = date.toString().split(' ')
              this.setState({ textDay: checkMonth(arrDate[1]) + '-' + arrDate[2] + '-' + arrDate[3] })
            }}
          />
        </View>

        <Text style={{ height: 50, backgroundColor: '#d0d0d0', color: '#000000', textAlignVertical: 'center', fontSize: 16, paddingStart: 10 }}>THÔNG TIN CÁ NHÂN</Text>

        <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#000000', marginStart: 10 }} >Họ và Tên :</Text>
          <TextInput style={{ height: 50 }}
          />
        </View>
        <View style={styles.grayline} />

        <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#000000', marginStart: 10 }} >Email :</Text>
          <TextInput style={{ height: 50 }}
          />
        </View>
        <View style={styles.grayline} />

        <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#000000', marginStart: 10 }} >Số điện thoại :</Text>
          <TextInput
            style={{ height: 50 }}
            keyboardType='numeric'
          />
        </View>
        <View style={styles.grayline} />

        <Text style={{ height: 50, backgroundColor: '#d0d0d0', color: '#000000', textAlignVertical: 'center', fontSize: 16, paddingStart: 10 }}>PHƯƠNG THỨC THANH TOÁN</Text>
        <RadioButton.Group
          value={true}
          onValueChange={() => { }}>
          <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingEnd: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 10 }}>
              <RadioButton value="first" color='#0c7e7c' />
              <Text style={{ marginStart: 10, color: '#000000' }}>Tiền trong ví</Text>
            </View>
            <Image source={money} />
          </View>
          <View style={styles.grayline} />
          <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingEnd: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 10 }}>
              <RadioButton value="first" color='#0c7e7c' />
              <Text style={{ marginStart: 10, color: '#000000' }}>Thẻ tín dụng/ghi nợ</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={visaCard} style={{ marginEnd: 5 }} />
              <Image source={masterCard} />
            </View>
          </View>
          <View style={styles.grayline} />
          <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingEnd: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 10 }}>
              <RadioButton value="first" color='#0c7e7c' />
              <Text style={{ marginStart: 10, color: '#000000' }}>Thẻ ATM nội địa</Text>
            </View>
            <Image source={atm} />
          </View>
          <View style={styles.grayline} />
        </RadioButton.Group>
        <View style={{height:50,backgroundColor:'#ebaa34',alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:16}}>ĐẶT VÉ</Text>
        </View>
      </ScrollView>
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
