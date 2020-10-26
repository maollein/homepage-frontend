import React, { useEffect } from 'react';
import blogService from '../services/blogService';
import { useSelector, useDispatch } from 'react-redux';
import BlogPost from './BlogPost';
import { IBlogState, initBlog } from '../reducers/blogReducer';


const Blog: React.FC = () => {

  const selectPosts = (state: IBlogState) => state.posts;
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
      <h2>Matin blogi</h2>
      {posts.map(post => <BlogPost key={post.id} post={post}/>)}
    </div>
  );
};

export default Blog;