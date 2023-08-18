import { Link } from 'react-router-dom';
import logos from '../../assets/images/logo.png';
import logo_sub from '../../assets/images/logo_sub.png';
import './index.scss';
import React from 'react'

function Sidebar() {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logos} alt='logo' />
            <img className='sub-logo' src={logo_sub} alt='subtitle' />
        </Link>
    </div>
  )
}

export default Sidebar