import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from "./SettingsScreen";
import MainScreen from "./MainScreen";
const Tab = createBottomTabNavigator();
export default function HomeScreen({ navigation }) {

  return (
    <Tab.Navigator>
        <Tab.Screen name="MainScreen" component={MainScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
