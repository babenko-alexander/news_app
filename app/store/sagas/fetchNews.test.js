import { select, call, put, all } from 'redux-saga/effects';
import { fetchNewsAPI } from './api';
import React from 'react';
import {shallow} from 'enzyme';
import 'isomorphic-fetch';
import fetchNews from './fetchNews';
import { makeArticlesPure, concatFreshNews, extractAuthors } from './functions';

import { newsArrT, notPureNews, newsArr, freshNewsArr, authors } from '../../config/jest/mockData';



const iterator = fetchNews();
const gen = fetchNews();

describe('WelcomeSCR component, fetchNews saga', () => {
  it('1 iteration', () => {
    expect(iterator.next().value).toEqual(call(fetchNewsAPI));
  });
  it('2 iteration', () => {
    expect(iterator.next(notPureNews).value).toEqual(call(makeArticlesPure, notPureNews));
  });
  it('3 iteration', () => {
    expect(JSON.stringify(iterator.next().value)).toEqual(JSON.stringify(select(state => state.newsArr)));
  });
  it('4 iteration', () => {
    expect(JSON.stringify(iterator.next().value)).toEqual(JSON.stringify(select(state => state.freshNewsArr)));
  });
  it('5 iteration if news are empty', () => {
    expect(iterator.next([]).value).toEqual(put({ type: 'FETCH_FRESH_NEWS_SUCCESS', data: undefined }))
  });
    it('5 iteration if news are not empty', () => {
      gen.next();
      gen.next();
      gen.next();
      gen.next();
      expect(gen.next(newsArr).value).toEqual(call(concatFreshNews, undefined, newsArr, undefined))
    });
    it('Error handling:', () => {
      expect(gen.throw({}).value).toEqual(all([
          put({type: 'FETCH_NEWS_FAILURE'}),
          put({type: 'FETCH_FRESH_NEWS_FAILURE'}),
          put({type: 'FETCH_AUTHORS_FAILURE'}),
          put({type: 'ERROR_ON', error: {} })
      ]));
      expect(gen.next().done).toBeTruthy();
      });
  it('6 iteration', () => {
    expect(iterator.next().value).toEqual(call(extractAuthors, [], undefined))
  });
  it('7 iteration', () => {
    expect(iterator.next(authors).value).toEqual(put({ type: 'FETCH_AUTHORS_SUCCESS', data: authors }))
  });
  it('Gennerator is done', () => {
  expect(iterator.next().done).toBeTruthy();
  });
});
