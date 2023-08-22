import { Outlet } from 'react-router-dom';
import React from 'react';

import './index.scss';
import Sidebar from '../Sidebar';
import Background from '../Background';

function Layout() {
  return (
    <div className='App'>
        <Sidebar />
        <div className='background'>
          <Background />
          <div className='page'>
            <span className='tags top-tags'>&lt;body&gt;</span>
            <Outlet />
            <span className='tags bottom-tags'>
              &lt;/body&gt;
              <br />
              <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </span>
          </div>
        </div>
    </div>
  )
}

export default Layout