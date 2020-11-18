import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import blogReducer, { IBlogState } from './reducers/blogReducer';
import userReducer from './reducers/userReducer';
import { IUserInfo } from './types/types';

export interface IAppState {
  blogs: IBlogState, 
  user: {
    user: IUserInfo
  }
}

const reducer = combineReducers({
  blogs: blogReducer,
  user: userReducer
});

const store = createStore(
  reducer,
  composeWithDevTools()
);

export default store;