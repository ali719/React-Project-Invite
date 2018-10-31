/*
 reducers函数： 根据之前的状态和action来产生新的状态
 */

import {combineReducers} from 'redux';

const xxxState = 111;

function xxx(preState = xxxState,action) {
  switch (action.type){
    default:
      return preState;
  }
}

const yyyState = [{}];

function yyy(preState = yyyState,action) {
  switch (action.type){
    default:
      return preState;
  }
}

export default combineReducers({
  xxx,
  yyy
})
