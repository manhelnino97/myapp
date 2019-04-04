import * as React from "react";

import { WebView, Dimensions, View, ActivityIndicator } from 'react-native';
import NavigationBar from '../../../theme/components/NavigationBar'
const { width, height } = Dimensions.get('window');

export interface State { }
export interface Props {
    navigation: any;
}
class WebSite extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            loadWebview: true
        }
    }
    render() {
        const param = this.props.navigation.state.params;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ position: 'absolute', width: width, height: 50, top: 0 }}>
                    <NavigationBar goBack={() => this.props.navigation.goBack()} title={param.name} />
                </View>
                <View style={{ flex: 1, marginTop: 50, overflow: 'hidden' }}>
                    <WebView
                        ref='WebView'
                        source={{ uri: param.url }}
                        onLoadEnd={() => { this.setState({ loadWebview: false }) }}
                    />
                    {this.state.loadWebview ?
                        <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', top: 0, bottom: 0, right: 0, left: 0 }} >
                            <ActivityIndicator size="large" color='#ebaa34' />
                        </View> : null}
                </View>

            </View>

        ); 
    }
}

export default WebSite;

