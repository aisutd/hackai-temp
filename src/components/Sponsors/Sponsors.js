import React from 'react';
import { FiTarget } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './SponsorsStyles';
import { AiFillProject } from 'react-icons/ai';

const Sponsors = () =>  (
  <Section id = "tech">
    <SectionDivider/>
    <br />
    <SectionTitle>Sponsors</SectionTitle>
    <List>
      <ListItem>
        <FiTarget size = "3rem"/>
        <br></br>
        <ListContainer>
          <ListTitle>Our Mission</ListTitle>
          <ListParagraph>Today, AI is a buzzword that’s continuously mentioned. 
            Many students are unaware of what it means, its subtopics, and how they can get started.
              We hope to demystify this specialized niche in computer science and bring it forward to
               students through an AI-related hackathon. 
               We aim for our in-person event to provide both learning and competition opportunities and
                connect them to professionals who can further guide them in their AI journey. </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaHandshake size = "3rem"/>
        <br></br>
        <ListContainer>
          <ListTitle>Why HackAI</ListTitle>
          <ListParagraph>Sponsoring HackAI is a win-win situation, as your contribution could allow us to provide the resources 
            our participants need to complete company challenges. In return, your company or organization will gain access to top
             tech talent, advertising opportunities, branding recognition, time to present tech talks or showcase products, 
             and even a potential solution to a business challenge you may provide.</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiFillProject size = "3rem"/>
        <br></br>
        <ListContainer>
          <ListTitle>What projects should you expect?</ListTitle>
          <ListParagraph>Topics such as Natural Language Processing, Machine Learning, Data Analytics, and more will be represented
             amongst these projects, and we are confident that both the creativity and quality of the submissions will be 
             incredibly high. The hackathon encompasses various levels of competition tasks, designed to challenge students 
             while providing value to sponsors</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Sponsors;
