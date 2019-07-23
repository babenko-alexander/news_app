import React from 'react';
import {shallow} from 'enzyme';
import DetailedArticleSCR from './DetailedArticleSCR';

// import configureStore from 'redux-mock-store';
// const middlewares = [ thunk ];
// const mockStore = configureStore();

import { article } from '../../config/jest/mockData';


describe('DetailedArticleSCR component', () => {
  let component;
  beforeEach(()=>{
    // store = mockStore({});
    component = shallow(<DetailedArticleSCR activeArticle={article} />);
    // component = mount(<Provider store={store}><DetailedArticleSCR activeArticle={article} /></Provider> );
  })
  it('should match to snapshot', () => {
    expect(component).toMatchSnapshot("DetailedArticleSCR snapshot");
  });
  it('contains defined image source', () => {
    expect(component.find('Image[id="article_main_image"]').prop('source')).toBeDefined()
  });
  // it('+++ check action on dispatching ', () => {
  //   let action;
  //   store.dispatch(addNewsOK([]));
  //   store.dispatch(addNewsERR());
  //   action = store.getActions();
  //   expect(action[0].type).toBe("FETCH_NEWS_SUCCESS");
  //   expect(action[1].type).toBe("FETCH_NEWS_FAILURE");
  //   });
});
