import { NavigatorScreenParams } from "@react-navigation/native";

export type HomeDrawerParamsList = {
	HomeDrawer: undefined;
	Login: undefined;
	ChatRoom: undefined;
	Thread: undefined;
	QrCodeScreen: undefined;
};

export type RootStackParamList = {
	HomeDrawer: NavigatorScreenParams<HomeDrawerParamsList>;
	Login: undefined;
	Profile: undefined;
	ResetPassword: undefined;
	Students: undefined;
	ChatList: undefined;
	ChatRoom: undefined;


};

export type RootTabParamList = {
	HomeListTab: undefined;
	StudentsTabs: undefined;
	ChatListTab: undefined;
	EventTabs: undefined;
	SlotListTab: undefined;
	HelpTabs: undefined;
};
