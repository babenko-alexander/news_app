import React, { PureComponent } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

export default class NewsItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity style={ this.props.fresh ? [styles.container, styles.greyBG] : styles.container} onPress={this.props.activateArticle}>
        <Image
          style={{ width: 135, height: 135 }}
          source={{
            uri: this.props.imgUrl
          }}
        />
        <View style={styles.textBox}>
          <Text style={styles.secondaryText}> {this.props.title} </Text>
          <Text style={styles.secondaryText}>
            {this.props.date}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
