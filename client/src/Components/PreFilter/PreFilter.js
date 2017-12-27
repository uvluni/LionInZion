import React, { Component } from 'react';
import GeneralQuestions from '../GeneralQuestions/GeneralQuestions';
import RegionQuestion from '../RegionQuestion/RegionQuestion';

import style from './PreFilter.css';

class PreFilter extends Component {
  constructor({ preFilterOptions, preFilterSelections }) {
    super();
    this.regionQuestions = preFilterOptions.options.map(option => option.title);

    this.preFilterOptions = preFilterOptions;
    this.currentQuestion = 1;
    this.state = {
      currentQuestion: 1,
      lastAnswer: 1,
      cityQuestions: []
    };
    this.handleRegionClick = this.handleRegionClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleRegionClick(index) {
    console.log(index);

    // let cityQuestions = this.preFilterOptions.options[this.state.lastAnswer].options.map(option => option.title);
    console.log("this.preFilterOptions.options", this.preFilterOptions.options);


    this.setState({
      currentQuestion: 2,
      lastAnswer: index,
    });
  }

  handleClick(index) {
    console.log(index);
    this.setState({
      currentQuestion: 2,
      lastAnswer: index
    });
  }

  render() {

    let cityQuestions = this.preFilterOptions.options[this.state.lastAnswer].options.map(option => option.title);

    let showRegionQuestion = this.state.currentQuestion === 1 ? true : false;
    let showCityQuestion = this.state.currentQuestion === 2 ? true : false;

    return (
      <div>
        {showRegionQuestion && <RegionQuestion questions={this.regionQuestions} handleClick={this.handleRegionClick} />}
        {showCityQuestion && <GeneralQuestions questions={cityQuestions} handleClick={this.handleClick} />}

      </div>
    );
  }

}

export default PreFilter;
