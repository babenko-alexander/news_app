import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';

export default class Indicator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.children}
        <Modal style={{ flex: 1 }} isVisible={this.props.indicator}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }} />
            <ActivityIndicator size="large" color="#F00" />
            <View style={{ flex: 1 }} />
          </View>
        </Modal>
      </View>
    );
  }
}
