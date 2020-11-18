import { IBlogPost } from '../types/types';

const INIT_BLOG = 'INIT_BLOG';
const SET_CURRENT_POST = 'SET_CURRENT_POST';

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

type IBlogActionTypes = IInitBlogAction | ISetCurrentPostAction;

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
    switch(action.type) {
      case INIT_BLOG:
        return { ...state, posts: action.payload.posts};
      case SET_CURRENT_POST:
        return { ...state, currentPost: action.payload.post };
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

export default blogReducer;