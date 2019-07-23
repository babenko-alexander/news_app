import React from 'react';
import {shallow} from 'enzyme';
import CheckBox from './CheckBox';
// import { NativeModules } from 'react-native';

describe('CheckBox', () => {
        it('should match to snapshot - Primary', () => {
            const component = shallow(<CheckBox text="test text"/>)
            expect(component).toMatchSnapshot("Primary CheckBox snapshot")
        });
        it('should match to snapshot - Secondary', () => {
            const component = shallow(<CheckBox text="test text" checked={true} />)
            expect(component).toMatchSnapshot("Secondary CheckBox snapshot")
        });
        it('should call onPress', () => {
            // Arrange
            const mockOnPress = jest.fn();     
            const component = shallow(<CheckBox 
                text= "test text" 
                onPress={mockOnPress}          
            />);
            component.instance().props.onPress();
            expect(mockOnPress).toHaveBeenCalled();
        });
        // it('should call saveToPhone', () => {
        //     jest.mock('NativeModules', () => {
        //         return {
        //           PhotoActions: {
        //             saveToPhone: jest.fn(),
        //           },
        //         };
        //       });
        //     const saveToPhoneSpy = jest.spyOn(NativeModules.PhotoActions, 'saveToPhone');
        //     expect(saveToPhoneSpy()).toHaveBeenCalled();
        // });
});