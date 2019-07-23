import React from 'react';
import {shallow} from 'enzyme';
import SubmitBTN from './SubmitBTN';

describe('SubmitBTN', () => {
        it('should match to snapshot', () => {
            const component = shallow(<SubmitBTN text="test text"/>)
            expect(component).toMatchSnapshot("SubmitBTN snapshot")
        });

    // describe('Interaction', () => {
    //     describe('onPressEvent', () => {
    //         it('should call onPress', () => {
    //             // Arrange
    //             const mockOnPress = jest.fn();      // 1. mock function
    //             const component = shallow(<SubmitBTN 
    //                 label= "test text" 
    //                 onPress={mockOnPress}           // 2. passing in mock function as props
    //             />);
    //             const instance = component.instance();  // 3. getting an instance of component

    //             // Act
    //             instance.onPressHandler();          // 4. manually triggering onPressHandler()

    //             // Assert
    //             expect(mockOnPress).toHaveBeenCalled();
    //             expect(mockOnPress).toHaveBeenCalledTimes(1);   // 5. checking return values
    //         });
    //     });
    // });

});