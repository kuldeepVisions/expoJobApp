import React from "react";
import { View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import ServicesScreen from "./ServicesScreen";
import JobSeekerScreen from "./JobSeekerScreen";
import ContactScreen from "./ContactScreen";
import LogoutButton from "../components/LogoutButton"; // Import LogoutButton
import Icon from "react-native-vector-icons/Ionicons"; // Import the icons

const Tab = createMaterialTopTabNavigator();

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#6200ee",
          tabBarLabelStyle: { fontSize: 14, fontWeight: "600" },
          tabBarIndicatorStyle: { backgroundColor: "#6200ee" },
          tabBarIconStyle: { display: 'none' }, // Hide the default tab bar labels
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: () => <Icon name="home-outline" size={24} color="#6200ee" />
          }}
        />
        <Tab.Screen 
          name="About" 
          component={AboutScreen} 
          options={{
            tabBarIcon: () => <Icon name="information-circle-outline" size={24} color="#6200ee" />
          }}
        />
        <Tab.Screen 
          name="Services" 
          component={ServicesScreen} 
          options={{
            tabBarIcon: () => <Icon name="briefcase-outline" size={24} color="#6200ee" />
          }}
        />
        <Tab.Screen 
          name="Career" 
          component={JobSeekerScreen} 
          options={{
            tabBarIcon: () => <Icon name="people-outline" size={24} color="#6200ee" />
          }}
        />
        <Tab.Screen 
          name="Contact" 
          component={ContactScreen} 
          options={{
            tabBarIcon: () => <Icon name="call-outline" size={24} color="#6200ee" />
          }}
        />
      </Tab.Navigator>
      
      <View style={styles.footer}>
        <LogoutButton /> {/* LogoutButton placed inside the footer */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    padding: 16, // Adjust padding as needed
    backgroundColor: "#fff", // Set background color for footer
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc", // Optional: border to separate footer
  },
});
