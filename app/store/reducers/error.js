export function turnErrorON(error) {
  return { 
    type: 'ERROR_ON',
    error
  };
}

export function turnErrorOFF() {
  return { 
    type: 'ERROR_OFF'
  };
}

export default function error(state = '', action) {
  switch (action.type) {
    case 'ERROR_ON':
      return action.error;
    case 'ERROR_OFF':
      return '';
    default:
      return state;
  }
}
