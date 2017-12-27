import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const UrgencyQuestions = ({ questions, handleClick }) => {
  let questionsButtons = questions.map((question, index) => <RaisedButton key={index} label={question} secondary={true} style={style} onClick={() => handleClick(index)} />);

  return (
    <div className="question">
      {questionsButtons}
    </div>
  );
};

export default UrgencyQuestions;
