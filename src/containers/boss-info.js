/**
 * Created by Administrator on 2018/11/2.
 */
import {connect} from 'react-redux';
import BossInfo from '../components/boss-info';
import {updateUserInfo} from '../redux/actions';

export default connect(
  state => ({user:state.user}),
  {updateUserInfo}
)(BossInfo)