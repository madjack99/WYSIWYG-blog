import React from 'react';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { DivWrapper } from './postStyle';

const Post = () => {
  const history = useHistory();
  const { posts, isAuthenticated } = useSelector((store) => store);
  const { id } = useParams();

  if (!isAuthenticated) history.push('/login');

  const post = posts.find((post) => post.id === id);
  const { title, author, date, content } = post;

  React.useEffect(() => {
    document.title = title;
  });

  return (
    <DivWrapper>
      <h1>{title}</h1>
      {parse(content)}
      <p>Author: {author}</p>
      <p>{date}</p>
    </DivWrapper>
  );
};

export default Post;
