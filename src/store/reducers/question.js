import { FETCH_QUESTIONS } from '../actionTypes';

const initialState = [];

export const questions = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_QUESTIONS:
    return [...action.questions];
  default:
    return state;
  }
};
