import React from "react";
import Carousel from "./Carousel";

const ExperienceSection = ({ cards, title, description }) => {
  return <Carousel cards={cards} title={title} description={description} />;
};

export default ExperienceSection;
