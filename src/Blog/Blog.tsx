import React, { useEffect, useState } from 'react';
import blogService from '../services/blogService';
import { useSelector, useDispatch } from 'react-redux';
import BlogPost from './BlogPost';
import { deletePost, initBlog } from '../reducers/blogReducer';
import './blog.css';
import { IAppState } from '../store';
import { sortBlogsByCreatedAt } from '../utils/utils';
import BlogProfile from './BlogProfile';


const Blog: React.FC = () => {

  const selectPosts = (state: IAppState) => state.blogs.posts;
  const selectUser = (state: IAppState) => state.user;
  const posts = useSelector(selectPosts);
  const user = useSelector(selectUser);
  const [showTogglableNav, setShowTogglableNav] = useState<undefined | true | false>(undefined);
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
      try {
        await blogService.deletePost(blogId);
        dispatch(deletePost(blogId));
      } catch (e) {
        alert(e.response.data.error);
      }
    }
  };

  const toggleNav = () => {
    setShowTogglableNav(!showTogglableNav);
  };

  const showAndAnimate = (): string => {
    if (showTogglableNav === undefined) return 'd-none';
    else if (showTogglableNav === false) return 'slideout-absolute';
    else return 'd-block slidein-absolute';
  };

  const placeAndAnimate = (): string => {
    if (showTogglableNav === undefined) return "blog-nav-toggler-closed";
    else if (showTogglableNav === false) return "blog-nav-toggler-closed slideout-toggler";
    else return "blog-nav-toggler-open slidein-toggler";
  };

  return (
    <div className="container-fluid">
      <div id="blog" className="row">
        <div className="col-md-12 col-lg-9 pt-4">
          {posts
            .sort(sortBlogsByCreatedAt())
            .map(post => <BlogPost key={post.id} post={post} feed={true} user={user} deletePost={deleteBlogPost} />)
          }
        </div>
        <div className={`${placeAndAnimate()} d-lg-none `} onClick={toggleNav}>
          <button className="nav-toggler-btn bg-dark text-light">
            {showTogglableNav
              ? <span>&times;</span>
              : <span>&#8942;</span>
            }
          </button>
        </div>
        <div className={`d-lg-none togglable-blog-nav h-100 ${showAndAnimate()}`}>
          <div className="border-left border-dark w-100 h-100 pt-4 pr-4 pl-2">
            <BlogProfile />
          </div>
        </div>
        <div className="d-none d-lg-block col-lg-3">
          <div className="blog-nav border-left border-dark w-100 h-100">
            <BlogProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;