
import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'

import './index.scss';
import Loader from 'react-loaders';
import { user } from '../../configurable';
import AnimatedLetters from '../AnimatedLetters';

function Contact() {

  const [letterClass, setLetterClass] = useState('text-animate')
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const refForm = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId); // Clear the timeout if the component unmounts
    };
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault()

    setButtonDisabled(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        refForm.current,
        process.env.REACT_APP_PUBLIC_KEY,
      ).then(() => {
        alert("Email sent Successfully!")
        window.location.reload(false)
      }, () => {
        alert("Failed to sent, Please Try Again.")
        setButtonDisabled(false);
      })
  }

  return (
    <>
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters letterClass={letterClass}
          strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15}/>
        </h1>
        <p>
          Ut rhoncus rhoncus viverra. Ut id consectetur tortor. Morbi sagittis,
          lectus ac varius feugiat, mauris elit cursus libero, et malesuada dui
          turpis ac sem. Aliquam at augue non sapien pulvinar blandit id eget
          nibh. Phasellus blandit dolor nec pretium euismod. Quisque id quam
          eget risus accumsan mollis. Aliquam lobortis id nisi ac iaculis.
          Aenean ultrices urna neque, luctus finibus nisl efficitur sed. Sed
          mollis dapibus turpis id tincidunt.
        </p>
        <div className='contact-form'>
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input type='text' name='name' placeholder='Name' required/>
              </li>
              <li className='half'>
                <input type='email' name='email' placeholder='Email' required/>
              </li>
              <li>
                <input placeholder='Subject' name='subject' type='text' required />
              </li>
              <li>
                <textarea placeholder='Message' name='message' required />
              </li>
              <li>
                <input type='submit' className='flat-button' value='SEND' disabled={isButtonDisabled}  />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className='info-map'>
        {user.name} <br />
        {user.address.country} <br />
        <span>{user.email}</span>
      </div>
      <div className="map-wrap">
          <MapContainer center={[user.address.x_coordinates, user.address.y_coordinates]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[user.address.x_coordinates, user.address.y_coordinates]}>
              <Popup>{user.name} lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Contact