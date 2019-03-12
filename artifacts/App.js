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
import BusTwoFloorTicket from './stories/screens/BusTwoFloorTicket/index';
const deviceWidth = Dimensions.get("window").width;
const Drawer = DrawerNavigator({
    Home: { screen: Home },
}, {
    drawerWidth: deviceWidth * 0.8,
    drawerPosition: "left",
    contentComponent: (props) => React.createElement(Sidebar, Object.assign({}, props)),
});
const App = StackNavigator({
    Login: { screen: Login },
    BlankPage: { screen: BlankPage },
    Drawer: { screen: Drawer },
    Register: { screen: Register },
    Profile: { screen: Profile },
    BusTwoFloorTicket: { screen: BusTwoFloorTicket },
}, {
    initialRouteName: "Drawer",
    headerMode: "none",
});
export default () => (React.createElement(Root, null,
    React.createElement(App, null)));
//# sourceMappingURL=App.js.map