import React from 'react';
import { Link } from 'react-router-dom';
import { IBlogPost } from '../types/types';
import { mdToHTML } from '../utils/markdownConverter';

const BlogPost: React.FC<{ post: IBlogPost, feed: boolean }> = ({ post, feed }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">
          { feed
            ? <Link className="text-dark" to={`/blog/${post.id}`}>{post.title}</Link>
            : post.title
          }
        </h2>
        <div className="card-text" dangerouslySetInnerHTML={{ __html: mdToHTML(post.content) }}></div>
        <footer className="">
          {new Date(post.created_at).toLocaleString()}
        </footer>
      </div>
    </div>
  );
};

export default BlogPost;