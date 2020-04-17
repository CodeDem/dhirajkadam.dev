import React from "react";
import {
  Nav,
  Logo,
  Social
} from './Navbar.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const NavBar = () => {
  return (
    <Nav>
      <Logo>
        <a><h1>Dhiraj Kadam</h1></a>
      </Logo>

      <Social>
        <a href="https://github.com/codedem" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="https://twitter.com/codedem" target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a href="https://in.linkedin.com/in/codedem" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      </Social>
    </Nav>
  )
};

export default NavBar;  