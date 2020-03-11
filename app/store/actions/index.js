import {createCRUDActions} from './utils';

const libraryActions = createCRUDActions('library');

export default {
  ...libraryActions,
};
