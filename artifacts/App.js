import React from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import { Root } from "native-base";
import { Dimensions } from "react-native";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import Login from "./stories/screens/Login/index";
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
}, {
    initialRouteName: "Drawer",
    headerMode: "none",
});
export default () => (React.createElement(Root, null,
    React.createElement(App, null)));
//# sourceMappingURL=App.js.map