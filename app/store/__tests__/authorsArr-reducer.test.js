import authorsArr from '../reducers/newsArr';
import { newsArr as data, newsArrT as dataT } from '../../config/jest/mockData';


describe('authorsArr reducer', () => {
  it('returns the same state on an unhandled action', () => {
    expect(authorsArr([], {type: '_NULL'})).toMatchSnapshot();
  });
  it('handles FETCH_AUTHORS_SUCCESS action', () => {
    expect(authorsArr([], {type: 'FETCH_AUTHORS_SUCCESS', data})).toMatchSnapshot();
  });
  it('handles FETCH_AUTHORS_FAILURE action', () => {
    expect(authorsArr(data, {type: 'FETCH_AUTHORS_FAILURE'})).toMatchSnapshot();
  });
});
