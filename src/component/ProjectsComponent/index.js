import React from 'react'
import Parallax from './Parallax';
import {PROJECTS} from '../../utils/constants'

const ProjectsComponent = () => {
  return <Parallax projects={PROJECTS} />;
}

export default ProjectsComponent