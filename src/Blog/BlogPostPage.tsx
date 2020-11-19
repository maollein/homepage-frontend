import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCurrentPost } from '../reducers/blogReducer';
import blogService from '../services/blogService';
import { IAppState } from '../store';
import BlogPost from './BlogPost';

const BlogPostPage: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const post = useSelector((state: IAppState) => state.blogs.currentPost);

  useEffect(() => {
    const getBlog = async () => {
      const post = await blogService.getPost(id);
      dispatch(setCurrentPost(post));
    };
    if (!post || post.id !== Number(id)) getBlog();
  }, []);

  if (!post) return null;
  else return (
    <BlogPost post={post} feed={false}/>
  );
};

export default BlogPostPage;