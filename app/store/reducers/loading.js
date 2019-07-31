export function loadingON() {
  return { 
    type: 'LOADING_ON'
  };
}

export function loadingOFF() {
  return { 
    type: 'LOADING_OFF'
  };
}

export default function loading(state = false, action) {
  switch (action.type) {
    case 'LOADING_ON':
      return true;
    case 'LOADING_OFF':
      return false;
    default:
      return state;
  }
}
