import { Box, Grid } from '@mui/material';
import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Boxes, BoxNum, BoxText } from './FAQStyles';

const data = [
  { question: "Do I need to be a CS major?", answer: 'No, all majors are welcome'},
  { question: "How old do I have to be?", answer: 'You must be 18 or older to participate', },
  { question: "How much does it cost?", answer: 'There is no cost to attend!', },
  { question: "How do teams work?", answer: 'Teams at HackAI can have a maximum of 5 members', },
  { question: "Is this virtual or in person", answer: 'Fully in-person event', },
  { question: "Do I need experience in AI?", answer: 'Not at all! This hackathon is meant to introduce AI to everyone. All you need is a drive and passion to learn! ', },
];

const FAQ = () => (
  <Section id = 'accomplishments'>
    <SectionDivider/>
    <br></br>
    <SectionTitle>FAQ</SectionTitle>
    <Boxes>
      <Grid container width="75vw" direction="row" justifyContent="space-between" alignItems="center">
      {data.map((card, index) => (
        <>
        <Grid item display={"flex"} alignItems="center" justifyContent="center" height={"300px"} width={340} sx={{background: "#212D45", borderRadius: "12px", padding: "24px"}} key = {index}>
          <Grid item>
            <BoxNum>{card.question}</BoxNum>
            <br></br>
            <BoxText>{card.answer}</BoxText>
          </Grid>
        </Grid>
        <Box height={350}></Box>
        </>
      ))}
      </Grid>
    </Boxes>  
  </Section>
);

export default FAQ;
