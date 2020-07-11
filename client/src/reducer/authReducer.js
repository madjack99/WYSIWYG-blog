import { SIGN_UP } from '../actions/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case SIGN_UP:
      return action.payload;
    default:
      return state;
  }
};
