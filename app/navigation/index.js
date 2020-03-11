import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createReduxContainer} from 'react-navigation-redux-helpers';
import {compose} from 'recompose';
import {connect} from 'react-redux';

import Libraries from '../screens/Libraries';
import Library from '../screens/Library';

export const Navigation = createSwitchNavigator({
  Libraries: Libraries,
  Library: Library,
});

const mapState = ({navigation}) => ({
  state: navigation,
});

export default compose(
  connect(mapState),
  createReduxContainer,
  createAppContainer,
)(Navigation);
