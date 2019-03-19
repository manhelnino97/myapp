import React from 'react';
import {
    View, StyleSheet, Dimensions, Image, TouchableOpacity, Text
} from 'react-native';
const { width, height } = Dimensions.get('window');
import back from '../../../assets/back.png'
export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: width / 6, height: 50, alignItems: 'flex-start', justifyContent: 'center', paddingStart: 20 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={back} />
                    </TouchableOpacity>
                </View>

                <View style={{ width: width * 2 / 3, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Vé xe buýt 2 tầng Hà Nội</Text>
                </View>

                <View style={{ width: width / 6, height: 50 }}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 50,
        backgroundColor: '#ebaa34',
        flexDirection: 'row'
    },
});
