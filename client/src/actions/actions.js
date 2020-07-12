import { AUTHENTICATE, SET_AUTHOR, FETCH_POSTS, LOG_OUT } from './actionTypes';

export const authenticate = () => ({
  type: AUTHENTICATE,
});

export const setAuthor = (authorName) => ({
  type: SET_AUTHOR,
  payload: authorName,
});

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:5000/api/posts');
      const data = await res.json();
      const { posts } = data;
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      });
    } catch (error) {
      console.log('Error while fetching posts');
    }
  };
};

export const logOut = () => ({
  type: LOG_OUT,
});
