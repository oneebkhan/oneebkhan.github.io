import React from "react";
import Introduction from "../../container/Introduction";
import Skills from "../../container/Skills";
import Experience from "../../container/Experience";
import Projects from "../../container/Projects";
import Contact from "../../container/Contact";

const Main = () => {
  return (
    <React.Fragment>
      <Introduction />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </React.Fragment>
  );
};

export default Main;
