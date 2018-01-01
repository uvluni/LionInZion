import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import API from '../API/API';
import PreFilter from '../PreFilter/PreFilter';
import Results from '../Results/Results';

import preFilterLocationOptions from '../Data/preFilterLocationOptions';
import preFilterUrgencyOptions from '../Data/preFilterUrgencyOptions';
// import items from '../Data/items';

class App extends Component {
  constructor() {
    super();

    this.api = new API();
    // this.items = [];

    this.state = {
      previousFilters: [],
      finishedPreFilter: false,
      items: []
    }
    this.addPreFilter = this.addPreFilter.bind(this);
    this.preFilterDone = this.preFilterDone.bind(this);

  }

  async componentWillMount() {
    let items = await this.api.getItems();
    this.setState({ items })
    console.log(this.state.items);
  }

  addPreFilter(previousFilter) {
    let previousFilters = this.state.previousFilters;
    previousFilters.push(previousFilter);
    this.setState({
      previousFilters: previousFilters
    })
    // console.log(this.state.previousFilters);
  }

  preFilterDone() {
    this.setState({ finishedPreFilter: true })
  }

  render() {
    return (
      <div>
        <PreFilter
          preFilterLocationOptions={preFilterLocationOptions}
          preFilterUrgencyOptions={preFilterUrgencyOptions}
          addPreFilter={this.addPreFilter}
          preFilterDone={this.preFilterDone}
          finishPreFilter={this.finishPreFilter} />
        {this.state.finishedPreFilter && <Results items={this.state.items} />}
      </div>
    );
  }
}

export default App;
