import { createSelector } from 'reselect';

/**
 * Direct selector to the mainGrid state domain
 */
const selectMainGridDomain = () => (state) => state.get('mainGrid');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MainGrid
 */

const makeSelectMainGrid = () => createSelector(
  selectMainGridDomain(),
  (substate) => substate.toJS()
);

export default makeSelectMainGrid;
export {
  selectMainGridDomain,
};
