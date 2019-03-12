import * as React from "react";
import { Container, Content, Text, Icon } from "native-base";
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

  render() {
    const data = [
      { id: '1', name: 'cart', url: 'https://www.gotadi.com/' },
      { id: '2', name: 'train', url: 'https://vexere.com/' },
      { id: '3', name: 'medkit', url: '' },
      { id: '4', name: 'alarm', url: '' },
      { id: '5', name: 'flame', url: '' },
    ]

    const renderItem1 = ({ item, index }) => {
      return (
        <View style={{
          height: 50, width: width / 4, alignItems: 'center', justifyContent: 'center',
          marginTop: 10, marginBottom: 5
        }} >
          <TouchableOpacity
            style={{ borderColor: '#d0d0d0', borderWidth: 1, width: width / 5, alignItems: 'center', backgroundColor: "#f0f0f0" }}
            onPress={() => {
              item.url !== '' ? this.props.navigation.navigate('WebSite', { url: item.url }) : ''
            }}
          >
            <Icon name={item.name} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        </View>
      )
    }

    const renderItem2 = () => {
      return (
        <View style={{ width: width * 2 / 3, height: height / 7, margin: 10 }} >
          <TouchableOpacity style={{}}>
            <Image source={logo} />
          </TouchableOpacity>
        </View>
      )
    }
    return (
      <Container style={{ backgroundColor: '#FFFFFF' }} >
        <Content>
          <ScrollView>
            <View style={{ paddingBottom: 10 }}>
              <Image source={logo} style={{ width: width, height: height / 5 }} />
              <View style={styles.container}>
                <View style={{ width: width - 40, height: height / 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ marginStart: 20, fontWeight: 'bold' }}>Số dư 123</Text>
                  <Text style={{ marginEnd: 20, fontWeight: 'bold' }}>69.000 đ</Text>
                </View>
                <View style={{ width: width - 40, height: 1, backgroundColor: '#d6d6d6' }}></View>
                <View style={{ width: width - 40, height: height / 10 - 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <TouchableOpacity>
                    <View style={{ width: (width - 40) / 4, alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name='cart' />
                      <Text>cart</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={{ width: (width - 40) / 4, alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name='cart' />
                      <Text>cart</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={{ width: (width - 40) / 4, alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name='cart' />
                      <Text>cart</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={{ width: (width - 40) / 4, alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name='cart' />
                      <Text>cart</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={{ marginTop: height / 6, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 }}>ĐẶT VÉ THẮNG CẢNH</Text>
              <FlatList
                contentContainerStyle={{}}
                data={data}
                renderItem={renderItem1}
                numColumns={4}
              />
              <Text style={{ marginTop: 15, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 }}>ĐẶT VÉ TÀU, XE</Text>
              <FlatList
                contentContainerStyle={{}}
                data={data}
                renderItem={renderItem1}
                numColumns={4}
              />
              <Text style={{ marginTop: 15, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 }}>TITLE</Text>
              <FlatList
                data={[1, 2, 3, 4]}
                renderItem={renderItem2}
                horizontal={true}
              />

              <Text style={{ marginTop: 15, color: '#000000', fontWeight: 'bold', fontSize: 15, marginStart: 10 }}>TITLE</Text>
              <FlatList
                data={[1, 2, 3, 4]}
                renderItem={renderItem2}
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

