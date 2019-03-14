import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import {  } from "./actions";
export interface Props {
	navigation: any,
	isLoading: Object,
}
export interface State {}
class HomeContainer extends React.Component<Props, State> {
	
	componentDidMount() {
		
	}
	render() {
		return <Home 
		navigation={this.props.navigation}
		isLoading={this.props.isLoading}
		/>;
	}
}

function bindAction(dispatch) {
	return {
		
	};
}

const mapStateToProps = state => ({
	isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(HomeContainer);
