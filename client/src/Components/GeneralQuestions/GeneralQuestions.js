import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: '10px 10px 0px 10px',
  width: 'calc(100% - 20px)'
};

const GeneralQuestion = ({ questions, handleClick }) => {
  let questionsButtons = questions.map((question, index) => <RaisedButton key={index} label={question} secondary={true} style={style} onClick={() => handleClick(index)} />);

  return (
    <div>
      {questionsButtons}
    </div>
  );
};

export default GeneralQuestion;
