import React, {Component} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View,TextInput} from 'react-native'
import logo from '../../../../assets/logo.png'
import facebook from '../../../../assets/login/facebook.png'
import google from '../../../../assets/login/google.png'
import email from '../../../../assets/login/email.png'
import clock from '../../../../assets/login/clock.png'

import material from '../../../theme/variables/material';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state={
            userName:'',
            password:''
        }
    }

    static navigationOptions = {
        header: null
    };
    
    render() {
        return (
            <View style={{ }}>
                <View style={{ height:material.deviceHeight/2}}>

                    <View style={{ flex:1, alignItems:"center",justifyContent:"center"}}>
                        {/* <Image source={logo}/> */}
                    </View>

                    <View style={{ flex:1,justifyContent:'center',marginBottom:30,marginTop:10}}>
                        <View style={styles.viewEdit}>
                            <Image source={email}/>
                            <TextInput
                                placeholderTextColor={"#999999"}
                                placeholder={'Email/Số điện thoại'}
                                value={this.state.userName}
                                onChangeText={(userName)=>this.setState({userName})}
                                style={{height:material.deviceHeight/12.5,paddingStart:5}}/>
                        </View>
                        <View style={styles.grayline}/>

                        <View style={styles.viewEdit}>
                            <Image source={clock}/>
                            <TextInput
                                placeholderTextColor={"#999999"}
                                placeholder={'Mật khẩu'}
                                secureTextEntry={true}
                                value={this.state.password}
                                onChangeText={(password)=>this.setState({password})}
                                style={{height:material.deviceHeight/12.5,paddingStart:10}}/>
                        </View>
                        <View style={styles.grayline}/>
                    </View>
                </View>

                <View style={{ height:material.deviceHeight/2}}>
                    <View style={{ flex:1}}>

                        <View style={{flex:1,alignItems:'center'}}>
                            <TouchableOpacity style={styles.buttonLogin} 
                                onPress={()=>this.props.navigation.navigate('Drawer')}
                            >
                                <Text style={{color: "white",fontWeight: "300"}}>ĐĂNG NHẬP</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex:1,alignItems:'center'}}>
                            <Text >Bạn có thể đăng nhập qua các tài khoản</Text>
                            <View style={{ flexDirection:'row',marginTop:10}} >
                                <TouchableOpacity>
                                    <Image source={facebook} style={{ marginEnd:10}} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={google}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity>
                            <Text style={{textDecorationLine: 'underline'}} >Bạn quên mật khẩu? </Text>
                        </TouchableOpacity>  

                        <View style={{flexDirection: 'row',marginTop:10}}>
                            <Text>Bạn có phải thành viên? </Text>
                            <TouchableOpacity>
                                <Text style={{color:'#1497e2'}}>ĐĂNG KÝ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewEdit: {
        flexDirection:'row',
        borderBottomWidth: 1,
        borderColor: '#ebebeb',
        alignItems: "center",
        paddingLeft: 16
    },
    buttonLogin:{
        backgroundColor:'#0c7e7c',
        borderRadius: 30,
        width:'50%',
        height:50,
        alignItems: "center",
        justifyContent: "center"
    },
    grayline:{
		width:"100%", 
		height:1, 
		backgroundColor:'#d6d6d6',
    }
});

