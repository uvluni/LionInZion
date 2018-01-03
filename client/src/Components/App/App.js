import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import API from '../API/API';
import PreFilter from '../PreFilter/PreFilter';
import Results from '../Results/Results';

import preFilterLocationOptions from '../Data/preFilterLocationOptions';

class App extends Component {
  constructor() {
    super();

    this.api = new API();
    // this.items = [];

    this.state = {
      preFilters: [],
      finishedPreFilter: false,
      items: []
    }
    this.addPreFilter = this.addPreFilter.bind(this);
    this.preFilterDone = this.preFilterDone.bind(this);

  }

  async componentWillMount() {
    let items = await this.api.getItems();
    this.setState({ items })
  }

  addPreFilter(preFilter) {
    let preFilters = this.state.preFilters;
    preFilters.push(preFilter);
    this.setState({
      preFilters: preFilters
    })
    console.log(this.state.preFilters);
  }

  preFilterDone() {
    this.setState({ finishedPreFilter: true })
  }

  render() {
    return (
      <div>
        <PreFilter
          preFilterLocationOptions={preFilterLocationOptions}
          addPreFilter={this.addPreFilter}
          preFilterDone={this.preFilterDone}
          finishPreFilter={this.finishPreFilter} />
        {this.state.finishedPreFilter && <Results items={this.state.items} />}
      </div>
    );
  }
}

export default App;
