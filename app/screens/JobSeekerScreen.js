import React from "react";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";

export default function JobSeekerScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Welcome 💫</Header>
      <Paragraph>Congratulations you are in Job Seeker Screen.</Paragraph>
    </Background>
  );
}