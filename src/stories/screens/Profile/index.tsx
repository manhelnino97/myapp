import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, StatusBar,Platform } from 'react-native'
import { Switch } from 'native-base';

import user from '../../../../assets/Profile/userlogin.png'
import iconedit from '../../../../assets/Profile/iconedit.png'
import iconfoward from '../../../../assets/Profile/iconfoward.png'
import material from '../../../theme/variables/material'
import Modal from "react-native-modal";



export default class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            heightDialog: 0,
            isShowDialog: false,
        }

    }

    render() {
        return (
            <View>
                <View style={{ height: material.deviceHeight * 0.92 - this.state.heightDialog - (Platform.OS === "ios" ? 0 : StatusBar.currentHeight)}}>
                    <ScrollView>
                        <View style={styles.viewUser}>
                            <View style={{ paddingStart: 40 }} />
                            <View style={{ alignItems: 'center' }} >
                                <Image source={user} />
                                {this.props.textInputUserName}
                            </View>

                            <View style={{ justifyContent: 'flex-end' }}  >
                                <TouchableOpacity onPress={() => {
                                    this.props.onPressUserName()
                                    this.setState({ heightDialog: 51 })
                                    this.setState({ isShowDialog: true })
                                }}>
                                    <Image source={iconedit} style={{ marginBottom: 10 }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <Text style={styles.textTittle}>Email</Text>
                        {this.props.textInputEmail}
                        <View style={styles.grayline} />

                        <Text style={styles.textTittle}>Số điện thoại</Text>
                        {this.props.textInputPhoneNumber}
                        <View style={styles.grayline} />

                        <Text style={styles.textTittle}>Mật khẩu</Text>
                        {this.props.textInputPassword}
                        <View style={styles.grayline} />

                        <Text style={styles.textTittle}>Ngày sinh</Text>
                        {this.props.textInputBirthday}
                        <View style={styles.grayline} />

                        <Text style={styles.textTittle}>Địa chỉ</Text>
                        {this.props.textInputAddress}


                        <Text style={styles.textHeader}>ĐĂNG KÝ NHẬN TIN</Text>

                        <View style={styles.textOption}>
                            <Text style={{ color: '#000000' }}>Thông báo qua SMS</Text>
                            {this.props.switchSms}
                        </View>
                        <View style={styles.grayline} />

                        <View style={styles.textOption}>
                            <Text style={{ color: '#000000' }}>Thông báo qua Email</Text>
                            {this.props.switchEmail}
                        </View>

                        <Text style={styles.textHeader}>CÀI ĐẶT CHUNG</Text>

                        <View style={styles.textOption}>
                            <Text style={{ color: '#000000' }}>Ngôn ngữ</Text>
                            <TouchableOpacity>
                                <View style={{ flexDirection: 'row',marginEnd:10 }}>
                                    <Text>Tiếng Việt</Text>
                                    <View style={{ justifyContent: 'center', marginStart: 10 }}>
                                        <Image source={iconfoward}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.grayline} />

                        <View style={styles.textOption}>
                            <Text style={{ color: '#000000' }}>Quản lý địa chỉ</Text>
                            <TouchableOpacity>
                                <View style={{ flexDirection: 'row',marginEnd:10 }}>
                                    <Text>Chi tiết</Text>
                                    <View style={{ justifyContent: 'center', marginStart: 10 }}>
                                        <Image source={iconfoward}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        { !this.state.isShowDialog && <View style={styles.grayline} /> }

                    </ScrollView>
                </View>

                {this.state.isShowDialog &&
                    <View>
                        <View style={styles.grayline} />
                        <View style={{ height: 50, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <TouchableOpacity style={{ marginEnd: 30 }}
                                onPress={() => {
                                    this.setState({ heightDialog: 0 })
                                    this.setState({ isShowDialog: false })
                                    //this.props.canceInputData()
                                }}
                            >
                                <Text style={{ fontSize: 15, color: '#0c7e7c' }}>HỦY</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginEnd: 10 }}
                                onPress={()=> {
                                    this.setState({ heightDialog: 0 })
                                    this.setState({ isShowDialog: false })
                                    //this.props.saveData()
                                }}
                            >
                                <Text style={{ fontSize: 15, color: '#0c7e7c' }}>LƯU</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }

            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewUser: {
        backgroundColor: "#d0d0d0",
        paddingTop: 10,
        flexDirection: 'row',
        paddingEnd: 10,
        justifyContent: 'space-between'
    },
    grayline: {
        width: "100%",
        height: 1,
        backgroundColor: '#d6d6d6',
    },
    textTittle: {
        marginStart: 10,
        fontSize: 12,
        marginTop: 5
    },
    textInput: {
        color: '#000000'
    },
    textHeader: {
        backgroundColor: '#d0d0d0',
        padding: 16
    },
    textOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        paddingStart:15,
        paddingEnd:5,
        alignItems:'center'
    }
});
