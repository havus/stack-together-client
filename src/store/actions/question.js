import { FETCH_QUESTIONS } from '../actionTypes';
import axios from '../../lib/axios';

const receiveQuestions = questions => ({
  type: FETCH_QUESTIONS,
  questions,
});

export const requestQuestions = _ => {
  return dispatch => {
    axios.get('/v1/questions')
      .then(({ data: { data } }) => {
        dispatch(receiveQuestions(data));
      })
      .catch(_ => {
        dispatch(receiveQuestions([]));
      });
  };
};

export const voteQuestion = (questionId, voteType) => {
  return dispatch => {
    const body = {
      question_id: questionId,
      user_id: 1,
      vote_type: voteType
    }

    axios.post('/v1/question_votes', body)
      .then(_ => {
        dispatch(requestQuestions());
      })
      .catch(console.log)
  };
}
