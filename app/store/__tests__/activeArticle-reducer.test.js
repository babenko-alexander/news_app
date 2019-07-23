import activeArticle from '../reducers/activeArticle';
import { article } from '../../config/jest/mockData';


describe('activeArticle reducer', () => {
  it('returns the same state on an unhandled action', () => {
    expect(activeArticle([], {type: '_NULL'})).toMatchSnapshot();
  });
  it('handles SET_ARTICLE action', () => {
    expect(activeArticle([], {type: 'SET_ARTICLE', article})).toMatchSnapshot();
  });
  it('handles RESET_ARTICLE action', () => {
    expect(activeArticle(article, {type: 'RESET_ARTICLE'})).toMatchSnapshot();
  });
});
