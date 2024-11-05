import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Card from "../components/Card"; // Import your Card component
import { KeyboardAvoidingView, Platform } from "react-native";

const cardData = [
  {
    name: "Who We Are!",
    description: "We at ASM JOBS, are a headhunting and manpower recruitment firm of high repute and acknowledgment.",
    image: "https://via.placeholder.com/150", // Replace with a relevant image URL
  },
  {
    name: "Experience",
    description: "We have more than 9 years of industrial experience in the field of hardcore recruitment as well as in other HR verticals.",
    image: "https://via.placeholder.com/150", // Replace with a relevant image URL
  },
  {
    name: "Specialization",
    description: "We are specialized into IT/BPO, Hospitality, Healthcare, & FMCG.",
    image: "https://via.placeholder.com/150", // Replace with a relevant image URL
  },
  {
    name: "Our Goal",
    description: "Our prime concern is to respond fast & appropriately to the constantly increasing professional dynamism of our customers.",
    image: "https://via.placeholder.com/150", // Replace with a relevant image URL
  },
  {
    name: "Our Motto",
    description: "Best Services for the Clients and Expert's Help for Candidates.",
    image: "https://via.placeholder.com/150", // Replace with a relevant image URL
  },
  {
    name: "Our Business Philosophy",
    description: "We focus on Quality, Not on quantity.",
    image: "https://via.placeholder.com/150", // Replace with a relevant image URL
  },
];



export default function HomeScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          {cardData.map((card, index) => (
            <Card 
              key={index}
              name={card.name} 
              description={card.description} 
              image={card.image} 
            />
          ))}
        </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Full screen height
  },
  scrollContainer: {
    padding: 16,
  },
});