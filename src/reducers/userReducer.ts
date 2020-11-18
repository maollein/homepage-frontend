import { IUserInfo } from '../types/types';

const SET_USER = 'SET_USER';

export interface ISetUserAction {
  type: typeof SET_USER;
  payload: {
    user: IUserInfo;
  }
}

type IUserActionTypes = ISetUserAction;

export interface IUserState {
  user: IUserInfo | undefined;
}

const initialState = {
  user: undefined
};

const userReducer = (state = initialState, action: IUserActionTypes): IUserState => {
  switch(action.type) {
    case SET_USER:
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};

export const setUser = (user: IUserInfo): ISetUserAction => {
  return {
    type: SET_USER,
    payload: {
      user
    }
  };
};

export default userReducer;