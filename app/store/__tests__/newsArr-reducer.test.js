import newsArr from '../reducers/newsArr';
import { initialState } from '../reducers/newsArr';
import { newsArr as data, newsArrT as dataT } from '../../config/jest/mockData';


describe('newsArr reducer', () => {
  it('returns the same state on an unhandled action', () => {
    expect(newsArr(initialState, {type: '_NULL'})).toMatchSnapshot();
  });
  it('handles FETCH_NEWS_SUCCESS action', () => {
    expect(newsArr(initialState, {type: 'FETCH_NEWS_SUCCESS', data})).toMatchSnapshot();
  });
  it('handles UNSHIFT_FRESH_NEWS action', () => {
    expect(newsArr(data, {type: 'UNSHIFT_FRESH_NEWS', data: dataT})).toMatchSnapshot();
  });
  it('handles FETCH_NEWS_FAILURE action', () => {
    expect(newsArr(data, {type: 'FETCH_NEWS_FAILURE'})).toMatchSnapshot();
  });
});
