import React from "react";
import { Text, Title, Container } from "./styles";
import { motion } from "framer-motion";

const IntroductionText = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Title>Oneeb Khan</Title>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Text>Software Engineer</Text>
      </motion.div>
    </Container>
  );
};

export default IntroductionText;
