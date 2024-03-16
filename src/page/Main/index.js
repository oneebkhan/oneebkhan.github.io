import React from "react";
import Introduction from "../../container/Introduction";
import Skills from "../../container/Skills";
import Experience from "../../container/Experience";
import Projects from "../../container/Projects";
import Contact from "../../container/Contact";
import FullScreenSlideText from "../../container/FullScreenSlideText";

const Main = () => {
  return (
    <React.Fragment>
      <Introduction />
      <Skills />
      <FullScreenSlideText text='My Experiences'/>
      <Experience />
      <FullScreenSlideText text='My Work'/>
      <Projects />
      <FullScreenSlideText text='My Contact'/>
      <Contact />
    </React.Fragment>
  );
};

export default Main;
