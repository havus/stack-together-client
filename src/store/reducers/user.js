import { VALIDATE_USER, SIGN_IN } from '../actionTypes';

const initialState = {
  username: null,
  email: null,
  firstName: null,
  lastName: null,
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case VALIDATE_USER:
      return {
        username:   action.users.username,
        email:      action.users.email,
        firstName:  action.users.first_name,
        lastName:   action.users.last_name,
      };
    case SIGN_IN:
      // console.log('jwt', jwt);
      // console.log(action.users.token, process.env.REACT_APP_JWT_SECRET);
      // const x = jwt.verify(action.users.token, process.env.REACT_APP_JWT_SECRET);
      // console.log(action.users.token, process.env.REACT_APP_JWT_SECRET);

      console.log(action);
    default:
      return state;
  }
};
