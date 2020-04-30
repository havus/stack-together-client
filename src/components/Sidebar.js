import React from 'react';
import { useHistory } from 'react-router-dom';

import './sidebar.scss';

const Sidebar = _ => {
  const history = useHistory();

  return (
    <div className="side-bar">
      <ul>
        <li onClick={() => history.push('/')}>Home</li>
        <li onClick={() => history.push('/random')}>Random</li>
      </ul>
    </div>
  );
};

export default Sidebar;
