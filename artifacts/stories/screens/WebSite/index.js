import * as React from "react";
import { WebView, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
class WebSite extends React.Component {
    render() {
        const param = this.props.navigation.state.params;
        return (React.createElement(WebView, { source: { uri: param.url } }));
    }
}
export default WebSite;
//# sourceMappingURL=index.js.map