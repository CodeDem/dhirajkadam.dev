import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  ProfileCard,
  HeaderImage,
  ProfileAvatar,
  ProfileName,
  ProfileLink,
  ProfileFooter,
  FooterLink
} from './Profile.style'
export default function Profile() {
  return (
    <ProfileCard>
      <HeaderImage >
        <ProfileAvatar />
      </HeaderImage>
      <ProfileName>Hi I'm Dhiraj, Full Stack Developer and FOSS enthusiast from Mumbai, India 🇮🇳</ProfileName>
      <ul>
        <ProfileLink>
          <a title="Email Dhiraj kadam" href="mailto:"> contact@dhirajkadam.dev</a>
        </ProfileLink>
        <ProfileLink>
          <a title="Call Dhiraj Kadam" href="tel:"> +91 9322693948</a>
        </ProfileLink>
      </ul>
      <ProfileFooter>
        <FooterLink>
          <a title="Visit Dhiraj Kadam's Twitter profile" href="https://twitter.com/codedem"><FontAwesomeIcon icon={faTwitter} /></a>
        </FooterLink>
        <FooterLink>
          <a title="Visit Dhiraj Kadam's Twitter profile" href="https://twitter.com/codedem"><FontAwesomeIcon icon={faGithub} /></a>
        </FooterLink>
        <FooterLink>
          <a title="Visit Dhiraj Kadam's Twitter profile" href="https://twitter.com/codedem"><FontAwesomeIcon icon={faLinkedin} /></a>
        </FooterLink>
      </ProfileFooter>
    </ProfileCard>
  )
}
