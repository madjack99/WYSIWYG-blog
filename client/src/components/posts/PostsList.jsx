import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchPosts } from '../../actions/actions';
import { Li, Ul } from './postsListStyle';

const PostsList = () => {
  const { posts } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(fetchPosts());
    document.title = 'Главная';
  }, [dispatch]);

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
