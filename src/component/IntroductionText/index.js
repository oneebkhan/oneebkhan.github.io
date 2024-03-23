import React from "react";
import { Text, Title, Container } from "./styles";
import { motion } from "framer-motion";

const IntroductionText = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Title>Oneeb Khan</Title>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Text>Software Engineer</Text>
      </motion.div>
    </Container>
  );
};

export default IntroductionText;
