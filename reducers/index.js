import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';

// const rootReducer = (state= initialState, aciton) => {
//  switch .......
// }

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action); // 나중에 알게 됩니다 그때 이걸 지워주세요
        return { ...state, ...action.payload };
      default:
        return state; // 초기화 할때 필요 까먹지 말기
    }
  },
  user,
  post,
});

export default rootReducer;
