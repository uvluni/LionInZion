import React, { Component } from 'react';
import GeneralQuestions from '../GeneralQuestions/GeneralQuestions';
import RegionQuestion from '../RegionQuestion/RegionQuestion';
import UrgencyQuestions from '../UrgencyQuestions/UrgencyQuestions';

class PreFilter extends Component {
  constructor({ preFilterLocationOptions, preFilterUrgencyOptions, addPreFilter, preFilterDone }) {
    super();
    this.preFilterLocationOptions = preFilterLocationOptions;
    this.preFilterUrgencyOptions = preFilterUrgencyOptions;
    this.addPreFilter = addPreFilter;
    this.preFilterDone = preFilterDone;

    this.state = {
      currentQuestion: 1,
      lastAnswer: 1,
      regionAnswer: 0,
      cityQuestions: []
    };

    this.handleRegionClick = this.handleRegionClick.bind(this);
    this.handleCityClick = this.handleCityClick.bind(this);
    this.handleUrgencyClick = this.handleUrgencyClick.bind(this);
  }

  handleRegionClick(index) {
    this.setState({
      currentQuestion: 2,
      regionAnswer: index
    });
  }

  handleCityClick(index) {
    this.addPreFilter(this.preFilterLocationOptions.options[this.state.lastAnswer].options[index]);
    this.setState({
      currentQuestion: 3,
      lastAnswer: index
    });
  }

  handleUrgencyClick(index) {
    this.addPreFilter(this.preFilterUrgencyOptions.options[index]);
    this.preFilterDone();
    this.setState({
      currentQuestion: 4,
      lastAnswer: index
    });
  }

  render() {

    // Digests questions text
    let regionQuestions = this.preFilterLocationOptions.options.map(option => option.title);
    let cityQuestions = this.preFilterLocationOptions.options[this.state.regionAnswer].options.map(option => option.title);
    let urgencyQuestions = this.preFilterUrgencyOptions.options.map(option => option.title);

    // Controls which question is shown
    let showRegionQuestion = this.state.currentQuestion === 1 ? true : false;
    let showCityQuestion = this.state.currentQuestion === 2 ? true : false;
    let showUrgencyQuestion = this.state.currentQuestion === 3 ? true : false;

    return (
      <div>
        {showRegionQuestion && <RegionQuestion questions={regionQuestions} handleClick={this.handleRegionClick} />}
        {showCityQuestion && <GeneralQuestions questions={cityQuestions} handleClick={this.handleCityClick} />}
        {showUrgencyQuestion && <UrgencyQuestions questions={urgencyQuestions} handleClick={this.handleUrgencyClick} />}

      </div>
    );
  }

}

export default PreFilter;
