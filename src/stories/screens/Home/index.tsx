import * as React from "react";
import {
  Container,
  Card,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Footer,
  FooterTab, Badge,
} from "native-base";
import { View, FlatList, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from "./styles";

const { width, height } = Dimensions.get('window');

import logo from '../../../../assets/logo.png'

import user from '../../../../assets/home/userlogin.png'

export interface Props {
  navigation: any;
  list: any;
}
export interface State { }
class Home extends React.Component<Props, State> {

  // componentDidMount(){
  //   this.props.navigation.navigate("DrawerOpen")
  // }

  renderItem1({ item, index }) {
    return (
      <View style={{
        height: 50, width: width / 4, alignItems: 'center', justifyContent: 'center',
        marginTop: 10, marginBottom: 5
      }} >
        <TouchableOpacity style={{ borderColor: '#d0d0d0', borderWidth: 1, width: width / 5, alignItems: 'center', backgroundColor: "#f0f0f0" }}>
          <Icon name={item.key} />
          <Text>{item.key}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderItem2({ item, index }) {
    return (
      <View style={{ width: width * 2 / 3, height: height / 7, margin: 10 }} >
        <TouchableOpacity style={{}}>
          <Image source={logo} />
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#FFFFFF' }} >
        <Content>
          <ScrollView>
            <View style={{paddingBottom:10}}>
              <Image source={logo} style={{ width: width, height: height / 5 }} />
              <View style={styles.container}>
                <Image source={user} style={{ marginStart: 10 }} />
                <View style={{ flexDirection: 'column', marginStart: 15 }} >
                  <Text style={{ fontWeight: 'bold' }} >Hoàng Tiến Mạnh 123</Text>
                  <Text>144 Xuân Thủy, Cầu Giấy, Hà Nội</Text>
                  <Text>0338668369</Text>
                </View>
              </View>
              <Text style={{ marginTop: height / 7, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 }}>ĐẶT VÉ THẮNG CẢNH</Text>
              <FlatList
                contentContainerStyle={{}}
                data={[{ key: 'cart' }, { key: 'train' }, { key: 'medkit' }, { key: 'alarm' }, { key: 'flame' }]}
                renderItem={this.renderItem1}
                numColumns={4}
              />
              <Text style={{ marginTop: 15, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 }}>ĐẶT VÉ TÀU, XE</Text>
              <FlatList
                contentContainerStyle={{}}
                data={[{ key: 'cart' }, { key: 'train' }, { key: 'medkit' }, { key: 'alarm' }, { key: 'flame' }]}
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
        {/* <Footer >
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>1</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button badge vertical>
              <Badge ><Text>3</Text></Badge>
              <Icon name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button badge vertical>
              <Badge><Text>4</Text></Badge>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }
}

export default Home;

