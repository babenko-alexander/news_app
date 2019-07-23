import React, { PureComponent } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import styles from './styles';

const SubmitBTN = ( text, onPress ) => (
  <TouchableOpacity
  style={{ borderRadius: 50 }}
    activeOpacity={0.7}
    onPress={onPress}
  >
    <View
    style={styles.btnBox}
    >
    <Text style={styles.btnText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default SubmitBTN;
