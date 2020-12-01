import { IBlogPost } from '../types/types';

const INIT_BLOG = 'INIT_BLOG';
const SET_CURRENT_POST = 'SET_CURRENT_POST';
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_MONTHS = 'SET_MONTHS';
const SET_POST_COUNT = 'SET_POST_COUNT';
const UPDATE_POST = 'UPDATE_POST';

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

export interface ISetMonthsAction {
  type: typeof SET_MONTHS;
  payload: {
    months: string[];
  }
}

export interface ISetPostCountAction {
  type: typeof SET_POST_COUNT;
  payload: {
    postCount: number;
  }
}

export interface IUpdatePostAction {
  type: typeof UPDATE_POST;
  payload: {
    updatedPost: IBlogPost;
  }
}

type IBlogActionTypes =
  IInitBlogAction
  | ISetCurrentPostAction
  | IAddPostAction
  | IDeletePost
  | ISetMonthsAction
  | ISetPostCountAction
  | IUpdatePostAction;

export interface IBlogState {
  posts: IBlogPost[];
  currentPost: IBlogPost | undefined;
  months: string[];
  postCount: number;
}

const initialState: IBlogState = {
  posts: [],
  currentPost: undefined,
  months: [],
  postCount: 0
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
      return { ...state, posts: state.posts.filter(post => post.id !== action.payload.id) };
    case SET_MONTHS:
      return { ...state, months: action.payload.months };
    case SET_POST_COUNT:
      return { ...state, postCount: action.payload.postCount };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.updatedPost.id
            ? action.payload.updatedPost
            : post
        )
      };
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

export const setMonths = (months: string[]): ISetMonthsAction => {
  return {
    type: SET_MONTHS,
    payload: {
      months
    }
  };
};

export const setPostCount = (postCount: number): ISetPostCountAction => {
  return {
    type: SET_POST_COUNT,
    payload: {
      postCount
    }
  };
};

export const updatePost = (updatedPost: IBlogPost): IUpdatePostAction => {
  return {
    type: UPDATE_POST,
    payload: {
      updatedPost
    }
  };
};

export default blogReducer;