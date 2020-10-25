import { IBlogPost } from '../types/types';

const INIT_BLOG = 'INIT_BLOG';

export interface IInitBlogAction {
  type: typeof INIT_BLOG;
  payload: IBlogState;
}

type IBlogActionTypes = IInitBlogAction;

export interface IBlogState {
  posts: IBlogPost[];
}

const initialState: IBlogState = {
  posts: []
};

const blogReducer = (
  state = initialState, 
  action: IBlogActionTypes
  ): IBlogState => {
    switch(action.type) {
      case INIT_BLOG:
        return action.payload;
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

export default blogReducer;