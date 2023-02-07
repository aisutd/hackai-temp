import React from 'react';

import { Section, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle style={{ marginBottom: -10}} main center>
        Hack AI
      </SectionTitle>
      <SectionText>
        April 15-16
      </SectionText>
      <SectionSubText>
      Student-run hackathon organized by the Artificial Intelligence Society at UTD, 
      aiming to connect today's students with the knowledge and resources needed to build Artificial
      Intelligence related projects in the span of 24 hours. 
      </SectionSubText>
      <br></br>
      <br></br>
      <br></br>
      <Button onClick = {() => openInNewTab("https://coda.io/form/HackAI-2022_d4OphGKMDDl")} > Sign up for the hackathon </Button>
    </LeftSection>
  </Section>
);

export default Hero;