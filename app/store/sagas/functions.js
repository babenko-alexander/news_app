import { call, put } from 'redux-saga/effects';

export function makeArticlesPure(news) {
  let pureArticles = news.articles.map((item, index) => {
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
  return pureArticles;
}

export function* concatFreshNews(pureArticles, newsArr, freshNewsArr) {
      let newsIDs = newsArr.map(item => item.id);
      let freshNewsIDs = [];
      let freshNews = yield call(() => pureArticles.filter( item => { 
        if ( !newsIDs.includes(item.id) ) {
          freshNewsIDs.push(item.id);
          return true
        } else {
          return false;
        }
        }));
      if ( freshNewsArr.length === 0 ) {
        yield put({ type: 'FETCH_FRESH_NEWS_SUCCESS', data: freshNews });
        return freshNews;
      } else {
       let newFreshNews = freshNewsArr.filter(item => !freshNewsIDs.includes(item.id));
       yield put({ type: 'FETCH_FRESH_NEWS_SUCCESS', data: newFreshNews });
       return newFreshNews;
      }
}

export function extractAuthors(newsArr, freshNewsArr) {
    let authors = [];
    let concatedArr = newsArr.concat(freshNewsArr);
    concatedArr.forEach(item => {
    authors.includes(item.author) ? null : authors.push(item.author);
    });
    return authors;
}