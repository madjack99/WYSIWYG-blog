import React from 'react';
import CKEditor from 'ckeditor4-react';

import { FormWrapper, Form, Button } from '../../shared/sharedStyles';

const AddPost = () => {
  React.useEffect(() => {
    document.title = 'Добавить запись';
  });

  const onEditorChange = (e) => {
    const data = e.editor.getData();
    console.log(data);
  };

  return (
    <FormWrapper>
      <Form>
        <input type='text' name='title' placeholder='Post title' />
        <br />
        <CKEditor onChange={onEditorChange} data='Post content' />
        <br />
        <Button type='submit'>Add post</Button>
      </Form>
    </FormWrapper>
  );
};

export default AddPost;
