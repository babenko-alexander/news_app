export function setArticle(data) {
  return {
    type: 'SET_ARTICLE',
    data
  };
}

export default function activeArticle(state = null, action) {
  switch (action.type) {
    case 'SET_ARTICLE': {
      return action.data;
    }
    case 'RESET_ARTICLE':
      return state;
    default:
      return state;
  }
}