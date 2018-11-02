/*
 action creators模块：用来创建action对象的工厂函数模块
 - 同步action creator： 返回值是action对象
 - 异步action creator： 返回值是一个回调函数
 */
import {reqLogin,reqRegister,reqUpdateUserInfo} from '../api';
import {ERR_MSG,AUTH_SUCCESS,UPDATE_USER,RESET_USER} from './action-type';

//同步action 注册成功 action-types有几个值，actions中就有几个同步的action
export const authSuccess = user => ({type:AUTH_SUCCESS,data:user});

//同步action ,注册失败
export const errMsg = msg => ({type:ERR_MSG,data:msg});

//同步action 更新成功
export const updateUser = user => ({type:UPDATE_USER,data:user});

//同步action ,更新失败
export const resetUser = msg => ({type:RESET_USER,data:msg});
//注册的一步的action
export const register = data => {
  // data用户提交的请求参数
  // 表单验证，同步方式
  const {username,password,rePassword,type} = data;
  if (!username){
    return errMsg({username,password,msg:'请输入用户名'});
  }else if (!password){
    return errMsg({username,password,msg:'请输入密码'});
  } else if (password != rePassword){
    return errMsg({username,password,msg:'两次密码输入不一致，请重新输入'});
  }else if (!type){
    return errMsg({username,password,msg:'请选择类型'});
  }
  return dispatch =>{
    //发送ajax请求
    reqRegister(data)
      .then(res =>{
        //请求成功
        const result = res.data;
        if (result.code === 0){
          //注册成功
          dispatch(authSuccess(result.data));
        }else {
          //注册失败
          console.log(result.msg);
          dispatch(errMsg(result.msg));
        }
      })
      .catch(err =>{
        //请求失败
        console.log(err);
        dispatch(errMsg({msg: '网络不稳定，请重新试试~', username: data.username, type: data.type}));
      })
  }
}


// 更新用户数据的一步action
export const updateUserInfo = data =>{
  //表单验证
  const {header,post,company,salary,info} = data;
  if (!header){
    return resetUser({msg:'请选择头像'});
  }else if (!post){
    return resetUser({msg:'请输入招聘单位'});
  }else if (!company){
    return resetUser({msg:'请输入公司名称'});
  }else if (!salary){
    return resetUser({msg:'请输入薪资范围'});
  }else if (!info){
    return resetUser({msg:'请输入公司简介'});
  }
  
  
  // 异步方法
  return dispatch =>{
    //发送ajax请求
    reqUpdateUserInfo(data)
      .then(res =>{
        const result = res.data;
        if (result.code === 0){
          //更新成功
          dispatch(updateUser(result,data));
        }else {
        //失败
          dispatch(resetUser({msg:result.msg}));
        }
        
      })
      .catch(err =>{
        //请求失败
        console.log(err);
        dispatch(resetUser({msg:'网络不稳定，请重试'}))
      })
  }
}


