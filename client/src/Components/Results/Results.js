import React, { Component } from 'react';
// import GeneralQuestions from '../GeneralQuestions/GeneralQuestions';

class PreFilter extends Component {
  constructor({ results }) {
    super();
    this.results = results;
  }

  render() {

    return (
      <div>
        {this.results}
      </div>
    );
  }

}

export default PreFilter;
