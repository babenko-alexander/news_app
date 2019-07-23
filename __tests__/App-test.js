/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../app/helpers/App';
// import {mount} from 'enzyme';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
  // const component = mount(<App />);
  // expect(component).toMatchSnapshot("App snapshot");
});
