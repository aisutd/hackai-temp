import { IconButton } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { FaDiscord } from "react-icons/fa";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href = "/">
        <a style = {{display: 'flex', alignItems: 'center', color: 'white', marginBottom: 20}}>
          <Span>Hack AI</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href = "#projects">
          <NavLink>
            FAQ
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#tech">
          <NavLink>
            Sponsors
          </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href = "https://www.instagram.com/utdais/" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram size = "3rem" />
      </SocialIcons>
      <SocialIcons href = "https://www.facebook.com/aisutd" target="_blank" rel="noopener noreferrer">
        <AiFillFacebook size = "3rem" />
      </SocialIcons>
      <SocialIcons href = "https://www.linkedin.com/company/ais-utd/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size = "3rem" />
      </SocialIcons>
      <SocialIcons href = "https://www.youtube.com/@artificialintelligencesoci9846" target="_blank" rel="noopener noreferrer">
        <AiFillYoutube size = "3rem" />
      </SocialIcons>
      <SocialIcons href = "https://discord.gg/tEfAAHpFAX" target="_blank" rel="noopener noreferrer">
        <FaDiscord size = "3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
