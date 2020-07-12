import React from 'react';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { posts } = useSelector((store) => store);
  const { id } = useParams();

  const post = posts.find((post) => post.id === id);
  console.log(post);
  const { title, author, date, content } = post;
  return (
    <>
      <h1>{title}</h1>
      {parse(content)}
      <p>Author: {author}</p>
      <p>{date}</p>
    </>
  );
};

export default Post;
