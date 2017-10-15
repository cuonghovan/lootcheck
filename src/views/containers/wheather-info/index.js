import React from 'react';
import { connect } from 'react-redux';

import {wheatherSelectors} from './../../../core/wheather'
import WheatherInfo from './../../components/wheather-info';

class WheatherInfoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WheatherInfo data={this.props.data} />
    );
  }
}

const mapStateToProps = state => ({
  data: wheatherSelectors.getWheatherInfo(state)
});

export default connect(mapStateToProps, null)(WheatherInfoContainer);
