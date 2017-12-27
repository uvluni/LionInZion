import React, { Component } from 'react';
import Questions from '../Questions/Questions';

import style from './PreFilter.css';

class PreFilter extends Component {
  constructor({ preFilterOptions, preFilterSelections }) {
    super();
    this.preFilterOptions = preFilterOptions;
    console.log(this.preFilterOptions);
    // Use set state
    // Update the questions shown accordingly
    // Update on the state the selected filters
  }

  handleClick(where) {
    console.log(where);
    console.log(this.preFilterOptions);
    // this.setState = {preFilterOptions: this.preFilterOptions[where]}
  }

  render() {

    console.log("ccc", this.preFilterOptions.options);
    const questions = this.preFilterOptions.options.map(option => option.title)

    return (
      <div>
        <Questions questions={questions} handleClick={this.handleClick} />
      </div>
    );
  }

}

export default PreFilter;
