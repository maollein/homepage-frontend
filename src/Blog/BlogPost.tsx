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
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">
          {feed
            ? <Link className="text-dark" to={`/blog/${post.id}`}>{post.title}</Link>
            : post.title
          }
        </h2>
        <div className="card-text" dangerouslySetInnerHTML={{ __html: mdToHTML(post.content) }}></div>
        <footer className="">
          {new Date(post.created_at).toLocaleString()}
        </footer>
        {user.user && post.user_id === user.user.id
          ? <div>
            <button onClick={() => deletePost(post.id)} className='btn btn-outline-danger'>Delete</button>
          </div>
          : null
        }
      </div>
    </div>
  );
};

export default BlogPost;