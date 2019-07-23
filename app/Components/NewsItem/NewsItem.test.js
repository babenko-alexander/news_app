import React from 'react';
import {shallow} from 'enzyme';
import NewsItem from './NewsItem';

describe('NewsItem', () => {
        it('should match to snapshot - Primary', () => {
            const component = shallow(<NewsItem text="test text"/>)
            expect(component).toMatchSnapshot("Primary NewsItem snapshot")
        });
        it('should match to snapshot - Secondary', () => {
            const component = shallow(<NewsItem text="test text" fresh={true} />)
            expect(component).toMatchSnapshot("Secondary NewsItem snapshot")
      });
});