import freshNewsArr from '../reducers/freshNewsArr';
import { newsArr as data, newsArrT as dataT } from '../../config/jest/mockData';


describe('freshNewsArr reducer', () => {
  it('returns the same state on an unhandled action', () => {
    expect(freshNewsArr([], {type: '_NULL'})).toMatchSnapshot();
  });
  it('handles FETCH_FRESH_NEWS_SUCCESS action', () => {
    expect(freshNewsArr(data, {type: 'FETCH_FRESH_NEWS_SUCCESS', data: dataT})).toMatchSnapshot();
  });
  it('handles FETCH_FRESH_NEWS_FAILURE action', () => {
    expect(freshNewsArr(data, {type: 'FETCH_FRESH_NEWS_FAILURE'})).toMatchSnapshot();
  });
  it('handles RESET_FRESH_NEWS action', () => {
    expect(freshNewsArr(data, {type: 'RESET_FRESH_NEWS'})).toMatchSnapshot();
  });
  it('handles UPDATE_FRESH_NEWS action', () => {
    expect(freshNewsArr([], {type: 'UPDATE_FRESH_NEWS', data})).toMatchSnapshot();
  });
});
