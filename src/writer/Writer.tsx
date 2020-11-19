import React, { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../reducers/blogReducer';
import blogService from '../services/blogService';

const Writer: React.FC = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const publishPost = async (e: SyntheticEvent) => {
    e.preventDefault();
    const addedPost = await blogService.postPost({title, content});
    dispatch(addPost(addedPost));
    setContent('');
    setTitle('');
    alert('Post published');
  };

  return (
    <>
      <h3 className='mt-4'>Write a post</h3>
      <form className='mt-3' onSubmit={publishPost}>
        <input type='text' className='form-control border-dark' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
        <textarea className='form-control border-dark mt-2' placeholder='content...' value={content} onChange={e => setContent(e.target.value)} />
        <button type='submit' className='form-control btn btn-outline-dark mt-2 w-auto'>Publish</button>
      </form>
    </>
  );
};

export default Writer;