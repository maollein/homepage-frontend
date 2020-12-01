import React from 'react';
import { mdToHTML } from '../utils/markdownConverter';

const Preview: React.FC<{ title: string, content: string }> = ({ title, content }) => {
  if (title || content)
    return (
      <div className="mt-3 border border-dark p-3">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: mdToHTML(content) }}></div>
      </div>
    );
  else
    return null;
};

export default Preview;