import React from 'react';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { DivWrapper } from './postStyle';

const Post = () => {
  const { posts } = useSelector((store) => store);
  const { id } = useParams();

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
