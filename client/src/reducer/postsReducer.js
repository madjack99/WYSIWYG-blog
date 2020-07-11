import { FETCH_POSTS } from '../actions/actionTypes';

const test = [
  {
    title: 'First post',
    text: 'Some text',
    date: '11/07/2020',
    author: 'Alex',
  },
  {
    title: 'First post',
    text: 'Some text',
    date: '11/07/2020',
    author: 'Alex',
  },
  {
    title: 'First post',
    text: 'Some text',
    date: '11/07/2020',
    author: 'Alex',
  },
  {
    title: 'First post',
    text: 'Some text',
    date: '11/07/2020',
    author: 'Alex',
  },
];

export default (state = test, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
};
