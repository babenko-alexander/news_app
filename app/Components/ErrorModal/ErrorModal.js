import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Modal from 'react-native-modal';

export default class ErrorModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("ErrorModal PROPS=", this.props);
  }

  componentDidUpdate() {
    console.log("ErrorModal PROPS=", this.props);
  }

  render() {
    return (
      <View style={{ flex: 1 }} >
      {this.props.children}
      <TouchableWithoutFeedback onPress={this.props.turnErrorOFF}>
        <Modal style={{ flex: 1 }} isVisible={!!this.props.error}>
          <View
            style={{
              // backgroundColor: 'rgba(0, 0, 0, 0.65)',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1
            }}
          >
            <Text
              style={{
                color: '#FFF',
                fontSize: wp('7%'),
                fontWeight: '600',
                textAlign: 'center',
                paddingHorizontal: wp('10%')
              }}
            >
              {this.props.error}
            </Text>
          </View>
        </Modal>
      </TouchableWithoutFeedback>
      </View>
    );
  }
}
