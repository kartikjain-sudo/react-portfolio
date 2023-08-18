import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faEthereum, faGithub, faInstagram, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './index.scss';
import logos from '../../assets/images/logo.png';
import logo_sub from '../../assets/images/logo_sub.png';
import { linkedIn, github, medium, insta, twitter } from '../../configurable';

function Sidebar() {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logos} alt='logo' />
            <img className='sub-logo' src={logo_sub} alt='subtitle' />
        </Link>
        <nav>
          <NavLink exact='true' activeclassname='active' to='/'>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink exact='true' activeclassname='active' className='skills-link' to='/skills'>
            <FontAwesomeIcon icon={faEthereum} color="#4d4d4e" />
          </NavLink>
          <NavLink exact='true' activeclassname='active' className='work-link' to='/portfolio'>
            <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e" />
          </NavLink>
          <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a target='_blank' rel='noreferrer' href={linkedIn}>
              <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href={github}>
              <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href={medium}>
              <FontAwesomeIcon icon={faMedium} color='#4d4d4e' />
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href={insta}>
              <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href={twitter}>
              <FontAwesomeIcon icon={faTwitter} color='#4d4d4e' />
            </a>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar