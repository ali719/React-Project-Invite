/**
 * Created by Administrator on 2018/10/31.
 */
import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';

import BossInfo from '../../containers/boss-info';
import DashenInfo from '../dashen-info';

class Main extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path="/bossInfo" component={BossInfo}/>
          <Route path="/dashenInfo" component={DashenInfo}/>
        </Switch>
      </div>
    )
  }
}

export default Main;