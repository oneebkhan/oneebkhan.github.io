"use client";
import React from "react";
import { Background } from "./Background";
import {
  CenteredDiv,
  MainContainer,
  StyledTextContainer,
  AnimatedButton,
} from "./styles";
import resume from "../../assets/documents/resume.pdf";
import Tags from "../Tags";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const LIST_OF_SOCIALS = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    colorprop: "#1a66c3",
    colorproptext: "white",
    onClick: () =>
      window.open(
        "https://www.linkedin.com/in/oneeb-khan-6b3b701b0/",
        "_blank"
      ),
  },
  {
    name: "Github",
    icon: <FaGithub />,
    colorprop: "black",
    colorproptext: "white",
    onClick: () => window.open("https://github.com/oneebkhan", "_blank"),
  },
];

const ContactMe = () => {
  return (
    <MainContainer>
      <StyledTextContainer
        viewport={{ once: true }}
        initial={{ opacity: 0, translateY: -30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h1>Get in touch</h1>
        <p></p>
        <p>
          If you like what you see and want to get in touch, just use any of the
          socials listed below. I'm mostly active on LinkedIn and will repond in
          a 24 hour window. If you want to know more about me, just click the
          giant shiny button below and download my resume.
        </p>
        <CenteredDiv>
          <Tags tags={LIST_OF_SOCIALS} />
          <AnimatedButton
            onClick={() => {
              window.open(resume, "_blank");
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.01 }}
          >
            Download Resume
          </AnimatedButton>
        </CenteredDiv>
      </StyledTextContainer>

      <Background />
    </MainContainer>
  );
};

export default ContactMe;
