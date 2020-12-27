import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deletePost, setCurrentPost, updatePost } from '../reducers/blogReducer';
import blogService from '../services/blogService';
import { IAppState } from '../store';
import { INewBlogPost } from '../types/types';
import BlogPost from './BlogPost';

const BlogPostPage: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const history = useHistory();
  const postInState = useSelector((state: IAppState) => state.blogs.posts.find(post => post.id === Number(id)));
  if (postInState) dispatch(setCurrentPost(postInState));
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

  const savePost = async (id: number, postToUpate: INewBlogPost) => {
    const updatedPost = await blogService.updatePost(id, postToUpate);
    dispatch(updatePost(updatedPost));
    dispatch(setCurrentPost(updatedPost));
  };

  if (!post) return null;
  else return (
    <div className="mt-4 container-fluid" id="blog-post-page">
      <div className="row">
        <div className="col-12 col-lg-10">
          {post.id === Number(id)
            ? <BlogPost post={post} feed={false} user={user} deletePost={deleteBlogPost} savePost={savePost} />
            : null
          }
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;