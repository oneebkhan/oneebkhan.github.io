import React from 'react'
import { Container, Title } from './styles'
import ProjectsComponent from '../../component/ProjectsComponent'

const Projects = () => {
  return (
    <Container>
      <Title
        viewport={{ once: true }}
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My Work
      </Title>

      <ProjectsComponent/>
    </Container>
  )
}

export default Projects