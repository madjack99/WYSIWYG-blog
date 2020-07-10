import authReducer from './authReducer';

export default (state = {}, action) => ({
  isAuthenticated: authReducer(state.isAuthenticated, action),
});
