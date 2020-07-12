import { SET_AUTHOR } from '../actions/actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case SET_AUTHOR:
      return action.payload;
    default:
      return state;
  }
};
