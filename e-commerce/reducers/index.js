import { combineReducers, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import user from './user';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducers = combineReducers({
        user: user.reducer,
      });
      return combineReducers(state, action);
    }
  }
};

export default rootReducer;
