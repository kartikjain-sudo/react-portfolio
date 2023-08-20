import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faEthereum, faGitAlt, faJs, faNodeJs, faRust } from '@fortawesome/free-brands-svg-icons';
import { Loader } from 'react-loaders';

import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

function About() {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId); // Clear the timeout if the component unmounts
    };
  }, []);

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
          interdum sapien. Proin mattis nulla nec ligula vestibulum egestas.
          Praesent ornare malesuada ipsum vel rutrum. Donec tempor nibh et nulla
          euismod vestibulum. In hac habitasse platea dictumst. Vivamus eget
          hendrerit metus. Maecenas interdum quam vitae sodales consectetur.
          Morbi fringilla mauris leo, vel gravida elit congue in. Vestibulum
          blandit, urna id consectetur consequat, dolor dui sagittis ex, a
          tristique tellus diam non tellus. Suspendisse potenti. Vivamus ornare
          consequat sagittis. Donec sit amet orci non arcu dictum facilisis.
          Mauris id neque vitae velit suscipit semper et id purus.
        </p>
        <p>
          Ut rhoncus rhoncus viverra. Ut id consectetur tortor. Morbi sagittis,
          lectus ac varius feugiat, mauris elit cursus libero, et malesuada dui
          turpis ac sem. Aliquam at augue non sapien pulvinar blandit id eget
          nibh. Phasellus blandit dolor nec pretium euismod. Quisque id quam
          eget risus accumsan mollis. Aliquam lobortis id nisi ac iaculis.
          Aenean ultrices urna neque, luctus finibus nisl efficitur sed. Sed
          mollis dapibus turpis id tincidunt.
        </p>
        <p>
          Nunc at nisi accumsan, rhoncus augue non, vestibulum massa. Sed
          iaculis venenatis ultrices. Ut accumsan ipsum vel volutpat dignissim.
          Pellentesque dictum urna ut arcu maximus hendrerit. Donec diam orci,
          gravida suscipit metus vitae, sollicitudin aliquet nibh. Pellentesque
          id iaculis felis. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas.
        </p>
      </div>
      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faEthereum} color='#3c3c3d' />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faRust} color='#B7410E' />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faNodeJs} color='#215732' />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJs} color='#EFD81D' />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faDocker} color='#0db7ed' />
          </div>
        </div>
      </div>
    </div>
    <Loader type='pacman' />
    </>
  );
}

export default About;
