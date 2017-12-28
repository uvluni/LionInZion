import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 5,
};

const RegionQuestion = ({ questions, handleClick }) => {
  let questionsButtons = questions.map((question, index) => <RaisedButton key={index} label={question} primary={true} fullWidth={true} style={style} onClick={() => handleClick(index)} />);

  return (
    <div className="question">
      {questionsButtons}
    </div>
  );
};

export default RegionQuestion;
