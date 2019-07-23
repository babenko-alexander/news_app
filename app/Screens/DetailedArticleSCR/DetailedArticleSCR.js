import React, { PureComponent } from 'react';
import {  View, Text, SafeAreaView, Image, Linking } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';

import SubmitBTN from "../../Components/Buttons/SubmitBTN";

export default class DetailedArticleSCR extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { activeArticle } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
        <KeyboardAwareScrollView>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.primaryText}> {activeArticle.title} </Text>
              <Image
                id={'article_main_image'} 
                style={{ width: 250, height: 250, marginVertical: 8 }}
                source={{
                  uri: activeArticle.urlToImage
                }}
              />
              <Text style={styles.articleText}> {activeArticle.description} </Text>
              <View style={{ alignSelf: 'flex-end' }}>
              <Text style={styles.secondaryText}> {activeArticle.publishedAt} </Text>
              <Text style={styles.secondaryText}>Автор: {activeArticle.author ? activeArticle.author : 'UNKNOWN'} </Text>
              </View>
            </View>
        </KeyboardAwareScrollView>
        <View style={{ paddingBottom: 7 }}>
        {SubmitBTN("Перейти на сторінку новини", () =>
          Linking.openURL(activeArticle.url)
        )}
        {SubmitBTN("Повернутись до новин", () =>
          this.props.navigation.goBack()
        )}
        </View>
      </SafeAreaView>
    );
  }
}
