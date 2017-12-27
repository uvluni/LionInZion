import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const Question = ({ questions, handleClick }) => {
  let questionsButtons = questions.map((question) => <RaisedButton label={question} style={style} onClick={() => handleClick(question)} />);

  console.log(questionsButtons);

  return (
    <div className="question">
      {questionsButtons}
    </div>
  );
};

export default Question;
