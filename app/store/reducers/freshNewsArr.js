export function addFreshNewsOK(data) {
  return {
    type: 'FETCH_FRESH_NEWS_SUCCESS',
    data
  };
}
export function addFreshNewsERR() {
  return {
    type: 'FETCH_FRESH_NEWS_FAILURE'
  };
}
export function resetFreshNews() {
  return {
    type: 'RESET_FRESH_NEWS'
  };
}
export function updateFreshNews(data) {
  return {
    type: 'UPDATE_FRESH_NEWS',
    data
  };
}

export default function freshNewsArr(state = [], action) {
  switch (action.type) {
    case 'FETCH_FRESH_NEWS_SUCCESS': {
      let newState = action.data.concat(state);
      // state.unshift(...action.data);
      // let newState = state.map(item => item);
      return newState;
    }
    case 'FETCH_FRESH_NEWS_FAILURE':
      return state;
    case 'RESET_FRESH_NEWS':
      return [];
      case 'UPDATE_FRESH_NEWS':
        return action.data;
    default:
      return state;
  }
}