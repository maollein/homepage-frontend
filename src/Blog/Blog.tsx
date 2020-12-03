import React, { useEffect, useState } from 'react';
import blogService from '../services/blogService';
import { useSelector, useDispatch } from 'react-redux';
import BlogPost from './BlogPost';
import { deletePost, initBlog, setMonths, setPostCount, updatePost } from '../reducers/blogReducer';
import './blog.css';
import { IAppState } from '../store';
import BlogProfile from './BlogProfile';
import BlogArchive from './BlogArchive';
import { Link, useLocation } from 'react-router-dom';
import { INewBlogPost } from '../types/types';


const Blog: React.FC = () => {

  const posts = useSelector((state: IAppState) => state.blogs.posts);
  const user = useSelector((state: IAppState) => state.user);
  const months = useSelector((state: IAppState) => state.blogs.months);
  const postCount = useSelector((state: IAppState) => state.blogs.postCount);
  const [showTogglableNav, setShowTogglableNav] = useState<undefined | true | false>(undefined);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const getPosts = async () => {
      const search = location.search ? location.search : '';
      const posts = await blogService.getPosts(search);
      dispatch(initBlog(posts));
    };
    const getMonths = async () => {
      const months = await blogService.getMonths();
      dispatch(setMonths(months));
    };
    const getPostCount = async () => {
      const count = await blogService.getPostCount();
      dispatch(setPostCount(count));
    };
    getPosts();
    getMonths();
    getPostCount();
  }, [location.search]);

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

  const savePost = async (id: number, postToUpate: INewBlogPost) => {
    try {
      const updatedPost = await blogService.updatePost(id, postToUpate);
      dispatch(updatePost(updatedPost));
    } catch (e) {
      alert(e.response.data.error);
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

  const getPageLinks = (): JSX.Element[] => {
    const links: JSX.Element[] = [];
    for (let i = 1; i < Math.ceil(postCount / 5) + 1; i++) {
      links.push(<Link key={i} to={`/blog?page=${i}`}>{i}</Link>);
    }
    return links;
  };

  return (
    <div className="container-fluid h-100">
      <div id="blog" className="row h-100">
        <div className="col-md-12 col-lg-9 pt-4">
          {posts
            .map(post =>
              <BlogPost
                key={post.id}
                post={post}
                feed={true}
                user={user}
                deletePost={deleteBlogPost}
                savePost={savePost}
              />
            )
          }
          <div className="page-links mb-4">
            {getPageLinks()}
          </div>
        </div>
        <div className={`${placeAndAnimate()} d-lg-none `} onClick={toggleNav}>
          <button className="nav-toggler-btn bg-dark text-light">
            {showTogglableNav
              ? <span>&times;</span>
              : <span>&#8942;</span>
            }
          </button>
        </div>
        <div className={`d-lg-none togglable-blog-nav border-left border-dark h-100 ${showAndAnimate()}`}>
          <div className="w-100 h-100 pt-4 pr-4 pl-2">
            <BlogProfile />
            <BlogArchive months={months} />
          </div>
        </div>
        <div className="d-none d-lg-block col-lg-3">
          <div className="blog-nav border-left border-dark w-100 h-100">
            <BlogProfile />
            <BlogArchive months={months} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;