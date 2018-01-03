import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 5
};

const GeneralQuestion = ({ questions, handleClick }) => {
  let questionsButtons = questions.map((question, index) => <RaisedButton key={index} label={question} style={style} fullWidth={true} onClick={() => handleClick(index)} />);

  return (
    <div>
      {questionsButtons}
    </div>
  );
};

export default GeneralQuestion;
