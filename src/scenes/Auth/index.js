import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Facebook, Twitter, User, Mail, Lock } from 'react-feather';

import CoverBox from './coverBox';
import SignBox from './signBox';

import './style.scss';

const Home = props => {

  const [moment, setMoment]               = useState('sign-up');
  const [viewSize, setViewSize]           = useState({ width: 0, height: 0 });

  function updateWindowDimensions() {
    setViewSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(_ => {
    updateWindowDimensions();

    window.addEventListener('resize', updateWindowDimensions);
  }, []);

  return (
    <div id="auth">
      <div className='container'>
        <CoverBox moment={moment} viewSize={viewSize} setMoment={setMoment}></CoverBox>
        <SignBox moment={moment} viewSize={viewSize}></SignBox>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
