import { call } from 'redux-saga/effects';
import { fetchNewsAPI } from './api';
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import 'isomorphic-fetch';
import fetchNews from './fetchNews';



const iterator = fetchNews();

describe('WelcomeSCR component', () => {
  
  it('first iteration', async () => {
    // const getNewsSpy = jest.fn();
    // const wrapper = shallow(<WelcomeSCR />);
    // const instance = wrapper.instance();
    // instance.getNews();
    let value = iterator.next();
    let api = fetchNewsAPI();
    await expect(api).toMatchObject(value);
  });

});


// assert.deepEqual(
//   iterator.next().value,
//   call(fetchNewsAPI)
// )