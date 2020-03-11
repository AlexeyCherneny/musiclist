import {createCRUDSelectors} from './utils';

const librariesSelectors = createCRUDSelectors('library', 'libraries');

export default {
  ...librariesSelectors,
};
