import authReducer from './authReducer';
import postsReducer from './postsReducer';

export default (state = {}, action) => ({
  isAuthenticated: authReducer(state.isAuthenticated, action),
  posts: postsReducer(state.posts, action),
});
