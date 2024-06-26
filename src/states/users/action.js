/**
 * Define all the actions (creator) for the users state
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

const receiveUsersActionCreator = (users) => ({
  type: ActionType.RECEIVE_USERS,
  payload: {
    users,
  },
});

// prettier-ignore
const asyncRegisterUser = ({ id, name, password }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    await api.register({ id, name, password });
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
