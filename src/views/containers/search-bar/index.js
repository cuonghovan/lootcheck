import React from 'react';
import { connect } from 'react-redux';

import { wheatherActions } from './../../../core/wheather';
import SearchBar from './../../components/search-bar';

class SearchBarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query) {
    this.props.fetchWheatherInfo(query)
  }

  render() {
    return (
      <SearchBar handleSearch={this.handleSearch} />
    );
  }
}

const mapDispatchToProps = {
  fetchWheatherInfo: wheatherActions.fetchWheatherInfo
}

export default connect(null, mapDispatchToProps)(SearchBarContainer);
