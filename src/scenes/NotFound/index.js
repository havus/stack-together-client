import React from 'react';

import Sidebar from '../../components/Sidebar';
import './style.scss';

const NotFound = _ => {
  return (
    <div id="not-found">
      <Sidebar />

      <div className="container">
        <div className="container-body">
          <div className="sub-navigation mb-2">
            <h1>Not found</h1>
          </div>
        </div>
      </div>

      <div className="right-side"/>
    </div>
  );
};

export default NotFound;
