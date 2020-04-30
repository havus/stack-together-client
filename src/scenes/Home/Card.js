import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { voteQuestion } from '../../store/actions/question';
import classnames from 'classnames';

import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome";

const Card = props => {
  const { id, attributes, mark, voteQuestion } = props;
  const history = useHistory();

  const voteUpClass = classnames('vote-button', {
    active: attributes.user_vote && attributes.user_vote.toLowerCase() == 'up'
  })
  const voteDownClass = classnames('vote-button', {
    active: attributes.user_vote && attributes.user_vote.toLowerCase() == 'down'
  })

  function handleClick(id = 'new') {
    history.push(`/question/${id}`);
  }

  function getMarkStatus(str) {
    if (!str) return;
    return str.split(',')[0];
  }

  function getMarkUser(str) {
    if (!str) return;
    return str.split(',')[1];
  }

  return (
    <div className="card-question justify-space-between pr-3">
      <div className="vote-button-wrap align-center">
        <FontAwesomeIcon
          onClick={() => voteQuestion(id, 'up')}
          icon="caret-up"
          className={voteUpClass}
        />

        <p>{ attributes.vote_up - attributes.vote_down }</p>

        <FontAwesomeIcon
          onClick={() => voteQuestion(id, 'down')}
          icon="caret-down"
          className={voteDownClass}
        />
      </div>
      <div className="card-body pr-5 flex flex-column">
        <div className="title">
          <h3 onClick={ () => handleClick(id) }>{ attributes.title }</h3>
        </div>

        <div className="summary flex justify-space-between">
          <div className="tags mt-5">

            {attributes.tags &&

            attributes.tags.map((tag, iTag) => (
              <div key={iTag} className="tag">{ tag }</div>
            ))}

          </div>
          <div className="mark align-self-end">
            <p>{ getMarkStatus(mark) }
              <span className="ml-1">{ getMarkUser(mark) }</span>
            </p>
          </div>
        </div>
      </div>
      <div className="vote-box align-center">
        <div className="votes p-3 flex flex-column align-center">
          <span>{ attributes.vote_up + attributes.vote_down }</span>
          <span>votes</span>
        </div>
        <div className="answers p-3 flex flex-column align-center">
          <span>{ attributes.answers.length }</span>
          <span>answers</span>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  voteQuestion: (questionId, voteType) => dispatch(voteQuestion(questionId, voteType)),
});

export default connect(null, mapDispatchToProps)(withRouter(Card));
