// LogoutButton.js
import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function LogoutButton() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "StartScreen" }],
    });
  };

  return (
    <View style={styles.container}>
      <Button mode="outlined" onPress={handleLogout}>
        Sign Out
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
});
