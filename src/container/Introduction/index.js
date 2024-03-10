import React from "react";
import {
  IntroductionContainer,
  MainContainer,
  Container,
} from "./styles";
import ProfileImage from "../../assets/images/profile.png";
import IntroductionText from "../../component/IntroductionText";
import Header from "../../component/Header";

const Introduction = () => {
  return (
    <Container>
      <IntroductionContainer image={ProfileImage} />

      <MainContainer>
        <Header />

        <IntroductionText />
      </MainContainer>
    </Container>
  );
};

export default Introduction;
