import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deletePost, setCurrentPost } from '../reducers/blogReducer';
import blogService from '../services/blogService';
import { IAppState } from '../store';
import BlogPost from './BlogPost';

const BlogPostPage: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const history = useHistory();
  const post = useSelector((state: IAppState) => state.blogs.currentPost);
  const user = useSelector((state: IAppState) => state.user);

  useEffect(() => {
    const getBlog = async () => {
      const post = await blogService.getPost(id);
      dispatch(setCurrentPost(post));
    };
    if (!post || post.id !== Number(id)) getBlog();
  }, []);

  const deleteBlogPost = async (blogId: number): Promise<void> => {
    if (confirm('Delete post permanently?')) {
      await blogService.deletePost(blogId);
      dispatch(deletePost(blogId));
      history.push('/blog');
    }
  };

  if (!post) return null;
  else return (
    <BlogPost post={post} feed={false} user={user} deletePost={deleteBlogPost} />
  );
};

export default BlogPostPage;