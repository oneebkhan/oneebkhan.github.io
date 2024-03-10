import React from "react";
import { Container, Title } from "./styles";
import ExperienceSection from "../../component/ExperienceSection";
import {
  EXPERIENCE_CARDS_GIGALABS,
  EXPERIENCE_CARDS_SALDIRI,
  EXPERIENCE_DESCRIPTION_GIGALABS,
  EXPERIENCE_DESCRIPTION_SALDIRI,
  EXPERIENCE_TITLE_GIGALABS,
  EXPERIENCE_TITLE_SALDIRI,
} from "../../utils/constants";

const Experience = () => {
  return (
    <Container>
      <Title
        viewport={{ once: true }}
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My Boring 9-5s
      </Title>
      <ExperienceSection
        cards={EXPERIENCE_CARDS_GIGALABS}
        title={EXPERIENCE_TITLE_GIGALABS}
        description={EXPERIENCE_DESCRIPTION_GIGALABS}
      />
      <ExperienceSection
        cards={EXPERIENCE_CARDS_SALDIRI}
        title={EXPERIENCE_TITLE_SALDIRI}
        description={EXPERIENCE_DESCRIPTION_SALDIRI}
      />
    </Container>
  );
};

export default Experience;
