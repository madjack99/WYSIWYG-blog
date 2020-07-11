import React from 'react';
import { useSelector } from 'react-redux';

import { Li, Ul } from './postsListStyle';

const PostsList = () => {
  const { posts } = useSelector((state) => state);

  React.useEffect(() => {
    document.title = 'Главная';
  });

  const renderPosts = () => {
    if (!posts.length) {
      return <p>No posts available</p>;
    }

    return posts.map((post) => {
      const { title, date, author } = post;
      return (
        <Li key={date}>
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
