import {connect} from 'react-redux';
import {compose, lifecycle, withHandlers} from 'recompose';
import {NavigationActions} from 'react-navigation';

import Libraries from '../Components';
import actions from '../../../store/actions';
import selectors from '../../../store/selectors';

const mapState = state => ({
  libraries: selectors.getLibraries(state),
  isLoading: state.libraries.isDownloading,
  navigate: NavigationActions.navigate,
});

const mapDispatch = {
  readLibraries: actions.librariesRequest,
};

const LibrariesContainer = compose(
  connect(mapState, mapDispatch),
  withHandlers({
    handleLibraryPress: ({navigate, navigation}) => libraryId => () => {
      navigation.navigate('Library', {libraryId});
    },
  }),
  lifecycle({
    componentDidMount() {
      const {readLibraries} = this.props;

      readLibraries();
    },
  }),
)(Libraries);

export default LibrariesContainer;
