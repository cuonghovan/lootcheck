import React from 'react';

import SearchBarContainer from './../../containers/search-bar';
import WheatherInfoContainer from './../../containers/wheather-info';

class Wheather extends React.Component {
  render() {
    return (
      <div className='wheather'>
        <SearchBarContainer />
        <WheatherInfoContainer />
      </div>
    );
  }
}

export default Wheather;
