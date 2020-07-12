import { AUTHENTICATE, SET_AUTHOR } from './actionTypes';

export const authenticate = () => ({
  type: AUTHENTICATE,
  payload: true,
});

export const setAuthor = (authorName) => ({
  type: SET_AUTHOR,
  payload: authorName,
});
