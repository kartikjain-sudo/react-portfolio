import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './index.scss';
import LogoTitle from '../../assets/images/logo.png'
import { job_array, first_name_without_first_letter_array, what_you_do } from '../../configurable'
import AnimatedLetters from '../AnimatedLetters';
function Home() {

  const [letterClass, setLetterClass] = useState('text-animate')

//   useEffect(() => {
//     return setTimeout(() => {
//         setLetterClass('text-animate-hover')
//     }, 4000)
//   }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timeoutId); // Clear the timeout if the component unmounts
    };
  }, []);

  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt='developer' />
                <AnimatedLetters letterClass={letterClass}
                strArray={first_name_without_first_letter_array} 
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={job_array} 
                idx={15 + first_name_without_first_letter_array.length}/>
            </h1>
            <h2>{what_you_do}</h2>
            <Link to='/contact' className='flat-button'> Contact Me </Link>
        </div>
    </div>
  )
}

export default Home