import * as React from "react";
import { connect } from "react-redux";
import BusTwoFloorTicket from "../../stories/screens/BusTwoFloorTicket/index";
export interface Props {
	navigation: any,
	isLoading: Object,
}
export interface State {}
class BusTwoFloorTicketContainer extends React.Component<Props, State> {
	
	componentDidMount() {
		
	}
	render() {
		return <BusTwoFloorTicket 
        navigation={this.props.navigation}
        
		/>;
	}
}

function bindAction(dispatch) {
	return {
		
	};
}

const mapStateToProps = state => ({

});
export default connect(mapStateToProps, bindAction)(BusTwoFloorTicketContainer);
