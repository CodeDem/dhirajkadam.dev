import React from "react";
import {
  Nav,
  Logo,
  Social
} from './Navbar.style'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const NavBar = () => {
  return (
    <Nav>
      <Logo>
        <Link to="/" ><h1>Dhiraj Kadam</h1></Link>
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