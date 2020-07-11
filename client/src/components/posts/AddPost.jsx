import React from 'react';

const AddPost = () => {
  React.useEffect(() => {
    document.title = 'Добавить запись';
  });

  return (
    <div>
      <form>
        <input type='text' name='title' />
        <br />
        <input type='text' name='text' />
        <br />
        <button type='submit'>Add post</button>
      </form>
    </div>
  );
};

export default AddPost;
