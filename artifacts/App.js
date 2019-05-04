import React from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import { Root } from "native-base";
import { Dimensions } from "react-native";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import Register from "./container/RegisterContainer";
import Login from "./container/LoginContainer";
import Profile from "./container/ProfileContainer";
import BusTwoFloorTicket from "./container/BusTwoFloorTicketContainer";
import WebSite from './stories/screens/WebSite/index';
import Personal from './stories/screens/Personal/index';
import AllEvents from './stories/screens/AllEvents/index';
import Recharge from './stories/screens/Recharge/index';
import Promotion from './stories/screens/Promotion/index';
import BusTwoFloorTicketDetail from './stories/screens/BusTwoFloorTicketDetail/index';
const deviceWidth = Dimensions.get("window").width;
const Drawer = DrawerNavigator({
    Home: { screen: Home },
}, {
    drawerWidth: deviceWidth * 0.8,
    drawerPosition: "left",
    contentComponent: (props) => React.createElement(Sidebar, Object.assign({}, props)),
});
const App = StackNavigator({
    Home: { screen: Home },
    Login: { screen: Login },
    BlankPage: { screen: BlankPage },
    Drawer: { screen: Drawer },
    Register: { screen: Register },
    Profile: { screen: Profile },
    BusTwoFloorTicket: { screen: BusTwoFloorTicket },
    BusTwoFloorTicketDetail: { screen: BusTwoFloorTicketDetail },
    WebSite: { screen: WebSite },
    Personal: { screen: Personal },
    AllEvents: { screen: AllEvents },
    Recharge: { screen: Recharge },
    Promotion: { screen: Promotion },
}, {
    initialRouteName: "Home",
    headerMode: "none",
});
export default () => (React.createElement(Root, null,
    React.createElement(App, null)));
//# sourceMappingURL=App.js.map