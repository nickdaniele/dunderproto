import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchHistory } from '../../actions';

class Main extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchHistory());
  }

  render() {
    return (
      <h1>__Proto__</h1>
    );
  }
}

Main.prototypes = {
  dispatch: PropTypes.func.isRequired,
  entries: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return { entries: state.entries };
}

export default connect(mapStateToProps)(Main);
