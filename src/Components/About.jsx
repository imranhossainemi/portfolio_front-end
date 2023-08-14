import React from 'react';
import Container from 'react-bootstrap/Container';
import Myself from './Myself';

const About = () => (
  <Container>
    <section className="about sec" id="about">
      <Myself />
    </section>
  </Container>
);

export default About;
