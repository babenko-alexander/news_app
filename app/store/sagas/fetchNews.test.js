import { call } from 'redux-saga/effects';
import { fetchNewsAPI } from './api';
import React from 'react';
import {shallow} from 'enzyme';
import 'isomorphic-fetch';
import fetchNews from './fetchNews';
import { makeArticlesPure } from './functions';

import { notPureNews, newsArrT } from '../../config/jest/mockData';



const iterator = fetchNews();

describe('WelcomeSCR component, fetchNews saga', () => {
  it('1 iteration', () => {
    expect(iterator.next().value).toEqual(call(fetchNewsAPI));
  });
  it('2 iteration', () => {
    expect(iterator.next(notPureNews).value).toEqual(call(makeArticlesPure, notPureNews));
  });
  // it('3 iteration', () => {
    // expect(iterator.next(notPureNews).value).toEqual(call(makeArticlesPure, notPureNews));
  // });

});
