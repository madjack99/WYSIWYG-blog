import authReducer from './authReducer';
import postsReducer from './postsReducer';
import authorReducer from './authorReducer';

export default (state = {}, action) => ({
  isAuthenticated: authReducer(state.isAuthenticated, action),
  posts: postsReducer(state.posts, action),
  author: authorReducer(state.author, action),
});
