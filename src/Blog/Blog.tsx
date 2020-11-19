import React, { useEffect } from 'react';
import blogService from '../services/blogService';
import { useSelector, useDispatch } from 'react-redux';
import BlogPost from './BlogPost';
import { initBlog } from '../reducers/blogReducer';
import './blog.css';
import { IAppState } from '../store';


const Blog: React.FC = () => {

  const selectPosts = (state: IAppState) => state.blogs.posts;
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPosts = async () => {
      const blogPosts = await blogService.getPosts();
      dispatch(initBlog(blogPosts));
    };
    if (posts.length === 0) getPosts();
  }, []);

  return (
    <div id="blog">
      <h1>Matin blogi</h1>
      {posts.map(post => <BlogPost key={post.id} post={post} feed={true}/>)}
    </div>
  );
};

export default Blog;