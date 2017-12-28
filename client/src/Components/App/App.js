import React, { Component } from 'react';
import PreFilter from '../PreFilter/PreFilter';
import preFilterLocationOptions from './preFilterLocationOptions';
import preFilterUrgencyOptions from './preFilterUrgencyOptions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor() {
    super();
    this.state = {
      previousFilters: []
    }
    this.addPreFilter = this.addPreFilter.bind(this);

  }

  addPreFilter(previousFilter) {
    let previousFilters = this.state.previousFilters;
    previousFilters.push(previousFilter);
    this.setState({
      previousFilters: previousFilters
    })
    console.log(this.state.previousFilters);

  }

  render() {
    return (
      <MuiThemeProvider>
        <PreFilter
          preFilterLocationOptions={preFilterLocationOptions}
          preFilterUrgencyOptions={preFilterUrgencyOptions}
          addPreFilter={this.addPreFilter} />
      </MuiThemeProvider>
    );
  }
}

export default App;
