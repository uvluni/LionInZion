import React, { Component } from 'react';
import PreFilter from '../PreFilter/PreFilter';
import preFilterOptions from './preFilterOptions';
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
    console.log(previousFilters);
    this.setState({
      previousFilters: previousFilters
    })
    console.log(this.state.previousFilters);

  }

  render() {
    return (
      <MuiThemeProvider>
        <PreFilter preFilterOptions={preFilterOptions} addPreFilter={this.addPreFilter} />
      </MuiThemeProvider>
    );
  }
}

export default App;
