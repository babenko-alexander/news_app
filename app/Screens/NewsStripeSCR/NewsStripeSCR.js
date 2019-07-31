import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';

import NewsItem from '../../Components/NewsItem/NewsItem';
import SubmitBTN from '../../Components/Buttons/SubmitBTN';
import CheckBox from '../../Components/CheckBox/CheckBox';

export default class NewsStripeSCR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArr: [],
      freshNewsArr: [],
      isFilters: false,
      isFilterActive: false,
      text: '',
      checkedAuthors: []
    };
  }

  componentDidMount() {
    this.setState({ newsArr: this.props.newsArr, freshNewsArr: this.props.freshNewsArr });
    if (this.props.freshNewsArr.length > 0) {
      setTimeout(() => {
        this.props.unshiftFreshNews(this.props.freshNewsArr);
        this.props.resetFreshNews();
      }, 1000);
    }
  }

  componentDidUpdate() {
    // console.log("NewsStripeSTATE=", this.state);
  }

  handleScroll = (e) => {
    console.log('SCROLL=', e.nativeEvent.contentOffset.y);
    if (e.nativeEvent.contentOffset.y <= 0) {
    this.props.unshiftFreshNews(this.props.freshNewsArr);
    this.props.resetFreshNews();
    } else if (e.nativeEvent.contentOffset.y > this.props.freshNewsArr.length * 150 ) {
      return;
    } else {
      let scrollPosition = e.nativeEvent.contentOffset.y;
      let length = this.props.freshNewsArr.length;
      let coeficient = 150;
      let counOfUnshiftingNews = null;
      let countOfNewsToLeave = null;
      let unshiftingNews = [];
      let newsToLeave = [];
      counOfUnshiftingNews = Math.floor((length - scrollPosition / coeficient) );
      countOfNewsToLeave = length - counOfUnshiftingNews;
      console.log('counOfUnshiftingNews=', counOfUnshiftingNews);
      unshiftingNews = this.props.freshNewsArr.slice(countOfNewsToLeave);
      newsToLeave =  this.props.freshNewsArr.slice(0, countOfNewsToLeave);
      console.log('unshiftingNews=', unshiftingNews);
      console.log('newsToLeave=', newsToLeave);
      setTimeout(() => this.newsUpdate(unshiftingNews, newsToLeave), 1000);
      // this.props.unshiftFreshNews(unshiftingNews);
      // this.props.updateFreshNews(newsToLeave);
    }
  }

  activateArticle = (id) => {
    let article = this.props.newsArr.find(item => item.id === id);
    console.log('article=', article);
    this.props.setArticle(article);
    this.props.navigation.navigate("DetailedArticleSCR");
  };

  filterNews = () => {
    let authors = this.props.authorsArr.filter((item, index) => this.state.checkedAuthors[index] );
    let filteredNews = authors.length > 0 
    ? this.state.text 
      ? this.props.newsArr.filter( item => authors.includes(item.author) && item.description.toLowerCase().indexOf(this.state.text.toLowerCase()) >= 0) 
      : this.props.newsArr.filter( item => authors.includes(item.author)) 
    : this.state.text
    ? this.props.newsArr.filter( item => (item.description && item.description.length > 0 && item.description.toLowerCase().indexOf(this.state.text.toLowerCase()) >= 0))
    : this.props.newsArr;

    let filteredFreshNews = authors.length > 0 
    ? this.state.text 
      ? this.props.freshNewsArr.filter( item => authors.includes(item.author) && item.description.toLowerCase().indexOf(this.state.text.toLowerCase()) >= 0) 
      : this.props.freshNewsArr.filter( item => authors.includes(item.author)) 
    : this.state.text
    ? this.props.freshNewsArr.filter( item => (item.description && item.description.length > 0 && item.description.toLowerCase().indexOf(this.state.text.toLowerCase()) >= 0))
    : this.props.freshNewsArr; 

    // let filteredFreshNewsIDs = filteredFreshNews.map(item => item.id);
    // let filteredUNFreshNews = this.props.freshNewsArr.filter(item => !filteredFreshNewsIDs.includes(item.id));;

    this.setState({ isFilterActive: true, newsArr: filteredNews, freshNewsArr: filteredFreshNews });

    // if (this.state.freshNewsArr.length > 0) {
    //   // filteredUNFreshNews = this.props.freshNewsArr.filter(item => !filteredFreshNewsIDs.includes(item.id));
    //   setTimeout(() => {
    //     this.newsUpdate(filteredFreshNews, filteredUNFreshNews);
    //     this.setState({ newsArr: filteredUNFreshNews, freshNewsArr: [] });
    //   }, 1000);

    //   // this.filterNews();      
    // }
  }

  newsUpdate = (unshiftingNews, newsToLeave) => {
    this.props.unshiftFreshNews(unshiftingNews);
    this.props.updateFreshNews(newsToLeave);
  }

  render() {
    let FilterSection = () => (
      <View style={styles.filterBox}>
        <Text style={{ fontSize: 18, marginBottom: 8 }}>Пошук за автором:</Text>
        <KeyboardAwareScrollView style={{ height: 200 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {this.props.authorsArr.map((item, index) => 
          <CheckBox
            key={index + item}
            checked={this.state.checkedAuthors[index]}
            onPress={() => {
              let updatedCheckedAuthors = this.state.checkedAuthors.map(item => item);
              updatedCheckedAuthors[index] = !this.state.checkedAuthors[index];
              this.setState({checkedAuthors: updatedCheckedAuthors});
            }}
            text={item === null ? 'Невідомий автор' : item}
          />
        )}
        </View>
        </KeyboardAwareScrollView>
        <Text style={{ fontSize: 18, marginBottom: 8 }}>Пошук за словами:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingHorizontal: 5}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        {SubmitBTN("Пошук в новинах", () =>
        this.filterNews()
          // alert(`${this.state.text}`)
        )}
      </View>
    );
    
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => (this.setState({ text: '', checkedAuthors: [], isFilterActive: false, freshNewsArr: [] }))}>
            <Image
              style={{ width: 27, height: 27, marginLeft: 15 }}
              source={require('../../assets/reset-filter-icon.png')}
            />
           </TouchableOpacity>
          <Text style={styles.primaryText}>НОВИНИ</Text>
          <TouchableOpacity onPress={() => (this.setState({ isFilters: !this.state.isFilters }))}>
            <Image
              style={{ width: 30, height: 30, marginRight: 15 }}
              source={require('../../assets/filter-icon.png')}
            />
           </TouchableOpacity>
        </View>
        {this.state.isFilters ? FilterSection() : null}
        <KeyboardAwareScrollView 
        style={styles.container} 
        // enableOnAndroid
        innerRef={(node) => { scroll = node; }}
        onScrollEndDrag={this.handleScroll}
        // onScrollEndDrag={() => scroll.props.scrollToPosition(0, 400)}
        >
          <View>
            {this.state.isFilterActive 
            ? this.state.freshNewsArr.map((item, index) => (
              <NewsItem
                imgUrl={item.urlToImage}
                title={item.title}
                date={item.publishedAt}
                id={item.id}
                key={item.id}
                // activateArticle={ () => this.activateArticle(item.id)}
                fresh
              />
            ))
            : this.props.freshNewsArr.map((item, index) => (
              <NewsItem
                imgUrl={item.urlToImage}
                title={item.title}
                date={item.publishedAt}
                id={item.id}
                key={item.id}
                // activateArticle={ () => this.activateArticle(item.id)}
                fresh
              />
            ))
          }
            {this.state.isFilterActive 
            ? this.state.newsArr.map((item, index) => (
              <NewsItem
                imgUrl={item.urlToImage}
                title={item.title}
                date={item.publishedAt}
                id={item.id}
                key={item.id}
                activateArticle={ () => this.activateArticle(item.id)}
              />
            ))
            : this.props.newsArr.map((item, index) => (
              <NewsItem
                imgUrl={item.urlToImage}
                title={item.title}
                date={item.publishedAt}
                id={item.id}
                key={item.id}
                activateArticle={ () => this.activateArticle(item.id)}
              />
            ))
          }
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
