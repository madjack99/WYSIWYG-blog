import { AUTHENTICATE } from '../actions/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return action.payload;
    default:
      return state;
  }
};
