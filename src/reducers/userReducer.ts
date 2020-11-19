import { IUserInfo } from '../types/types';

const SET_USER = 'SET_USER';
const REMOVE_USER = 'REMOVE_USER';

export interface ISetUserAction {
  type: typeof SET_USER;
  payload: {
    user: IUserInfo;
  }
}

export interface IRemoveUserAction {
  type: typeof REMOVE_USER;
}

type IUserActionTypes = ISetUserAction | IRemoveUserAction;

export interface IUserState {
  user: IUserInfo | undefined | null;
}

const initialState = {
  user: undefined
};

const userReducer = (state = initialState, action: IUserActionTypes): IUserState => {
  switch(action.type) {
    case SET_USER:
      return { ...state, user: action.payload.user };
    case REMOVE_USER:
      return { ...state, user: null };
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

export const removeUser = (): IRemoveUserAction => {
  return { type: REMOVE_USER };
};

export default userReducer;