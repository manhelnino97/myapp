import React from "react";
import {DrawerNavigator, StackNavigator} from "react-navigation";
import {Root} from "native-base";
import {Dimensions} from "react-native";

import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import Register from "./container/RegisterContainer";
import Login from "./container/LoginContainer";
import Profile from "./container/ProfileContainer";

import BusTwoFloorTicket from './stories/screens/BusTwoFloorTicket/index'
import WebSite from './stories/screens/WebSite/index'


const deviceWidth = Dimensions.get("window").width;

const Drawer = DrawerNavigator(
	{
		Home: {screen: Home},
	},
	{
		drawerWidth: deviceWidth*0.8,
		drawerPosition: "left",
		contentComponent: (props: any) => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{	
		Home: {screen: Home},
		Login: {screen: Login},
		BlankPage: {screen: BlankPage},
		Drawer: {screen: Drawer},
		Register: {screen: Register},
		Profile: {screen: Profile},
		BusTwoFloorTicket: {screen: BusTwoFloorTicket},
		WebSite: {screen: WebSite},
	},
	{
		initialRouteName: "Home",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App/>
	</Root>
);
