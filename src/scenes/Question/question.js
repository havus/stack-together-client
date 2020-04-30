import React, { Fragment, useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';

import Note     from '../../components/Note';
import Button   from '../../components/Button';
import Sidebar  from '../../components/Sidebar';

import './question.scss';

const Question = props => {
  // const history = useHistory();
  let [dataQuestion, setDataQuestion] = useState({ attributes: {} });
  let [answer, setAnswer] = useState('');

  // function handleClickBack() {
  //   history.push('/');
  // }

  function submitAnswer() {
    const body = {
      user_id: 1,
      question_id: dataQuestion.id,
      content: answer
    }
    fetch(`http://localhost:3000/api/v1/answers`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(data => {
        console.log(data);
        getQuestion(props.match.params.id);
        setAnswer('');
      })
      .catch(_ => {
        console.log('error');
      });
  }

  function getQuestion(id) {
    fetch(`http://localhost:3000/api/v1/questions/${id}`)
      .then(data => {
        return data.json();
      })
      .then(({ data }) => {
        setDataQuestion(data);
      })
      .catch(_ => {
        console.log('error');
      });
  }

  useEffect(_ => {
    getQuestion(props.match.params.id);
  }, [props.match.params.id])

  return (
    <Fragment>
      <div id="question-box">
        <Sidebar />

        <div className="main-content">
          <div className="container">

            <div className="question">
              <div className="title">
                <h1>{ dataQuestion.attributes.title }</h1>
              </div>

              <div className="content">
                {dataQuestion.attributes.content}
              </div>
            </div>

            <p id="total-answers">{ dataQuestion.attributes.answers && dataQuestion.attributes.answers.length } answer</p>

            { dataQuestion.attributes.answers && dataQuestion.attributes.answers.map((el, i) => (
                <div className="answer" key={i}>
                  <div className="content">
                    {el.content}
                  </div>
                </div>
              ))
            }

            <div className="new-answer">
              <h1>Your answer</h1>

              <textarea
                name="form[new-answer]"
                onChange={({ target: { value } }) => setAnswer(value)}
                className="rounded" rows="10"
              />

              <div id="new-answer__footer">
                <Button onClick={submitAnswer}>
                  Jawab
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <Note></Note>
        </div>
      </div>
    </Fragment>
  );
};

export default Question;
