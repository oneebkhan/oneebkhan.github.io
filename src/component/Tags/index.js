import React from "react";
import { SkillsListContainer, StyledCard } from "./styles";
import { motion } from "framer-motion";

const Card = ({ name, icon, colorprop, colorproptext, index, onClick }) => {
  return (
    <StyledCard colorprop={colorprop} colorproptext={colorproptext} >
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, translateY: -300 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.4, delay: index / 15 + 0.2 }}
        onClick={onClick}
      >
        {icon}
      </motion.div>
    </StyledCard>
  );
};

const Tags = ({ tags }) => {
  return (
    <SkillsListContainer>
      {tags.map((skill, skillIndex) => {
        return (
          <Card
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            colorprop={skill.colorprop}
            colorproptext={skill.colorproptext}
            index={skillIndex}
            onClick={skill.onClick}
          />
        );
      })}
    </SkillsListContainer>
  );
};

export default Tags;
