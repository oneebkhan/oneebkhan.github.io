import React, { useRef } from "react";
import { Container, MainContainer } from "./styles";
import { useScroll, useTransform } from "framer-motion";

const RevealText = ({ text = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const marginLeft = useTransform(
    scrollYProgress,
    [0, 1],
    [`${15 * text.length}vw`, `-${15 * text.length}vw`]
  );

  return (
    <MainContainer ref={ref}>
      <Container
        style={{
          marginLeft,
        }}
      >
        {text}
      </Container>
    </MainContainer>
  );
};

export default RevealText;
