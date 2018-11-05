/**
 * Created by Administrator on 2018/10/31.
 */
import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';

import Boss from '../../containers/boss';
import BossInfo from '../../containers/boss-info';
import Dashen from '../../containers/dashen';
import DashenInfo from '../../containers/dashen-info';
import Message from '../../containers/message';
import Personal from '../../containers/personal';

class Main extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path="/bossInfo" component={BossInfo}/>
          <Route path="/dashenInfo" component={DashenInfo}/>
          <Route path="/boss" component={Boss}/>
          <Route path="/dashen" component={Dashen}/>
          <Route path="/message" component={Message}/>
          <Route path="/personal" component={Personal}/>

        </Switch>
      </div>
    )
  }
}

export default Main;