import React from 'react';
import ReactDOM from 'react-dom';
import RegisterFormContainer from './RegisterFormContainer';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import {createStore, combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'

const reducers = {
  form: formReducer
};

const reducer = combineReducers(reducers);

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
  <RegisterFormContainer />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
