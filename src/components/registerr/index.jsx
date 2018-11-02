/**
 * Created by Administrator on 2018/10/31.
 */
import React, {Component} from 'react';
import { NavBar, List, InputItem,Radio, Button,WingBlank, WhiteSpace } from 'antd-mobile';
import PropTypes from 'prop-types';

import Logo from '../logo';


const Item = List.Item;
class Register extends Component {
  static propTypes ={
    user:PropTypes.object.isRequired,
    register:PropTypes.func.isRequired
  }
  state = {
    username:'',
    password:'',
    rePassword:'',
    type:'Boss'
  }
  
  handleChange = (name,val) => {
    //更新状态
    this.setState({
      [name]:val
    })
    
  }
  
  register = async () =>{
    //获取表单数据
    const {username,password,rePassword,type} =this.state;
    console.log(username,password,rePassword,type);
      //发送ajax请求,更新状态
    this.props.register({username,password,rePassword,type});

    
  }
  goLogin = () =>{
    //跳转登录
    this.props.history.replace('/login')
    
  }
  render () {
    const {type} = this.state;
    const {msg,redirectTo} = this.props.user;
    console.log(msg);
    
    if (redirectTo){
      return <Register to={redirectTo} />
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
            <WhiteSpace/>
            <InputItem placeholder="请确认密码" type="password" onChange={val => this.handleChange('rePassword',val)}>确认密码：</InputItem>
            <WhiteSpace />
            <Item>
              用户类型： &nbsp;&nbsp;
              <Radio className="my-radio" checked={type === 'dashen'} onChange={() => this.handleChange('type','dashen')}>大神</Radio> &nbsp;&nbsp;&nbsp;&nbsp;
              <Radio className="my-radio"checked={type === 'Boss'} onChange={() => this.handleChange('type','Boss')}>老板</Radio>
            </Item>
            <WhiteSpace />
            <Button type="primary"  onClick = {this.register}>注 册</Button>
            <WhiteSpace />
            <Button onClick = {this.goLogin}>已有账户</Button>
          </form>
        </WingBlank>
      </div>
    )
  }
}

export default Register;