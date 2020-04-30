import React, { useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { requestQuestions } from '../../store/actions/question';
import { requestValidateUsers } from '../../store/actions/user';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Note from '../../components/Note';
import Card from './Card';

import Sidebar from '../../components/Sidebar';
import './style.scss';

const Home = props => {
  const { questions, requestQuestions } = props;

  const history = useHistory();

  function handleClick(id = 'new') {
    history.push(`/question/${id}`);
  }

  useEffect(_ => {
    requestQuestions();
  }, [requestQuestions]);

  return (
    <div id="home">
      <div className="container">
        <Sidebar />

        <div className="main-content">
          <div className="sub-navigation p-3 mt-3">
            <h1>Top Questions</h1>
            <Button onClick={() => handleClick()}>
              Ask Question
            </Button>
          </div>

          <div id="filter-question" className="p-3">
            field pencarian
          </div>

          <div className="card-question-box mt-10">
            {questions.map((question) => (
              <Card
                key={question.id}
                id={question.id}
                attributes={question.attributes}
                mark={question.mark}
              />
            ))}
          </div>
        </div>

        <div className="right-side">
          <Note></Note>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

const mapStateToProps = state => ({
  questions: state.questions,
});

const mapDispatchToProps = dispatch => ({
  requestQuestions:     _ => dispatch(requestQuestions()),
  requestValidateUsers: (userId, token) => dispatch(requestValidateUsers(userId, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
