import { IBlogPost } from '../types/types';

const INIT_BLOG = 'INIT_BLOG';
const SET_CURRENT_POST = 'SET_CURRENT_POST';
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';

export interface IInitBlogAction {
  type: typeof INIT_BLOG;
  payload: {
    posts: IBlogPost[];
  }
}

export interface ISetCurrentPostAction {
  type: typeof SET_CURRENT_POST;
  payload: {
    post: IBlogPost;
  }
}

export interface IAddPostAction {
  type: typeof ADD_POST;
  payload: {
    post: IBlogPost;
  }
}

export interface IDeletePost {
  type: typeof DELETE_POST;
  payload: {
    id: number;
  }
}

type IBlogActionTypes = IInitBlogAction | ISetCurrentPostAction | IAddPostAction | IDeletePost;

export interface IBlogState {
  posts: IBlogPost[];
  currentPost: IBlogPost | undefined;
}

const initialState: IBlogState = {
  posts: [],
  currentPost: undefined
};

const blogReducer = (
  state = initialState,
  action: IBlogActionTypes
): IBlogState => {
  switch (action.type) {
    case INIT_BLOG:
      return { ...state, posts: action.payload.posts };
    case SET_CURRENT_POST:
      return { ...state, currentPost: action.payload.post };
    case ADD_POST:
      return { ...state, posts: state.posts.concat(action.payload.post) };
    case DELETE_POST:
      return { ...state, posts: state.posts.filter(post => post.id !== action.payload.id)};
    default:
      return state;
  }
};

export const initBlog = (posts: IBlogPost[]): IInitBlogAction => {
  return {
    type: INIT_BLOG,
    payload: {
      posts
    }
  };
};

export const setCurrentPost = (post: IBlogPost): ISetCurrentPostAction => {
  return {
    type: SET_CURRENT_POST,
    payload: {
      post
    }
  };
};

export const addPost = (post: IBlogPost): IAddPostAction => {
  return {
    type: ADD_POST,
    payload: {
      post
    }
  };
};

export const deletePost = (id: number): IDeletePost => {
  return {
    type: DELETE_POST,
    payload: {
      id
    }
  };
};

export default blogReducer;