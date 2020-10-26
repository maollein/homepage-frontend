import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IBlogPost } from '../types/types';

const BlogPost: React.FC<{ post: IBlogPost }> = ({ post }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title as={Link} to={`/blog/${post.id}`}>{post.title}</Card.Title>
        <Card.Text dangerouslySetInnerHTML={{ __html: post.content }}></Card.Text>
        <footer>
          {post.date}
        </footer>
      </Card.Body>
    </Card>
  );
};

export default BlogPost;