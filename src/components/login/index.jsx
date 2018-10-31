/**
 * Created by Administrator on 2018/10/31.
 */
import React, {Component} from 'react';
import { NavBar, InputItem, Button,WingBlank, WhiteSpace } from 'antd-mobile';
import Logo from '../logo';

class Login extends Component {
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
  goRegister = () => {
    //跳转注册
    this.props.history.replace('/register')
  }
  render () {
    return (
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        <Logo/>
        <WingBlank>
          <form>
            <WhiteSpace/>
            <InputItem placeholder="请输入用户名" onChange={val => this.handleChange('username',val)}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem placeholder="请输入密码" type="password" onChange={val => this.handleChange('password',val)}>密码：</InputItem>
            <WhiteSpace />
            <Button type="primary" >登 录</Button>
            <Button onClick = {this.goRegister}>还没有有账户</Button>
          </form>
        </WingBlank>
      </div>
    )
  }
}

export default Login;