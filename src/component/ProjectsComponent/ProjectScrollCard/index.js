import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ContentContainer,
  PathContainer,
  Row,
  RowBottomDiv,
  RowBottomDivCard,
  RowDescription,
  RowTitle,
  StyledSVG,
  StyledGoLinkExternal,
} from "../styles";

export const ProjectScrollCard = ({ content }) => {
  const transition = {
    duration: 14,
    ease: "easeInOut",
  };

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const pathLengthValue = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const PATH = "M0.5 0.980671L0.5 2100";

  return (
    <PathContainer ref={ref}>
      <StyledSVG
        width="1"
        height="2100"
        viewBox="0 0 1 2100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={PATH} stroke="url(#paint0_linear_207_38)" />
        <defs>
          <linearGradient
            id="paint0_linear_207_38"
            x1="1"
            y1="-102.823"
            x2="1"
            y2="2100"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="##c3682c" stopOpacity="0" />
            <stop offset="1" stopColor="#77401c" />
          </linearGradient>
        </defs>
        <motion.path
          // animatng pathLength value, goes from 1 to 0
          style={{
            pathLength: useSpring(pathLengthValue, {
              stiffness: 500,
              damping: 100,
            }),
          }}
          transition={transition}
          d={PATH}
          stroke="#c3682c"
          strokeOpacity="1"
          strokeLinecap={"round"}
          strokeWidth="3"
        />
      </StyledSVG>
      <ContentContainer>
        {content.map((card) => {
          return <Content key={card.title} content={card} />;
        })}
      </ContentContainer>
    </PathContainer>
  );
};

export const Content = ({ content }) => {
  return (
    <Row>
      <RowTitle
        viewport={{ once: true }}
        initial={{ opacity: 0, translateY: -30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.4 }}
        onClick={() => {
          window.open(content.link, "_blank");
        }}
      >
        {content.title}
        <StyledGoLinkExternal />
      </RowTitle>
      <RowDescription
        viewport={{ once: true }}
        initial={{ opacity: 0, translateY: -30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {content.description}
      </RowDescription>
      {content.thumbnails && content.thumbnails.length > 0 && (
        <RowBottomDiv
          viewport={{ once: true }}
          initial={{ opacity: 0, translateX: 30 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {content.thumbnails.map((thumbnail) => {
            return (
              <RowBottomDivCard
                style={{
                  backgroundImage: `url(${thumbnail})`,
                }}
                key={thumbnail}
              />
            );
          })}
        </RowBottomDiv>
      )}
    </Row>
  );
};
