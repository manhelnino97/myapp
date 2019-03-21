import * as React from "react";
import { View, FlatList, Dimensions, TouchableOpacity, ScrollView, Image, Text } from 'react-native';
import styles from "./styles";
import logo from '../../../../assets/logo.png'
import pay from '../../../../assets/home/pay.png'
import notify from '../../../../assets/home/notify.png'
import profile from '../../../../assets/home/profile.png'
import bus from '../../../../assets/home/bus.png'
import ticket from '../../../../assets/home/ticket.png'
import plane from '../../../../assets/home/plane.png'
import vcs from '../../../../assets/vcs.png'
import sun from '../../../../assets/sun.png'
import nhac from '../../../../assets/nhac.png'
import saigon from '../../../../assets/saigon.png'


const { width, height } = Dimensions.get('window');
export interface Props {
  navigation: any;
  list: any;
}
export interface State { }
class Home extends React.Component<Props, State> {

  renderItem1 = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ width: width / 4, alignItems: 'center', marginTop: 10 }}
        onPress={() => {
          item.type === 'navigation' ? this.props.navigation.navigate(item.url) : this.props.navigation.navigate('WebSite', { url: item.url})
        }}>
        <Image source={item.icon} style={{ width: height / 20, height: height / 20 }} />
        <Text style={{ fontSize: 13, color: '#ebaa34', marginTop: 5, textAlign: 'center', padding: 5 }}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  renderItem2 = ({ item }) => {
    return (
      <TouchableOpacity style={{ marginStart: 10, marginBottom: 10 }}>
        <Image source={item.image} style={{ width: width - 20, height: height / 5 }} />
      </TouchableOpacity>
    )
  }

  render() {
    const data = [
      { id: '1', type: 'navigation', name: 'Vé xe buýt', url: 'BusTwoFloorTicket', icon: bus },
      { id: '2', type: 'webview', name: 'Vexere ', url: 'https://vexere.com/', icon: ticket },
      { id: '3', type: 'webview', name: 'Vé máy bay', url: 'https://www.gotadi.com/', icon: plane },
    ]

    const data1 = [
      { id: '1', image: vcs },
      { id: '2', image: nhac },
      { id: '3', image: sun },
      { id: '4', image: saigon },
    ]


    return (
      <View style={{ backgroundColor: '#FFFFFF' }} >
        <ScrollView>
          <View style={{ paddingBottom: 10 }}>
            <Image source={logo} style={{ width: width, height: height / 5 }} />

            <View style={styles.box}>
              <View style={{ width: width - 40, height: height / 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ marginStart: 20, marginEnd: 5, fontWeight: 'bold', color: '#ebaa34' }}>Số dư</Text>
                <Text style={{ marginEnd: 20, fontWeight: 'bold', color: '#ebaa34' }}>69.000 đ</Text>
              </View>
              <View style={{ width: width - 60, height: 1, backgroundColor: '#e0e0e0', marginStart: 10, marginEnd: 10 }} />
              <View style={{ width: width - 40, height: height / 10 - 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { }}>
                  <View style={{ width: (width - 40) / 3, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={pay} style={{ width: height / 25, height: height / 25 }} />
                    <Text style={{ fontSize: 14, color: '#ebaa34' }}>Nạp tiền</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Personal')}>
                  <View style={{ width: (width - 40) / 3, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={profile} style={{ width: height / 25, height: height / 25 }} />
                    <Text style={{ fontSize: 14, color: '#ebaa34' }}>Tài khoản</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{ width: (width - 40) / 3, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={notify} style={{ width: height / 25, height: height / 25 }} />
                    <Text style={{ fontSize: 14, color: '#ebaa34' }}>Khuyến mại</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={{ marginTop: height / 6 + 15, color: '#85563a', fontWeight: 'bold', fontSize: 15, marginStart: 10 }}>ĐẶT VÉ TÀU, XE, MÁY BAY</Text>
            <FlatList
              data={data}
              renderItem={this.renderItem1}
              numColumns={4}
            />

            <View style={{ marginTop: 30, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <Text style={{ color: '#85563a', fontWeight: 'bold', fontSize: 15, marginStart: 10 }}>ĐẶT VÉ SỰ KIỆN</Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 13, color: '#85563a', marginEnd: 10 }}>Xem tất cả sự kiện  <Text style={{ fontSize: 16 }}>></Text></Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={data1}
              renderItem={this.renderItem2}
            />

          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;

