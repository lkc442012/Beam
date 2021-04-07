import React, { PureComponent } from 'react';
import { Provider, connect } from 'react-redux';
import App from './App';
import createStore from './createStore';
import rootReducer from './redux';

export const store = createStore(rootReducer);

class Main extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Main;
