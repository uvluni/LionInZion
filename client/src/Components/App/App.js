import React, { Component } from 'react';
import PreFilter from '../PreFilter/PreFilter';
import Results from '../Results/Results';

import preFilterLocationOptions from '../Data/preFilterLocationOptions';
import preFilterUrgencyOptions from '../Data/preFilterUrgencyOptions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor() {
    super();
    this.state = {
      previousFilters: [],
      finishedPreFilter: false
    }
    this.addPreFilter = this.addPreFilter.bind(this);
    this.preFilterDone = this.preFilterDone.bind(this);

  }

  addPreFilter(previousFilter) {
    let previousFilters = this.state.previousFilters;
    previousFilters.push(previousFilter);
    this.setState({
      previousFilters: previousFilters
    })
    console.log(this.state.previousFilters);
  }

  preFilterDone() {
    console.log("preFilterDone");
    this.setState({ finishedPreFilter: true })
    // Make api call to get data
  }

  render() {
    return (
      <MuiThemeProvider>
        <PreFilter
          preFilterLocationOptions={preFilterLocationOptions}
          preFilterUrgencyOptions={preFilterUrgencyOptions}
          addPreFilter={this.addPreFilter}
          preFilterDone={this.preFilterDone}
          finishPreFilter={this.finishPreFilter} />
        {this.state.finishedPreFilter && <Results results={"First result"} />}
      </MuiThemeProvider>
    );
  }
}

export default App;
