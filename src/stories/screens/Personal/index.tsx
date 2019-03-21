import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, StatusBar, Dimensions } from 'react-native'
import { Switch } from 'native-base';

import user from '../../../../assets/Profile/userlogin.png'
import iconedit from '../../../../assets/Profile/iconedit.png'
import iconfoward from '../../../../assets/Profile/iconfoward.png'
import Modal from "react-native-modal";

import NavigationBar from '../../../theme/components/NavigationBar'
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default class Personal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            heightDialog: 0,
            isShowDialog: false,
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ marginTop: 50 }}>
                    <ScrollView>
                        <View style={styles.viewUser}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={user} />
                                <View style={{ marginStart: 15 }} >
                                    <Text style={{ fontWeight: 'bold', color: '#000000' }} >Hoàng Tiến Mạnh</Text>
                                    <Text style={{ color: '#000000' }}>0338668369</Text>
                                    <Text style={{ color: '#000000' }}>manhelnino97@gmail.com</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
                                <Text style={{ color: '#ebaa34', fontSize: 16, marginTop: 10 }}>Sửa đổi</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.grayline} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                            <Text style={{ color: '#000000', fontSize: 16 }}>Số dư khả dụng:  69.000 đ</Text>
                            <TouchableOpacity>
                                <Text style={{ color: '#ebaa34', fontSize: 16 }}>Nạp tiền</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.grayline} />
                        <View style={styles.textOption}>
                            <Text style={{ color: '#000000' }}>Thông báo qua điện thoại</Text>
                            <Switch
                                value={true}
                                style={{ marginStart: 10 }}
                            />
                        </View>
                        <View style={{ width: deviceWidth, height: 1, backgroundColor: '#d6d6d6', }} />
                        <View style={styles.textOption}>
                            <Text style={{ color: '#000000' }}>Thông báo qua Email</Text>
                            <Switch
                                value={true}
                                style={{ marginStart: 10 }}
                            />
                        </View>
                        <View style={styles.grayline} />
                        <TouchableOpacity>
                            <View style={styles.textOption}>
                                <Text style={{ color: '#000000' }}>Điều khoản dịch vụ</Text>
                                <View style={{ justifyContent: 'center', marginStart: 10 }}>
                                    <Image source={iconfoward}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{ width: deviceWidth, height: 1, backgroundColor: '#d6d6d6', }} />
                        <TouchableOpacity>
                            <View style={styles.textOption}>
                                <Text style={{ color: '#000000' }}>Chính sách bảo mật</Text>
                                <View style={{ justifyContent: 'center', marginStart: 10 }}>
                                    <Image source={iconfoward}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{ width: deviceWidth, height: 1, backgroundColor: '#d6d6d6', }} />
                        <TouchableOpacity>
                            <View style={styles.textOption}>
                                <Text style={{ color: '#000000' }}>Đánh giá ứng dụng</Text>
                                <View style={{ justifyContent: 'center', marginStart: 10 }}>
                                    <Image source={iconfoward}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.grayline} />
                        <TouchableOpacity>
                            <View style={{ width: deviceWidth, alignItems: 'center', justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: 'red' }}>ĐĂNG XUẤT</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ width: deviceWidth, height: 1, backgroundColor: '#d6d6d6', }} />
                    </ScrollView>
                </View>
                <View style={{ position: 'absolute', width: deviceWidth, height: 50, backgroundColor: '#000000' }}>
                    <NavigationBar goBack={() => this.props.navigation.goBack()} title='Tài khoản' />
                </View>

            </View >
        );
    }
}
const styles = StyleSheet.create({
    viewUser: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between'
    },
    grayline: {
        width: deviceWidth,
        height: 15,
        backgroundColor: '#d6d6d6',
    },
    textOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center'
    }
});
