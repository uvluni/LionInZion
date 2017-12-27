import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const GeneralQuestion = ({ questions, handleClick }) => {
  let questionsButtons = questions.map((question, index) => <RaisedButton key={index} label={question} style={style} onClick={() => handleClick(index)} />);

  return (
    <div className="question">
      {questionsButtons}
    </div>
  );
};

export default GeneralQuestion;
