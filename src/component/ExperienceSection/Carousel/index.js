import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import {
  CardContainer,
  InnerCardContainer,
  StyledSection,
  InnerStyledSection,
  AnimatedDiv,
  InnerStyledDiv,
  Text,
  TextContainer,
  Title,
  StyledList,
} from "../styles";

const HorizontalScrollCarousel = ({ cards = [], title = "", description }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <StyledSection ref={targetRef}>
      <InnerStyledSection>
        <InnerStyledDiv>
          <TextContainer>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, translateY: -30 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Title>{title}</Title>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, translateY: -30 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <StyledList>
                {description
                  .split("\n")
                  .filter(String)
                  .map((point, pointIndex) => {
                    return (
                      <li key={pointIndex}>
                        <Text>{point}</Text>
                      </li>
                    );
                  })}
              </StyledList>
            </motion.div>
          </TextContainer>
          <AnimatedDiv
            style={{ x }}
            viewport={{ once: true }}
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.6, delay: 0.4, staggerChildren: true }}
          >
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </AnimatedDiv>
        </InnerStyledDiv>
      </InnerStyledSection>
    </StyledSection>
  );
};

const Card = ({ card }) => {
  return (
    <CardContainer key={card.id}>
      <InnerCardContainer
        style={{
          backgroundImage: `url(${card.url})`,
        }}
      />
      {/* <PictureTitleContainer>
        <PictureTitle>
          {card.title}
        </PictureTitle>
      </PictureTitleContainer> */}
    </CardContainer>
  );
};

const Carousel = ({ cards = [], title = "", description = "" }) => {
  return (
    <HorizontalScrollCarousel
      cards={cards}
      title={title}
      description={description}
    />
  );
};

export default Carousel;
