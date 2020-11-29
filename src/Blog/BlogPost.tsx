import React from 'react';
import { Link } from 'react-router-dom';
import { IBlogPost, IUserInfo } from '../types/types';
import { mdToHTML } from '../utils/markdownConverter';

const BlogPost: React.FC<{
  post: IBlogPost,
  feed: boolean,
  user: { user?: IUserInfo },
  deletePost: (blogId: number) => Promise<void>
}> = ({ post, feed, user, deletePost }) => {

  return (
    <div className="blog-post mb-4">
      <div className="">
        <h2 className="">
          {feed
            ? <Link className="text-dark" to={`/blog/${post.id}`}>{post.title}</Link>
            : post.title
          }
        </h2>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: mdToHTML(post.content) }}></div>
        <footer className="blog-post-footer mt-2 mb-1">
          {new Date(post.created_at).toLocaleString()}
        </footer>
        {user.user && post.user_id === user.user.id
          ? <div>
            <button onClick={() => deletePost(post.id)} className='btn btn-outline-danger'>Delete</button>
          </div>
          : null
        }
        <hr />
      </div>
    </div>
  );
};

export default BlogPost;