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
        April (Date TBD)
      </SectionText>
      <SectionSubText>
      Student-run hackathon organized by the Artificial Intelligence Society at UTD, 
      aiming to connect today's students with the knowledge and resources needed to build Artificial
      Intelligence related projects in the span of 24 hours. 
      </SectionSubText>
      <br></br>
      <SectionSubText>
      Check back again in March for updated information regarding the hackathon 
      </SectionSubText>
      <br></br>
      <br></br>
      <Button onClick = {() => openInNewTab("https://coda.io/form/Interest-Form_dcNCXHrKXOu")} > Fill out this interest form </Button>
    </LeftSection>
  </Section>
);

export default Hero;