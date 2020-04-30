import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import './style.scss';

const CoverBox = ({ moment, viewSize, setMoment }) => {
  const [buttonStyle, setButtonStyle] = useState({ padding: '10px 50px' });
  const [signUpButtonStyle, setSignUpButtonStyle] = useState({ opacity: 1 });
  const [signInButtonStyle, setSignInButtonStyle] = useState({ opacity: 0 });
  const [coverBoxStyle, setCoverBoxStyle] = useState({ left: 0 });
  const [signUpStyle, setSignUpStyle] = useState({
    top: '37%',
    left: '50%',
    transform: 'translateX(-50%)',
  });

  const [signInStyle, setSignInStyle] = useState({
    top: '37%',
    left: '150%',
    transform: 'translateX(-50%)',
  });

  useEffect(_ => {
    let tempCoverBoxStyle = {}
    setButtonStyle({ padding: '10px 150px' });

    if (moment === 'sign-up') {
      tempCoverBoxStyle = { left: 0, width: '650px' };

      setSignInStyle({...signInStyle, left: '150%'});
      setCoverBoxStyle(tempCoverBoxStyle);
    } else {
      tempCoverBoxStyle = { left: `${viewSize.width - 400}px`, width: '650px' };
      
      setSignUpStyle({...signUpStyle, left: '-50%'});
      setCoverBoxStyle(tempCoverBoxStyle);
    }

    setTimeout(() => {
      if (moment === 'sign-up') {
        setSignUpStyle({...signUpStyle, left: '50%'});
        setSignUpButtonStyle({ opacity: 0, display: 'none' });
        setSignInButtonStyle({ opacity: 1 });
      } else {
        setSignInStyle({...signInStyle, left: '50%'});
        setSignUpButtonStyle({ opacity: 1 });
        setSignInButtonStyle({ opacity: 0, display: 'none' });
      }
      setCoverBoxStyle({ ...tempCoverBoxStyle, width: '400px' });
      setButtonStyle({ padding: '10px 50px' });
    }, 400);
  }, [moment]);

  function switchMoment() {
    if (moment === 'sign-up') {
      setMoment('sign-in');
    } else {
      setMoment('sign-up');
    }
  }

  return (
    <div id="cover-box" style={coverBoxStyle}>
      <div id="cover-box__sign-up" style={signUpStyle}>
        <h1 className="mb-3">Welcome Back!</h1>
        <p>To keep connected with us</p>
        <p>please login your personal account</p>

        {/* <button className="mt-7" onClick={() => setMoment('sign-in')}>SIGN IN</button> */}
      </div>

      <div id="cover-box__sign-in" style={signInStyle}>
        <h1 className="mb-3">Hello Friend!</h1>
        <p>Enter your personal details</p>
        <p>and start coding with us</p>
      </div>
      <button className="mt-7" onClick={switchMoment} style={buttonStyle}>
        <span style={signUpButtonStyle}>SIGN UP</span>
        <span style={signInButtonStyle}>SIGN IN</span>
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CoverBox));
