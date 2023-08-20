import React from 'react';

import './index.scss';
import Loader from 'react-loaders';

function NotFound() {
  return (
    <>
    <div className='container notFound-page'>

    </div>
    <Loader type='pacman' />
    </>
  )
}

export default NotFound