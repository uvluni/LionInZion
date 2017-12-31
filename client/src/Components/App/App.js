import React, { Component } from 'react';
import PreFilter from '../PreFilter/PreFilter';
import Results from '../Results/Results';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import preFilterLocationOptions from '../Data/preFilterLocationOptions';
import preFilterUrgencyOptions from '../Data/preFilterUrgencyOptions';
import items from '../Data/items';

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
    // console.log(this.state.previousFilters);
  }

  preFilterDone() {
    this.setState({ finishedPreFilter: true })
    // Make api call to get data
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
        {this.state.finishedPreFilter && <Results items={items} />}
      </div>
    );
  }
}

export default App;
