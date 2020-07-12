import { AUTHENTICATE, LOG_OUT } from '../actions/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return true;
    case LOG_OUT:
      return false;
    default:
      return state;
  }
};
