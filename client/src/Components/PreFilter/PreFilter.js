import React, { Component } from 'react';
import GeneralQuestions from '../GeneralQuestions/GeneralQuestions';
import RegionQuestion from '../RegionQuestion/RegionQuestion';

import style from './PreFilter.css';

class PreFilter extends Component {
  constructor({ preFilterOptions, addPreFilter }) {
    super();
    this.preFilterOptions = preFilterOptions;
    this.addPreFilter = addPreFilter;

    this.currentQuestion = 1;
    this.state = {
      currentQuestion: 1,
      lastAnswer: 1,
      cityQuestions: []
    };
    this.handleRegionClick = this.handleRegionClick.bind(this);
    this.handleCityClick = this.handleCityClick.bind(this);

  }

  handleRegionClick(index) {
    this.setState({
      currentQuestion: 2,
      lastAnswer: index
    });
  }

  handleCityClick(index) {
    this.addPreFilter(this.preFilterOptions.options[this.state.lastAnswer].options[index]);
    this.setState({
      currentQuestion: 3,
      lastAnswer: index
    });
  }

  render() {

    // Digests questions text
    let regionQuestions = this.preFilterOptions.options.map(option => option.title);
    let cityQuestions = this.preFilterOptions.options[this.state.lastAnswer].options.map(option => option.title);

    // Controls which question is shown
    let showRegionQuestion = this.state.currentQuestion === 1 ? true : false;
    let showCityQuestion = this.state.currentQuestion === 2 ? true : false;

    return (
      <div>
        {showRegionQuestion && <RegionQuestion questions={regionQuestions} handleClick={this.handleRegionClick} />}
        {showCityQuestion && <GeneralQuestions questions={cityQuestions} handleClick={this.handleCityClick} />}

      </div>
    );
  }

}

export default PreFilter;
