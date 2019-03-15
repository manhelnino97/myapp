import * as React from "react";
import { Container, Content, Text, Icon } from "native-base";
import { View, FlatList, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from "./styles";

const { width, height } = Dimensions.get('window');

import logo from '../../../../assets/logo.png'
import Loading from '../../../theme/components/Loading'

export interface Props {
  navigation: any;
  list: any;
}
export interface State { }
class Home extends React.Component<Props, State> {

  renderItem1 = ({ item }) => {
    return (
      <View style={{
        height: 50, width: width / 4, alignItems: 'center', justifyContent: 'center',
        marginTop: 10, marginBottom: 5
      }} >
        <TouchableOpacity
          style={{ borderColor: '#d0d0d0', borderWidth: 1, width: width / 5, alignItems: 'center', backgroundColor: "#f0f0f0" }}
          onPress={() => {
            this.props.navigation.navigate('WebSite', { url: item.url })
          }}>
          <Icon name={item.name} />
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderItem2 = () => {
    return (
      <TouchableOpacity style={{}}>
        <Image source={logo} style={{ width: width * 2 / 3, height: height / 7, marginStart: 10 }} />
      </TouchableOpacity>
    )
  }

  render() {
    const data = [
      { id: '1', name: 'cart', url: 'https://www.gotadi.com/' },
      { id: '2', name: 'train', url: 'https://vexere.com/' },
      { id: '3', name: 'medkit', url: 'https://www.gotadi.com/' },
      { id: '4', name: 'alarm', url: 'https://vexere.com/' },
      { id: '5', name: 'flame', url: 'https://www.gotadi.com/' },
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
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('BusTwoFloorTicket')}>
                    <View style={{ width: (width - 40) / 4, alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name='cart' />
                      <Text>Mua vé</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                    <View style={{ width: (width - 40) / 4, alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name='cart' />
                      <Text>Profile</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={{ width: (width - 40) / 4, alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name='cart' />
                      <Text>cart3</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={{ width: (width - 40) / 4, alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name='cart' />
                      <Text>cart4</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={{ marginTop: height / 6, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 }}>ĐẶT VÉ THẮNG CẢNH</Text>
              <FlatList
                data={data}
                renderItem={this.renderItem1}
                numColumns={4}
              />
              <Text style={{ marginTop: 15, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 }}>ĐẶT VÉ TÀU, XE</Text>
              <FlatList
                data={data}
                renderItem={this.renderItem1}
                numColumns={4}
              />

              <Text style={{ marginTop: 15, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 }}>TITLE</Text>
              <FlatList
                data={[1, 2, 3, 4]}
                renderItem={this.renderItem2}
                horizontal={true}
              />

              <Text style={{ marginTop: 15, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 }}>TITLE</Text>
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

