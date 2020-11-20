import React, { useEffect } from 'react';
import blogService from '../services/blogService';
import { useSelector, useDispatch } from 'react-redux';
import BlogPost from './BlogPost';
import { deletePost, initBlog } from '../reducers/blogReducer';
import './blog.css';
import { IAppState } from '../store';
import { sortBlogsByCreatedAt } from '../utils/utils';


const Blog: React.FC = () => {

  const selectPosts = (state: IAppState) => state.blogs.posts;
  const selectUser = (state: IAppState) => state.user;
  const posts = useSelector(selectPosts);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPosts = async () => {
      const blogPosts = await blogService.getPosts();
      dispatch(initBlog(blogPosts));
    };
    if (posts.length === 0) getPosts();
  }, []);

  const deleteBlogPost = async (blogId: number): Promise<void> => {
    if (confirm('Delete post permanently?')) {
      await blogService.deletePost(blogId);
      dispatch(deletePost(blogId));
    }
  };

  return (
    <div id="blog">
      <h1>Matin blogi</h1>
      {posts
        .sort(sortBlogsByCreatedAt())
        .map(post => <BlogPost key={post.id} post={post} feed={true} user={user} deletePost={deleteBlogPost} />)
      }
    </div>
  );
};

export default Blog;