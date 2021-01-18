import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';

const rootReducer = combineReducers({
    index: (state = {}, action) => {
      switch (action.type) {
        case HYDRATE:
          // eslint-disable-next-line no-console
          console.log('HYDRATE', action);
          return { ...state, ...action.payload };
        default:
          return state; // 이부분이 궁금하다
      }
    },
    user,
    post,
  });
  
  export default rootReducer;