import React from 'react';
import { Link } from 'react-router-dom';

const BlogArchive: React.FC<{ months: string[] }> = ({ months }) => {

  return (
    <div className="pl-3 mt-3 blog-archive">
      <h5>Archive</h5>
      <ul>
        {months.map(month =>
          <li key={month}>
            <Link to={`/blog?month=${month}`}>{new Date(month).toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default BlogArchive;