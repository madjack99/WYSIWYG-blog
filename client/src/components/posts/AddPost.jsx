import React from 'react';
import CKEditor from 'ckeditor4-react';

import { FormWrapper, Form, Button } from '../../shared/sharedStyles';

const AddPost = () => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, content);
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
