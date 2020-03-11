import {connect} from 'react-redux';
import {compose, withProps} from 'recompose';

import Libraries from '../Components';
import selectors from '../../../store/selectors';
console.log('selectors: ', selectors);
const mapState = state => ({
  getLibraryById: selectors.getLibraryById(state),
});

const LibrariesContainer = compose(
  connect(mapState),
  withProps(({getLibraryById, navigation}) => {
    const libraryId = navigation.getParam('libraryId', null);
    const library = getLibraryById(libraryId);

    return library;
  }),
)(Libraries);

export default LibrariesContainer;
