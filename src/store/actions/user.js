import { VALIDATE_USER, SIGN_IN } from '../actionTypes';
import axios from 'axios';
const jwt = require('jsonwebtoken');

const receiveValidateUsers = users => ({
  type: VALIDATE_USER,
  users,
});

const receiveSignIn = users => ({
  type: SIGN_IN,
  users
});

export const requestValidateUsers = (user_id, token) => {
  return dispatch => {
    const payload = {user_id, token};

    axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/users/verify_user`, payload)
      .then(({ data }) => {
        dispatch(receiveValidateUsers(data));
      })
      .catch(_ => {
        dispatch(receiveValidateUsers());
      });
  };
};

export const requestSignIn = ({username, password}) => {
  return dispatch => {
    // return new Promise((resolve, reject) => {
      const payload = {username, password};

      axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/users/sign_in`, payload)
        .then(({ data: { token, message} }) => {
          console.log(token, process.env.REACT_APP_JWT_SECRET);
          try {
            const decodedToken = jwt.verify(token, process.env.REACT_APP_JWT_SECRET);
            console.log(decodedToken);
          } catch(err) {
            console.log(err);
            // err
          }
          const converted = {
            token
          };
          dispatch(receiveSignIn(converted));
          // resolve('oke');
        })
        .catch(_ => {
          // dispatch(receiveSignIn());
          // reject('gagal');
        });
    // });
  };
};
