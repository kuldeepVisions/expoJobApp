import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "./app/core/theme";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  HomeScreen,
  MainScreen,
  ProfileScreen, 
  SettingsScreen,
  TabView
} from "./app/screens";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          //initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
            animation: "slide_from_right"
          }}
          initialRouteName="TabView"
        >
          <Stack.Screen name="TabView" component={TabView} />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeTabs} /> 
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="HomeTabs" component={HomeTabs}/>
          <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
          <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
          <Stack.Screen name="MainScreen" component={MainScreen}/>
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
