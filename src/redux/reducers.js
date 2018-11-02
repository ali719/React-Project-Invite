/*
 reducers函数： 根据之前的状态和action来产生新的状态
 */

import {combineReducers} from 'redux';
import {ERR_MSG,AUTH_SUCCESS,UPDATE_USER,RESET_USER} from './action-type';
import {getRedirectPath} from '../utils'
//初始化状态
const initUserState = {
  username:'',
  type:'',
  msg:'',
  redirectTo:''
};


function user(preState = initUserState,action) {
  switch (action.type){
    case AUTH_SUCCESS:
      return {username:action.data.username,type:action.data.type,msg:'',redirectTo:getRedirectPath(action.data.type,action.data.header)}
    case ERR_MSG:
      console.log(action.data);
      return {...preState,msg:action.data.msg};
    case UPDATE_USER:
      return action.data;
    case RESET_USER:
      return {...action.data}
    default:
      return preState;
  }
}




export default combineReducers({
  user
})
