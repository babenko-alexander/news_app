import React, { Component } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

import { API_REQUEST } from "../../config/settings";

import SubmitBTN from "../../Components/Buttons/SubmitBTN";

export default class WelcomeSCR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  UNSAFE_componentWillMount() {
    this.getNews();
    setInterval(this.getNews, 10000);
  }

  componentDidUpdate() {
    // console.log("STATE=", this.state);
    console.log("PROPS=", this.props);
  }

  getNews = () => {
    fetch(API_REQUEST)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        console.log('myJson=', myJson);
        let authors = [];
        let newsIDs = this.props.newsArr.map(item => item.id);
        let freshNewsIDs = [];

        let pureArticles = myJson.articles.map((item, index) => 
        { authors.includes(item.author) ? null : authors.push(item.author);
          let articleID =  item.publishedAt + item.url + item.title;
          return {
          id: articleID, 
          author: item.author,
          urlToImage: item.urlToImage,
          url: item.url,
          title: item.title,
          description: item.description,
          publishedAt: item.publishedAt.split("T")[0] + "   " + item.publishedAt.split("T")[1].split("Z")[0]
          }
        });
        if (authors.length > this.props.authorsArr.length) {
          this.props.addAuthorsOK(authors);
        }

        // console.log('authors===', authors);
        
        if (this.props.newsArr.length === 0) {
        this.props.addNewsOK(pureArticles);
        return pureArticles;
        } else {
          let freshNews = pureArticles.filter( item => { 
            if ( !newsIDs.includes(item.id) ) {
              freshNewsIDs.push(item.id);
              return true
            } else {
              return false;
            }
            });
          if ( this.props.freshNewsArr.length === 0 ) {
            this.props.addFreshNewsOK(freshNews);
          } else {
           let newFreshNews = this.props.freshNewsArr.filter(item => !freshNewsIDs.includes(item.id));
           this.props.addFreshNewsOK(newFreshNews);
          }
        }
          return;
      }) 
      .catch(() => {
        this.setState({ error: true });
        this.props.addNewsERR();
        this.props.addAuthorsERR();
        this.props.addFreshNewsERR();
      });
  };

  render() {
    return (
      <View style={styles.centeredBox}>
        <Text style={styles.primaryText}>
          Welcome to the most honest news application!
        </Text>
        {SubmitBTN("Get News", () => {
          let authors = [];
          this.props.newsArr.map( item => {
            authors.includes(item.author) ? null : authors.push(item.author);
            return item.author;
          });
          this.props.addAuthorsOK(authors);
          this.props.navigation.navigate("NewsStripeSCR");
          return;
        }
        )}
      </View>
    );
  }
}
