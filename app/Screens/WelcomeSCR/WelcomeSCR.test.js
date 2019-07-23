import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import WelcomeSCR from './WelcomeSCR';
import 'isomorphic-fetch';

import { API_REQUEST } from '../../config/settings';


describe('WelcomeSCR component', () => {
  it('renders correctly', () => {
    renderer.create(<WelcomeSCR />);
  });
  it('should match to snapshot', () => {
    const component = shallow(<WelcomeSCR />);
    expect(component).toMatchSnapshot("WelcomeSCR snapshot");
  });
  it('Initial error value should be false in state', () => {
    const wrapper = shallow(<WelcomeSCR />);
    expect(wrapper.instance().state.error).toBeFalsy();
  });
  it('getNews have to be called', async () => {
    const getNewsSpy = jest.fn();
    const wrapper = shallow(<WelcomeSCR />);
    const instance = wrapper.instance();
    instance.getNews();
    await expect(getNewsSpy).toBeDefined();
  });
  it('fetches data from server when server returns a successful response', async () => { // 1
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
    const mockFetchPromise = Promise.resolve({ // 3
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4
    
    const wrapper = shallow(<WelcomeSCR />); // 5
                            
    await expect(global.fetch).toHaveBeenCalled();
    await expect(global.fetch).toHaveBeenCalledWith(API_REQUEST);
    await expect(wrapper.state().error).toBeFalsy();

    process.nextTick(() => { // 6
      expect(wrapper.state().error).toBeTruthy();
      global.fetch.mockClear(); // 7
    });
    //   done(); // 8
  });
});
