import React from "react";
import LogoImage from "../../assets/images/logo.png";
import { HeaderContainer, StyledLogo } from "./styles";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <HeaderContainer>
      <motion.div
        initial={{ opacity: 0, translateY: -30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7 }}
      >
        <StyledLogo src={LogoImage} alt="My logo" />
      </motion.div>
    </HeaderContainer>
  );
};

export default Header;
