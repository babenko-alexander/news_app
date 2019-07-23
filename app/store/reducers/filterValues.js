export default function filterValues(state = 'some_filter_values', action) {
  switch (action.type) {
    case 'SET_FILTER_VALUES': {
      return action.data;
    }
    case 'RESET_FILTER_VALUES':
      return state;
    default:
      return state;
  }
}