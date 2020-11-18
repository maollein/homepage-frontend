import React from 'react';
import { Link } from 'react-router-dom';
import { IBlogPost } from '../types/types';

const BlogPost: React.FC<{ post: IBlogPost }> = ({ post }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title"><Link className="text-dark" to={`/blog/${post.id}`}>{post.title}</Link></h4>
        <div className="card-text" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        <footer className="">
          {new Date(post.created_at).toLocaleString()}
        </footer>
      </div>
    </div>
  );
};

export default BlogPost;