import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Sponsors from '../components/Sponsors/Sponsors';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import {Controller, Scene} from "react-scrollmagic";
import {Tween, Timeline } from "react-gsap";
import FAQ from '../components/FAQ/FAQ';

const Home = ({children}) => {
  
  return (
    <Controller>
    <Layout>
      <Section grid>
        <Hero/>
        <BgAnimation />
      </Section>
      <FAQ />
      <Sponsors />
    </Layout>
    </Controller>
  );
};

export default Home;
