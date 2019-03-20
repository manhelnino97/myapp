import * as React from "react";
import { WebView, Dimensions, View, ActivityIndicator } from 'react-native';
import NavigationBar from '../../../theme/components/NavigationBar';
const { width, height } = Dimensions.get('window');
class WebSite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadWebview: true
        };
    }
    render() {
        const param = this.props.navigation.state.params;
        return (React.createElement(View, { style: { flex: 1 } },
            React.createElement(View, { style: { position: 'absolute', width: width, height: 50, top: 0 } },
                React.createElement(NavigationBar, { goBack: () => this.props.navigation.goBack(), title: param.url })),
            React.createElement(View, { style: { flex: 1, marginTop: 50, overflow: 'hidden' } },
                React.createElement(WebView, { ref: 'WebView', source: { uri: param.url }, onLoadEnd: () => { this.setState({ loadWebview: false }); } }),
                this.state.loadWebview ?
                    React.createElement(View, { style: { position: 'absolute', alignItems: 'center', justifyContent: 'center', top: 0, bottom: 0, right: 0, left: 0 } },
                        React.createElement(ActivityIndicator, { size: "large", color: '#ebaa34' })) :
                    null)));
    }
}
export default WebSite;
//# sourceMappingURL=index.js.map