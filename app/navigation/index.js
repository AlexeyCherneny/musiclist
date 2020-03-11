import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createReduxContainer} from 'react-navigation-redux-helpers';
import {compose} from 'recompose';
import {connect} from 'react-redux';

export const Navigation = createSwitchNavigator({
  Libraries: () => null,
});

const mapState = ({navigation}) => {
  console.log('navigation: ', navigation);
  return {
    state: navigation,
  };
};

export default compose(
  connect(mapState),
  createReduxContainer,
  createAppContainer,
)(Navigation);
