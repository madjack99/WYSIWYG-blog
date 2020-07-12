import { FETCH_POSTS } from '../actions/actionTypes';

const test = [];

export default (state = test, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
};
