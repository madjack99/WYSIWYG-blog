import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchPosts } from '../../actions/actions';
import { Li, Ul } from './postsListStyle';

const PostsList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { posts, isAuthenticated } = useSelector((state) => state);

  if (!isAuthenticated) history.push('/login');

  React.useEffect(() => {
    isAuthenticated && dispatch(fetchPosts());
    document.title = 'Главная';
  }, [dispatch, isAuthenticated]);

  const handleClick = (id) => {
    history.push(`post/${id}`);
  };

  const renderPosts = () => {
    if (!posts.length) {
      return <p>No posts available</p>;
    }

    return posts.map((post) => {
      const { title, date, author, id } = post;
      return (
        <Li key={id} onClick={() => handleClick(id)}>
          <h2>{title}</h2>
          <p>{date}</p>
          <p>Автор: {author}</p>
        </Li>
      );
    });
  };

  return <Ul>{renderPosts()}</Ul>;
};

export default PostsList;
