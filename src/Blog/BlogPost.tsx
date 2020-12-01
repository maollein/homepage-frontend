import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import { IBlogPost, INewBlogPost, IUserInfo } from '../types/types';
import { mdToHTML } from '../utils/markdownConverter';
import { dateToUIFormat } from '../utils/utils';
import Writer from '../writer/Writer';

const BlogPost: React.FC<{
  post: IBlogPost,
  feed: boolean,
  user: { user?: IUserInfo },
  deletePost: (postId: number) => void,
  savePost: (postId: number, post: INewBlogPost) => void
}> = ({ post, feed, user, deletePost, savePost }) => {

  const [showEditor, setShowEditor] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const save = () => {
    savePost(post.id, { title, content });
    setShowEditor(false);
  };

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
          {post.modified_at
            ? <p>{`${dateToUIFormat(post.created_at)}, edited on ${dateToUIFormat(post.modified_at)}`}</p>
            : <p>{dateToUIFormat(post.created_at)}</p>
          }
        </footer>
        {user.user && post.user_id === user.user.id
          ? <div>
            <button onClick={() => deletePost(post.id)} className='btn btn-outline-danger'>Delete</button>
            <button onClick={() => setShowEditor(!showEditor)} className="btn btn-outline-dark ml-2">Edit</button>
          </div>
          : null
        }
        <hr />
      </div>
      {
        showEditor
          ? <Modal
            content={
              <Writer
                title={title}
                content={content}
                titleChange={e => setTitle(e.target.value)}
                contentChange={e => setContent(e.target.value)}
                submitAction={{ name: 'Save', action: save }}
                actions={[{ name: 'Cancel', action: () => setShowEditor(false) }]}
              />
            }
            actions={[]} />
          : null
      }
    </div >
  );
};

export default BlogPost;