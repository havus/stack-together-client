import React, { useState, useEffect, useReducer } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Facebook, Twitter, User, Mail, Lock } from 'react-feather';
import GoogleLogo from '../../assets/images/google-favicon-logo.png';
import Button from '../../components/Button';

import { requestSignIn } from '../../store/actions/user';

import './style.scss';

const SignUp = ({moment, viewSize, requestSignIn}) => {
  const [title, setTitle]                   = useState('Create Account');
  const [hint, setHint]                     = useState('or use your email for registration:');
  const [showSignUpAttr, setShowSignUpAttr] = useState(true);
  const [username, setUsername]             = useState('');
  const [password, setPassword]             = useState('');
  
  const [signBoxStyle, setSignBoxStyle]   = useState({
    width: `${viewSize.width - 400}px`,
    left: '400px'
  });

  const handleSignIn = _ => {
    requestSignIn({username, password})
      // .then(console.log)
      // .catch(console.log)
  }

  useEffect(_ => {
    if (moment === 'sign-up') {
      setSignBoxStyle({ width: `${viewSize.width - 400}px`, left: '400px' });
    } else {
      setSignBoxStyle({ width: `${viewSize.width - 400}px`, left: 0 });
    }
    setTimeout(() => {
      if (moment === 'sign-up') {
        setTitle('Create Account');
        setHint('or use your email for registration:');
        setShowSignUpAttr(true);
      } else {
        setTitle('Sign in');
        setHint('or use your email account:');
        setShowSignUpAttr(false);
      }
    }, 300);
  }, [moment]);

  useEffect(_ => {
    setSignBoxStyle({ width: `${window.innerWidth - 400}px`, left: '400px' });
// console.log(process.env.REACT_APP_BASE_URL);
//     verifyUser('eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3RlckBtYWlsLmNvbSIsInVzZXJuYW1lIjoidGVzdGVyXzEyMyJ9.hmo5ZGoZj2gvwjqE6Ha41qRRXA0-zfF7tY5_VeCtr0A', 6)
//     .then(data => {
//       console.log(data);
//     })
  }, []);

  return (
    <div id="sign-box" style={signBoxStyle}>
      <div id="signin-box__main">
        <h1 className="mb-7">{title}</h1>
        <div id="login-third-party">
          <div>
            <Facebook color="#385895" style={{fill: '#385895'}}></Facebook>
          </div>
          <div>
            <Twitter color="#1c9ded" style={{fill: '#1c9ded'}}></Twitter>
          </div>
          <div>
            <img src={ GoogleLogo } alt="google-logo"></img>
          </div>
        </div>

        <div id="fields" className="my-10">
          <span>{hint}</span>

          <div id="name-field">
            <User color="#a9abaa" size="19"></User>
            <input
              id="username"
              placeholder="Username"
              value={username}
              onChange={({ target: { value } }) => setUsername(value)}
            ></input>
          </div>

          {
            showSignUpAttr &&
            <div id="email-field">
              <Mail color="#a9abaa" size="19"></Mail>
              <input id="email" placeholder="Email"></input>
            </div>
          }

          <div id="password-field">
            <Lock color="#a9abaa" size="19"></Lock>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            ></input>
          </div>

          {
            showSignUpAttr ?
            <Button className="mt-5" shape="circle" style={{ width: '80%' }}>Sign Up</Button> :
            <Button
              className="mt-5"
              shape="circle"
              style={{ width: '80%' }}
              onClick={handleSignIn}
            >Sign In</Button>
          }
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  requestSignIn: payload => dispatch(requestSignIn(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));
