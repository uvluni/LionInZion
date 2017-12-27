import React, { Component } from 'react';
import PreFilter from '../PreFilter/PreFilter';
import preFilterOptions from './preFilterOptions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    let preFilterSelections = [];
    return (
      <MuiThemeProvider>
        <PreFilter preFilterOptions={preFilterOptions} preFilterSelections={preFilterSelections} />
      </MuiThemeProvider>
    );
  }
}

export default App;
