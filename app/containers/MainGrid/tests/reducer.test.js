
import { fromJS } from 'immutable';
import mainGridReducer from '../reducer';

describe('mainGridReducer', () => {
  it('returns the initial state', () => {
    expect(mainGridReducer(undefined, {})).toEqual(fromJS({}));
  });
});
