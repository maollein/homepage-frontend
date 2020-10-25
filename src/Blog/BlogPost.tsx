import React from 'react';
import { IBlogPost } from '../types/types';

const BlogPost: React.FC<{ post: IBlogPost }> = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.author}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content}}></div>
      <p>{post.date}</p>
    </div>
  );
};

export default BlogPost;