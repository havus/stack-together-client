import React from 'react';

import { AlertTriangle } from 'react-feather';
import './note.scss';

const Sidebar = _ => {
  return (
    <div className="note">
      <div className="note_header">
        Pengumuman
      </div>
      <div className="note_body">
        <div className="note_list">
          <AlertTriangle size="20" className="icon"/>
          <p>Tolong untuk tidak disalah gunakan</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
