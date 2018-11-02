import React, {Component} from 'react';
import {NavBar,Button,InputItem,TextareaItem} from 'antd-mobile'
import HeaderSelector from '../header-selector';
class DashenInfo extends Component {
  state ={
    post:'',
    introduce:''
  }
  
  handleChange = (name,val) =>{
    this.setState({
      [name]:val
    })
  }
  
  setHeader = header =>{
    this.setState({
      header
    })
  }
  render () {
    return (
      <div>
        <NavBar>大神信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        <InputItem onChange={val => this.handleChange('post',val)}>求职岗位：</InputItem>
        <TextareaItem title="个人介绍" rows={3} onChange={val => this.handleChange('introduce',val)}/>
        <Button type="primary">保存</Button>
      </div>
    )
  }
}

export default DashenInfo;