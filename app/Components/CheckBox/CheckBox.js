import React, { PureComponent } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

export default class CheckBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const checkedIcon = <Image style={{ width: 20, height: 20 }} source={require('../../assets/checked.png')} />;
    const uncheckedIcon = <Image  style={{ width: 20, height: 20 }} source={require('../../assets/unchecked.png')} />;
    return (
      <View style={{ marginBottom: 11, marginRight: 8 }}>
      <TouchableOpacity
        style={{ borderRadius: 50, flexDirection: 'row', alignItems: 'center' }}
        activeOpacity={0.7}
        onPress={this.props.onPress}
      >
        <View>
        {this.props.checked ? checkedIcon : uncheckedIcon}
        </View>
      <View style={{ marginLeft: 5 }}>
        <Text>{this.props.text}</Text>
      </View>
      </TouchableOpacity>
    </View>
    );
  }
}
