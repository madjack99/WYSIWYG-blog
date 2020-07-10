import { SIGN_UP } from '../actions/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case SIGN_UP:
      console.log('signing up');
      return action.payload;
    default:
      return state;
  }
};
