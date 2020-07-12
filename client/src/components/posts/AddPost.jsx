import React from 'react';
import CKEditor from 'ckeditor4-react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { FormWrapper, Form, Button } from '../../shared/sharedStyles';

const AddPost = () => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const { author } = useSelector((state) => state);
  const history = useHistory();

  React.useEffect(() => {
    document.title = 'Добавить запись';
  });

  const onEditorChange = (e) => {
    const data = e.editor.getData();
    setContent(data);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        <Button type='submit'>Add post</Button>
      </Form>
    </FormWrapper>
  );
};

export default AddPost;
