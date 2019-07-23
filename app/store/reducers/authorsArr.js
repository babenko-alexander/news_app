export function addAuthorsOK(data) {
  return {
    type: 'FETCH_AUTHORS_SUCCESS',
    data
  };
}
export function addAuthorsERR(data) {
  return {
    type: 'FETCH_AUTHORS_FAILURE',
    data
  };
}

export default function authorsArr(state = [], action) {
  switch (action.type) {
    case 'FETCH_AUTHORS_SUCCESS': {
      return action.data;
    }
    case 'FETCH_AUTHORS_FAILURE':
      return state;
    default:
      return state;
  }
}