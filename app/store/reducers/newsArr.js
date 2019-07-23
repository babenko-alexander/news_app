export function addNewsOK(data) {
  return {
    type: 'FETCH_NEWS_SUCCESS',
    data
  };
}
export function unshiftFreshNews(data) {
  return {
    type: 'UNSHIFT_FRESH_NEWS',
    data
  };
}
export function addNewsERR(data) {
  return {
    type: 'FETCH_NEWS_FAILURE',
    data
  };
}

export const initialState = [];

export default function newsArr(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_NEWS_SUCCESS': {
      // let urls = state.map(item => item.url);
      // let freshNews = action.data.filter(item => !urls.includes(item.url));
      // freshNews.length > 0 ? state.unshift(...freshNews) : null;
      return action.data;
    }
    case 'UNSHIFT_FRESH_NEWS': {
      let newState = action.data.concat(state);
      newState.length = 37;
      return newState;
      // state.unshift(...action.data);
      // return state;
    }
    case 'FETCH_NEWS_FAILURE':
      return state;
    default:
      return state;
  }
}