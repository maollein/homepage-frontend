import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addPost } from '../reducers/blogReducer';
import blogService from '../services/blogService';
import Preview from './Preview';
import Writer from './Writer';

const WriterPage: React.FC = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const publishPost = async () => {
    try {
      const addedPost = await blogService.postPost({ title, content });
      dispatch(addPost(addedPost));
      setContent('');
      setTitle('');
      history.push('/blog');
    } catch (e) {
      alert(e.response.data.error);
    }
  };

  const titleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const contentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <h3 className='mt-4'>Write a post</h3>
      <Writer title={title}
        content={content}
        titleChange={titleChange}
        contentChange={contentChange}
        submitAction={{ name: 'Publish', action: publishPost }}
        actions={[]}
      />
      <Preview title={title} content={content} />
    </div>
  );
};

export default WriterPage;