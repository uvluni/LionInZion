import React, { Component } from 'react';
import GeneralQuestions from '../GeneralQuestions/GeneralQuestions';
import RegionQuestion from '../RegionQuestion/RegionQuestion';

class PreFilter extends Component {
  constructor({ preFilterLocationOptions, addPreFilter, preFilterDone }) {
    super();
    this.preFilterLocationOptions = preFilterLocationOptions;
    this.addPreFilter = addPreFilter;
    this.preFilterDone = preFilterDone;

    this.state = {
      currentQuestion: 1,
      regionAnswer: 0,
      cityQuestions: []
    };

    this.handleRegionClick = this.handleRegionClick.bind(this);
    this.handleCityClick = this.handleCityClick.bind(this);
  }

  handleRegionClick(index) {
    this.setState({
      currentQuestion: 2,
      regionAnswer: index
    });
  }

  handleCityClick(index) {
    this.addPreFilter(this.preFilterLocationOptions.options[this.state.regionAnswer].options[index]);
    this.preFilterDone();
    this.setState({
      currentQuestion: 3
    });
  }

  render() {

    // Digests questions text
    let regionQuestions = this.preFilterLocationOptions.options.map(option => option.title);
    let cityQuestions = this.preFilterLocationOptions.options[this.state.regionAnswer].options.map(option => option.title);

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
