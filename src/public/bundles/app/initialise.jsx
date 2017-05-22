import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TopStoriesContainer from './containers/topstories-pane';
import store from './store';

export default function init() {
  ReactDOM.render(
    (
      <Provider store={store}>
        <TopStoriesContainer />
      </Provider>
    ),
    document.getElementById('main'));
}
