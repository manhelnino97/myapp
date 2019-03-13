import React, {Component} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View,TextInput} from 'react-native'
import logo from '../../../../assets/Register.png'
import facebook from '../../../../assets/Register/facebook.png'
import google from '../../../../assets/Register/google.png'
import email from '../../../../assets/Register/email.png'
import clock from '../../../../assets/Register/clock.png'

import material from '../../../theme/variables/material';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state={
            userName:'',
            password:''
        }
    }

    
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
                            {this.props.textInputEmail}
                        </View>
                        <View style={styles.grayline}/>

                        <View style={styles.viewEdit}>
                            <Image source={clock}/>
                            {this.props.textInputPassword}
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
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}>
                                <Text style={{color:'#ebaa34'}}>ĐĂNG KÝ</Text>
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
        backgroundColor:'#ebaa34',
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

