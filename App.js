import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView} from 'react-native';

import App from './app/index';

import {store} from './app/store';

class Application extends Component {
  render() {
    return (
      <SafeAreaView>
        <Provider store={store}>
          <App />
        </Provider>
      </SafeAreaView>
    );
  }
}

export default Application;
