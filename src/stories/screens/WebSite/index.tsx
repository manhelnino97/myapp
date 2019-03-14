import * as React from "react";

import {WebView, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

export interface State { }
export interface Props {
	navigation: any;
}
class WebSite extends React.Component<Props, State> {
    
    render() {
        const param = this.props.navigation.state.params;
        return (
            <WebView
                source={{uri: param.url}}
                //onLoadEnd={()=> alert('123')}
            />
        );
    }
}

export default WebSite;

