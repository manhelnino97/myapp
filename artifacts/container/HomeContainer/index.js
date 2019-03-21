import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home/index";
class HomeContainer extends React.Component {
    componentDidMount() {
    }
    render() {
        return React.createElement(Home, { navigation: this.props.navigation, isLoading: this.props.isLoading });
    }
}
function bindAction(dispatch) {
    return {};
}
const mapStateToProps = state => ({
    isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(HomeContainer);
//# sourceMappingURL=index.js.map