import React from 'react';

import { Container } from './styles';

interface Project {
  name: string;
  description: string;
  id: number;
}
const Projects: React.FC = () => {

  return (
    <Container>
      <h1>Projetos</h1>
    </Container>
  );
}

export default Projects;