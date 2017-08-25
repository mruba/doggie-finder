/*
 *
 * MainGrid
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import uuid from 'uuid';
import makeSelectMainGrid from './selectors';
const doggies = require('fixtures/doggies.json');


export class MainGrid extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(uuid);
    return (
      <div>
        {
          doggies.map(doggie => {
            return <div key={uuid.v4()}> {doggie.name}</div>
          })
        }
      </div>
    );
  }
}

MainGrid.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainGrid: makeSelectMainGrid(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainGrid);
