import React from 'react';
import { connect } from 'react-redux';

import { weatherActions } from './../../../core/weather';
import SearchBar from './../../components/search-bar';

class SearchBarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query) {
    this.props.fetchWeatherInfo(query)
  }

  render() {
    return (
      <SearchBar handleSearch={this.handleSearch} />
    );
  }
}

const mapDispatchToProps = {
  fetchWeatherInfo: weatherActions.fetchWeatherInfo
}

export default connect(null, mapDispatchToProps)(SearchBarContainer);
