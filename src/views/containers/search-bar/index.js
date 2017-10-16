import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { weatherActions } from './../../../core/weather';
import SearchBar from './../../components/search-bar';

class SearchBarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  static propTypes = {
    fetchWeatherInfo: PropTypes.func
  };

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
};

export default connect(null, mapDispatchToProps)(SearchBarContainer);
