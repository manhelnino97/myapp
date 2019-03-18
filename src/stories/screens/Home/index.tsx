import * as React from "react";
import { Container, Content, Text, Icon } from "native-base";
import { View, FlatList, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from "./styles";

const { width, height } = Dimensions.get('window');

import logo from '../../../../assets/logo.png'
import pay from '../../../../assets/home/pay.png'
import notify from '../../../../assets/home/notify.png'
import profile from '../../../../assets/home/profile.png'
import bus from '../../../../assets/home/bus.png'
import ticket from '../../../../assets/home/ticket.png'
import plane from '../../../../assets/home/plane.png'
import Loading from '../../../theme/components/Loading'

export interface Props {
  navigation: any;
  list: any;
}
export interface State { }
class Home extends React.Component<Props, State> {

  renderItem1 = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ width: width / 4, alignItems: 'center' }}
        onPress={() => {
          item.type === 'navigation' ? this.props.navigation.navigate(item.url) : this.props.navigation.navigate('WebSite', { url: item.url })
        }}>
        <Image source={item.icon} style={{ width: height / 20, height: height / 20 }} />
        <Text style={{ fontSize: 13, color: '#ebaa34', marginTop: 5, textAlign: 'center', ellipsizeMode: 'tail' }}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  renderItem2 = () => {
    return (
      <TouchableOpacity style={{ marginTop: 20 }}>
        <Image source={logo} style={{ width: width * 2 / 3, height: height / 6, marginStart: 10 }} />
      </TouchableOpacity>
    )
  }

  render() {
    const data = [
      { id: '1', type: 'navigation', name: 'Vé xe buýt buýt buýt', url: 'BusTwoFloorTicket', icon: bus },
      { id: '2', type: 'webview', name: 'Vexere buýt buýt', url: 'https://vexere.com/', icon: ticket },
      { id: '3', type: 'webview', name: 'Vé máy bay buýt', url: 'https://www.gotadi.com/', icon: plane },
      { id: '4', type: 'webview', name: 'Vé máy bay buýt', url: 'https://www.gotadi.com/', icon: plane },
    ]


    return (
      <Container style={{ backgroundColor: '#FFFFFF' }} >
        <Content>
          <ScrollView>
            <View style={{ paddingBottom: 10 }}>
              <Image source={logo} style={{ width: width, height: height / 5 }} />

              <View style={styles.container}>
                <View style={{ width: width - 40, height: height / 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ marginStart: 20, fontWeight: 'bold', color: '#ebaa34' }}>Số dư</Text>
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
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                    <View style={{ width: (width - 40) / 3, alignItems: 'center', justifyContent: 'center' }}>
                      <Image source={profile} style={{ width: height / 25, height: height / 25 }} />
                      <Text style={{ fontSize: 14, color: '#ebaa34' }}>Cá nhân</Text>
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

              <Text style={{ marginTop: height / 6 + 40, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 }}>ĐẶT VÉ TÀU, XE, MÁY BAY</Text>
              <FlatList
                data={data}
                renderItem={this.renderItem1}
                numColumns={4}
              />

              <Text style={{ marginTop: 40, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 }}>ĐẶT VÉ SỰ KIỆN</Text>
              <FlatList
                data={[1, 2, 3, 4]}
                renderItem={this.renderItem2}
                horizontal={true}
              />

            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default Home;

