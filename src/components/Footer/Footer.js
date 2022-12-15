import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillMessage, AiFillPhone } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Be the change you want to see in the world</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href = "https://github.com/lokeshyerneni">
            <AiFillGithub size = "3rem" />
          </SocialIcons>
          <SocialIcons href = "https://linkedin.com/in/lokesh-yerneni-100">
            <AiFillLinkedin size = "3rem" />
          </SocialIcons>
          <SocialIcons href = "mailto:lokeshyerneni0429@gmail.com">
            <AiFillMail size = "3rem" />
          </SocialIcons>
          <SocialIcons href = "tel: 832-454-1290">
            <AiFillPhone size = "3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
