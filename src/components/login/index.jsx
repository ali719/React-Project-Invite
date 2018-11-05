/**
 * Created by Administrator on 2018/10/31.
 */
import React, {Component} from 'react';
import { NavBar, InputItem, Button,WingBlank, WhiteSpace } from 'antd-mobile';
import Logo from '../logo';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

class Login extends Component {
  static propTypes ={
    user:PropTypes.object.isRequired,
    login:PropTypes.func.isRequired
  }
  
  state = {
    username:'',
    password:'',
  }
  
  handleChange = (name,val) => {
    //更新状态
    this.setState({
      [name]:val
    })
  }
  
  login = async () =>{
    //获取表单数据
    const {username,password} =this.state;
    console.log(username,password);
    //发送ajax请求,更新状态
    this.props.login({username,password});
  }
  
  goRegister = () => {
    //跳转注册
    this.props.history.replace('/register')
  }
  render () {
    const {msg,redirectTo} = this.props.user;
    if (redirectTo){
      return <Redirect to={redirectTo} />
    }
    return (
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        <Logo/>
        <WingBlank>
          {msg ? <p className="err">{msg}</p>:''}
          <form>
            <WhiteSpace/>
            <InputItem placeholder="请输入用户名" onChange={val => this.handleChange('username',val)}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem placeholder="请输入密码" type="password" onChange={val => this.handleChange('password',val)}>密码：</InputItem>
            <WhiteSpace />
            <Button type="primary" onClick = {this.login}>登 录</Button>
            <Button onClick = {this.goRegister}>还没有有账户</Button>
          </form>
        </WingBlank>
      </div>
    )
  }
}

export default Login;