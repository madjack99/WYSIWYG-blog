import React from 'react';
import CKEditor from 'ckeditor4-react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { FormWrapper, Form, Button } from '../../shared/sharedStyles';

const AddPost = () => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [titleError, setTitleError] = React.useState(null);
  const { author, isAuthenticated, posts } = useSelector((state) => state);
  const history = useHistory();

  if (!isAuthenticated) history.push('/login');

  React.useEffect(() => {
    document.title = 'Добавить запись';
  });

  const onEditorChange = (e) => {
    const data = e.editor.getData();
    setContent(data);
  };

  const handleChange = (e) => {
    setTitleError(null);
    setTitle(e.target.value);
  };

  const validateTitle = (title) => {
    const sameTitlePosts = posts.find((post) => post.title === title);
    return sameTitlePosts ? false : true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isTitleUnique = validateTitle(title);
    if (!isTitleUnique) {
      setTitleError('Title must be unique');
      return;
    }

    const date = new Date().toLocaleString();
    const newPost = {
      title,
      content,
      author,
      date,
      id: uuidv4(),
    };
    try {
      await fetch('http://localhost:5000/api/posts/add-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      history.push('/posts');
    } catch (error) {
      console.log('Failed to fetch', error);
    }
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Post title'
          value={title}
          onChange={handleChange}
          required
        />
        <br />
        <CKEditor onChange={onEditorChange} data={content} />
        <br />
        {titleError && titleError}
        <Button type='submit'>Add post</Button>
      </Form>
    </FormWrapper>
  );
};

export default AddPost;
